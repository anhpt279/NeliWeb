import React, { FC, AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
interface IButtonProps {
  variant?: string;
  children: React.ReactNode;
  disabled?: boolean;
  type?: string;
}

const Button: FC<
  IButtonProps &
    AnchorHTMLAttributes<HTMLAnchorElement> &
    ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  children,
  variant = "primary",
  disabled,
  type = "submit",
  ...otherProps
}) => {
  return (
    <a
      className={`btn-reusable ${variant}-btn` + (disabled ? "disabled" : "")}
      {...otherProps}
    >
      <button disabled={disabled} type={type}>{children}</button>
    </a>
  );
};

export default Button;
