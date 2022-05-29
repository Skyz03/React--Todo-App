import React from "react";
import cross from "../img/icon-cross.svg";

const InputAdd = () => {
  return (
    <div className="mt-4 shadow-2xl">
      <ul className="w-full">
        <li className="flex w-100 bg-white items-center py-3 px-4">
          <button className="rounded-full border w-5 aspect-square"></button>
          <span className="w-[75%] px-3 text-sm">check</span>
          <div className="ml-auto flex items-center gap-2">
            <button className="cursor-pointer">
              <img src={cross} alt="cross-img" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default InputAdd;
