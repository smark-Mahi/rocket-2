"use client";
import { useState } from "react";
import { IoCheckmark } from "react-icons/io5";
const Categories = ({ category, setData, data }) => {
  const [selected, setSelected] = useState(false);
  function selectHandler(category) {
    setSelected(!selected);
    let key;
    data.filter((item, i) => {
      if (item.id === category.id) {
        key = i;
      }
    });
    data[key] = {
      id: category.id,
      name: category.name,
      isSelected: !category.selected,
    };
    console.log(data, "datay");
    // const isServer = typeof window === "undefined";
    // if (!isServer) {
    //   localStorage.setItem("data", JSON.stringify(data));
    // }
    setData(data);
  }

  return (
    <li className="flex items-center gap-2">
      <span
        onClick={() => selectHandler(category)}
        className={`w-4 h-4 rounded-sm cursor-pointer flex items-center justify-center  ${
          selected || category.isSelected ? "bg-black" : "bg-[#CCCCCC]"
        }`}
      >
        {selected || category.isSelected ? (
          <IoCheckmark className="text-white text-sm" />
        ) : (
          ""
        )}
      </span>{" "}
      <span>{category.name}</span>
    </li>
  );
};

export default Categories;
