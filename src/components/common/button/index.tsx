import React, { FC } from "react";
import styles from "./button.module.css";

type Props = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  buttonType?: "primary" | "secondary";
  buttonAs?: "a" | "button";
  buttonFormat?: "default" | "mini";
  href?: string;
  target?: string;
  rel?: string;
  width?: string;
  disabled?: boolean;
};

const ButtonSVG: FC<{ type: "primary" | "secondary" }> = ({
  children,
  type = "primary",
}) => {
  return (
    <svg
      className={`${styles.button__bg}`}
      data-type={type}
      width="100%"
      height="100%"
      viewBox="0 0 163 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={styles.button__border}
        d="M161.76 1V36.3074L152.102 45.9658H1V10.6584L10.6584 1H161.76Z"
        stroke="#ED1C24"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        className={styles.button__center}
        d="M158.434 4.25513V34.4488L150.163 42.7109H4.32617V12.5172L12.5883 4.25513H158.434Z"
        fill="#ED1C24"
      />
      <text x="50%" y="50%" className={styles.button__text}>
        {" "}
        {children}
      </text>
    </svg>
  );
};

const ButtonMiniSVG: FC<{ type: "primary" | "secondary" }> = ({
  children,
  type = "primary",
}) => {
  return (
    <svg
      className={`${styles.button__bg}`}
      data-type={type}
      width="100%"
      height="100%"
      viewBox="0 0 79 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={styles.button__border}
        d="M78 1V36.3074L65.7514 45.9658H1V10.6584L13.2486 1H78Z"
        stroke="#ED1C24"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        className={styles.button__center}
        d="M73.7819 4.25488V34.4485L63.2927 42.7106H5.21826V12.517L15.6961 4.25488H73.7819Z"
        fill="#ED1C24"
      />

      <text x="50%" y="50%" className={styles.button__text}>
        {children}
      </text>
    </svg>
  );
};

const Button: FC<Props> = ({
  children,
  onClick,
  className = "",
  buttonType,
  buttonAs,
  buttonFormat = "default",
  ...props
}) => {
  return (
    <>
      {
        {
          button: (
            <button
              className={`${styles.button} ${className}`}
              onClick={onClick}
              {...props}
            >
              {buttonFormat === "mini" ? (
                <ButtonMiniSVG type={buttonType}>{children}</ButtonMiniSVG>
              ) : (
                <ButtonSVG type={buttonType}>{children}</ButtonSVG>
              )}
            </button>
          ),
          a: (
            <a {...props}>
              <p className={`${styles.button} ${className}`}>
                {buttonFormat === "mini" ? (
                  <ButtonMiniSVG type={buttonType}>{children}</ButtonMiniSVG>
                ) : (
                  <ButtonSVG type={buttonType}>{children}</ButtonSVG>
                )}
              </p>
            </a>
          ),
        }[props.disabled ? "button" : buttonAs || "button"]
      }
    </>
  );
};

export default Button;
