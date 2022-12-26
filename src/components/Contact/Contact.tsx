import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import SubmitSuccess from "../SubmitSuccess/SubmitSuccess";

const Contact = () => {
  const [state, handleState] = useForm(
    `${process.env.NEXT_PUBLIC_CONTACT_FORM_KEY}`
  );
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [enteredNameTouched, setEnteredNameTouched] = useState<boolean>(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const enteredNameIsValid = name.trim() !== "";
  const enteredEmailIsValid = email.trim() !== "" && email.includes("@");
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const emailInputIsInValid = !enteredEmailIsValid && enteredEmailTouched;
  const formIsValid = enteredNameIsValid && enteredEmailIsValid;

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };
  const handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };
  const handleNameInputBlur = () => {
    setEnteredNameTouched(true);
  };

  const handleEmailInputBlur = () => {
    setEnteredEmailTouched(true);
  };

  useEffect(() => {
    if (state.succeeded) {
      setEnteredNameTouched(true);
      setEnteredEmailTouched(true);
      if (!enteredNameIsValid && !enteredEmailIsValid) {
        return;
      }
      setEmail("");
      setEnteredEmailTouched(false);
      setName("");
      setEnteredNameTouched(false);
      setMessage("");
      setPhone("");
    }
  }, [state.succeeded]);

  const nameInputClasses = nameInputIsInvalid ? "invalid" : "";
  const emailInputClasses = emailInputIsInValid ? "invalid" : "";

  return (
    <div id="contact" className="contact">
      <div className="contact-header-content">
        <p className="contact-header">Contact us</p>
        <h1 className="contact-title">
          We truly aim for complete partnership. We discuss challenges, <br />{" "}
          business models and goals, before ever writing a line of code.
        </h1>
        <p className="contact-title-active">
          This ensures generating the best solution on our path to success.
        </p>
      </div>

      <div id="contact-form" className=" container-form contact-form">
        <div className="contact-form-title">
          <p>
            Start collaborating with us <span>now</span>
          </p>
        </div>

        <form onSubmit={handleState} autoComplete="off">
          <div className="contact-form-content">
            <div className="contact-form-input">
              <div className={nameInputClasses}>
                <input
                  placeholder="Your name (*)"
                  id="name"
                  type="name"
                  name="yourname"
                  value={name}
                  onChange={handleChangeName}
                  onBlur={handleNameInputBlur}
                  required
                />
                <ValidationError
                  prefix="yourname"
                  field="yourname"
                  errors={state.errors}
                />
              </div>
              <div className={emailInputClasses}>
                <input
                  type="email"
                  placeholder="Your email (*)"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleChangeEmail}
                  onBlur={handleEmailInputBlur}
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder="Your phone number"
                value={phone}
                onChange={handleChangePhone}
              />
            </div>
            <div className="contact-form-textarea">
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about project..."
                value={message}
                onChange={handleChangeMessage}
              ></textarea>

              <div className="contact-btn">
                <button
                  type="submit"
                  disabled={!formIsValid}
                  className="button contact-form-btn"
                  onClick={() => setSuccess(true)}
                >
                  Submit
                </button>
              </div>
              {success && (
                <SubmitSuccess closeModal={() => setSuccess(false)} />
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
