import React from "react";
import cross from "../img/icon-cross.svg";

const InputAdd = () => {
  return (
    <div className="mt-4 shadow-2xl shadow-black/20 md:mt-6">
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
      <div className="w-100 border-t flex items-center justify-between  rounded-md px-4 py-3 bg-white space-x-4">
        <span className="text-xs text-xs text-light-text-primary dark:text-dark-text-quaternary md:text-sm">
          1 Item left
        </span>

        {/* <div className="flex justify-between">
          <button className="text-xs font-bold text-light-text-primary">
            All
          </button>
          <button className="text-xs font-bold  px-1 text-light-text-primary">
            Active
          </button>
          <button className="text-xs font-bold text-light-text-primary">
            Completed
          </button>
        </div> */}

        <button className="text-xs text-light-text-primary">
          Clear Completed
        </button>
      </div>

      <div className="mt-4 bg-white px-4 py-3 flex items-center justify-center space-x-4 rounded">
        <button className="text-xs text-light-text-primary">All</button>
        <button className="text-xs text-light-text-primary">Active</button>
        <button className="text-xs text-light-text-primary">Completed</button>
      </div>
    </div>
  );
};

export default InputAdd;
