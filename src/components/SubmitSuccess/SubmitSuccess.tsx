import React, { useEffect, useState } from "react";

const SubmitSuccess = ({ closeModal }: any) => {
  // 5s is time display successform can be go Home section after 5s or click button back
  const [returnTime, setReturnTime] = useState(5);

  useEffect(() => {
    if (returnTime === 0) {
      window.location.href = "/";
    }
    if (returnTime === -1) {
      closeModal();
    }
    setTimeout(() => {
      setReturnTime(returnTime - 1);
    }, 1000);
  }, [returnTime,closeModal]);

  return (
    <div className="overlay">
      <div className={`container-submitSuccess`}>
        <p className="header-success">Thank you!</p>  
        <p className="content-success">
          We have received your submission and we&#39;ll be{" "}
          <br className="br-desktop" /> in touch really soon
        </p>
        <a className="container-btn-success" href="#home">
          <button onClick={closeModal} className="btn-back">
            Back to home
          </button>
        </a>
        <p className="footer-success">
          Or It&#39;ll be automatically back to Home in {returnTime} seconds
        </p>
      </div>
    </div>
  );
};

export default SubmitSuccess;
