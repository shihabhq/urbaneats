import React from "react";

const Input = ({
  name,
  type = "text",
  placeholder,
  text,
  value,
  changeVal,
  readonly = false,
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-base-content mb-2">
        {text}
      </label>
      <input
        type={type}
        value={value}
        id={name}
        
        className="shadow-sm text-base-content rounded-md w-full px-3 py-2 border border-gray-400 focus:outline-none focus:ring-btncol focus:border-btncol"
        placeholder={placeholder}
        style={{ backgroundColor: "inherit" }}
        required
        onChange={(e) => changeVal(e.target.value)}
        readOnly={readonly}
      />
    </div>
  );
};

export default Input;
