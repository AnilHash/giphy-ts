import React from "react";
import { InputType } from "../../Types";

const Input: React.FC<InputType> = ({
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  onKeyDown,
}) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => onKeyDown && onKeyDown(e.code)}
    />
  );
};

export default Input;
