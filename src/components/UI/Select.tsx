import React, { FC } from "react";

interface SelectProps {
  label?: string;
  options: any;
  onChange?: (e: any) => any;
}

const Select: FC<SelectProps> = ({ label, options, ...props }) => {
  const htmlFor = `${label}-${Math.random()}`;

  return (
    <div className="text-xl">
      <label className="mr-2" htmlFor={htmlFor}>
        {label}
      </label>

      <select className="h-11 w-48 text-black-500/75 " id={htmlFor} {...props}>
        {options.map((option: any, index: number) => {
          return (
            <option value={option.value} key={option.value + index}>
              {option.text}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;