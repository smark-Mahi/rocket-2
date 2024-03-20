import React from "react";

const Input = ({ label, type, val, setVal }) => {
  return (
    <div className="flex flex-col justify-start gap-2">
      <label htmlFor={label} className="text-sm font-semibold">
        {label}
      </label>
      <input
        value={val}
        onChange={(e) => setVal(e.target.value)}
        type={type}
        placeholder="Enter"
        id={label}
        className="h-[48px] w-[456px] pl-2 outline-none border border-slate-300 rounded-md text-sm  focus:outline-none focus:border-black "
      />
    </div>
  );
};

export default Input;
