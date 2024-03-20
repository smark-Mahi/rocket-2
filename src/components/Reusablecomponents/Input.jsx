"use client";
import React, { useState } from "react";

const Input = ({ label, type, val, setVal }) => {
  const [show, setShow] = useState(false);
  const [isBorderActive, setIsBorderActive] = useState(false);
  function showPasswordHandler() {
    setShow(!show);
  }

  return (
    <div className="flex flex-col justify-start gap-2">
      <label htmlFor={label} className="text-sm font-semibold">
        {label}
      </label>
      {type === "password" ? (
        <div
          className={`w-[456px] flex items-center gap-2 border border-slate-300 rounded-md overflow-hidden ${
            isBorderActive && "border-black"
          }`}
          onClick={() => setIsBorderActive(!isBorderActive)}
        >
          <input
            value={val}
            onChange={(e) => setVal(e.target.value)}
            type={!show ? type : "text"}
            placeholder="Enter"
            id={label}
            className="h-[48px] w-[400px] pl-2 outline-none border-none text-sm overflow-hidden focus:outline-none focus-border-none "
          />
          <span
            className="underline cursor-pointer"
            onClick={showPasswordHandler}
          >
            show
          </span>
        </div>
      ) : (
        <input
          value={val}
          onChange={(e) => setVal(e.target.value)}
          type={type}
          placeholder="Enter"
          id={label}
          className="h-[48px] w-[456px] pl-2 outline-none border border-slate-300 rounded-md text-sm  focus:outline-none focus:border-black "
        />
      )}
    </div>
  );
};

export default Input;
