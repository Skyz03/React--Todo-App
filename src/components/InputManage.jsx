import React from "react";

const InputManage = () => {
  return (
    <>
      <div className="w-100 border-t flex items-center justify-between  rounded-md px-4 py-3 bg-white space-x-4">
        <span className="text-xs text-xs text-light-text-primary dark:text-dark-text-quaternary md:text-sm">
          1 Item left
        </span>

        {window.innerWidth > 375 ? (
          <div className="flex justify-between">
            <button className="text-xs font-bold text-light-text-primary">
              All
            </button>
            <button className="text-xs font-bold  px-1 text-light-text-primary">
              Active
            </button>
            <button className="text-xs font-bold text-light-text-primary">
              Completed
            </button>
          </div>
        ) : null}

        <button className="text-xs text-light-text-primary">
          Clear Completed
        </button>
      </div>

      <div className="mt-4 bg-white px-4 py-3 flex items-center justify-center space-x-4 rounded">
        <button className="text-xs text-light-text-primary">All</button>
        <button className="text-xs text-light-text-primary">Active</button>
        <button className="text-xs text-light-text-primary">Completed</button>
      </div>
    </>
  );
};

export default InputManage;
