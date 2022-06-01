import React from "react";
import cross from "../img/icon-cross.svg";

const InputList = (props) => {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="shadow-2xl shadow-black/20 ">
      <ul className="w-full">
        <li className="flex w-100 bg-white items-center py-3 px-4">
          <button className="rounded-full border w-5 aspect-square"></button>
          <span className="w-[75%] px-3 text-sm">{props.task}</span>
          <div className="ml-auto flex items-center gap-2">
            <button onClick={handleClick} className="cursor-pointer">
              <img src={cross} alt="cross-img" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default InputList;
