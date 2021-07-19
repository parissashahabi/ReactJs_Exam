import React from "react";


export const FormikInput = ({
  type,
  error,
  value,
  onChange,
  className,
  ...props
}) => {

  return (
    <div>
      <input
        className="text-input"
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};
