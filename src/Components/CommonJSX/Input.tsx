import React from "react";

interface InputType {
  name: string;
  type?: string;
  value: string;
  placeholder: string;
  onChange: (str: string) => void;
  onKeyDown?: (code: string) => void;
}

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
