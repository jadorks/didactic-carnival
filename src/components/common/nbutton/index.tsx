import React, { FC } from "react";
import styles from "./button.module.css";

type Props = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  buttonType?: "primary" | "secondary";
  buttonAs?: "a" | "button";
  buttonFormat?: "default" | "alt";
  href?: string;
  target?: string;
  rel?: string;
  width?: string;
  disabled?: boolean;
};

const AltButtonSVG: FC<{ type: "primary" | "secondary" }> = ({
  children,
  type = "primary",
}) => {
  return (
    <svg
      className={`${styles.button__bg}`}
      data-type={type}
      width="100%"
      height="100%"
      viewBox="0 0 177 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(0,-9.2)">
        <mask id="path-1-inside-1_30_12" fill="white">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17 56.6658L177 56.6658L177 9.66577L42.6864 9.66578L17 30.8289L17 56.6658Z"
          />
        </mask>

        {/* center */}
        <path
          // className={styles.button__center}
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17 56.6658L177 56.6658L177 9.66577L42.6864 9.66578L17 30.8289L17 56.6658Z"
          fill="#3A0503"
        />
        {/* endcenter */}

        {/* border */}
        <path
          className={styles.button__border}
          d="M177 56.6658L177 57.6658L178 57.6658L178 56.6658L177 56.6658ZM17 56.6658L16 56.6658L16 57.6658L17 57.6658L17 56.6658ZM177 9.66577L178 9.66577L178 8.66577L177 8.66577L177 9.66577ZM42.6864 9.66578L42.6864 8.66578L42.3276 8.66578L42.0506 8.89399L42.6864 9.66578ZM17 30.8289L16.3641 30.0571L16 30.3571L16 30.8289L17 30.8289ZM177 55.6658L17 55.6658L17 57.6658L177 57.6658L177 55.6658ZM176 9.66577L176 56.6658L178 56.6658L178 9.66577L176 9.66577ZM42.6864 10.6658L177 10.6658L177 8.66577L42.6864 8.66578L42.6864 10.6658ZM42.0506 8.89399L16.3641 30.0571L17.6359 31.6007L43.3223 10.4376L42.0506 8.89399ZM18 56.6658L18 30.8289L16 30.8289L16 56.6658L18 56.6658Z"
          fill="#CE9C28"
          mask="url(#path-1-inside-1_30_12)"
        />
        {/* endborder */}

        {/* top-corner */}
        <path
          d="M11.7387 26.5803L11.7386 9.6717L32.2614 9.67168L11.7387 26.5803Z"
          fill="#3A0503"
          stroke="#D9AC43"
        />
        {/* end top-corner */}

        <text x="55%" y="60%" className={styles.button__text}>
          {" "}
          {children}
        </text>
      </g>
    </svg>
  );
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
      viewBox="0 0 177 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="path-1-inside-1_56_56" fill="white">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M160 0H0V47H134.314L160 25.8369V0Z"
        />
      </mask>

      {/* center */}
      <path
        // className={styles.button__center}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M160 0H0V47H134.314L160 25.8369V0Z"
        fill="#3A0503"
      />

      {/* endcenter */}

      {/* border */}
      <path
        className={styles.button__border}
        d="M0 0V-1H-1V0H0ZM160 0H161V-1H160V0ZM0 47H-1V48H0V47ZM134.314 47V48H134.672L134.949 47.7718L134.314 47ZM160 25.8369L160.636 26.6087L161 26.3087V25.8369H160ZM0 1H160V-1H0V1ZM1 47V0H-1V47H1ZM134.314 46H0V48H134.314V46ZM134.949 47.7718L160.636 26.6087L159.364 25.0651L133.678 46.2282L134.949 47.7718ZM159 0V25.8369H161V0H159Z"
        fill="#CE9C28"
        mask="url(#path-1-inside-1_56_56)"
      />

      {/* endborder */}

      {/* bottom-corner */}
      <path
        d="M164.84 30.0855L164.84 46.9941L144.318 46.9941L164.84 30.0855Z"
        fill="#3A0503"
        stroke="#D9AC43"
      />

      {/* end bottom-corner */}

      <text x="45%" y="45%" className={styles.button__text}>
        {" "}
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
              {buttonFormat === "alt" ? (
                <AltButtonSVG type={buttonType}>{children}</AltButtonSVG>
              ) : (
                <ButtonSVG type={buttonType}>{children}</ButtonSVG>
              )}
            </button>
          ),
          a: (
            <a {...props}>
              <p className={`${styles.button} ${className}`}>
                {buttonFormat === "alt" ? (
                  <AltButtonSVG type={buttonType}>{children}</AltButtonSVG>
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
