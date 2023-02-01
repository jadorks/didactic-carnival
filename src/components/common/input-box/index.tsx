import React, { FC } from "react";
import styles from "./input-box.module.css";

interface IInputBox {
  handleChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: any;
  placeholder?: string;
  className?: string;
}

const InputBox: FC<IInputBox> = ({
  handleChange,
  value,
  placeholder,
  className,
  ...props
}) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <div className="w-full relative">
        <input
          className="w-full outline-none"
          type="text"
          value={value || ""}
          placeholder={placeholder}
          onChange={handleChange}
          {...props}
        />
      </div>
    </div>
  );
};

export default InputBox;
