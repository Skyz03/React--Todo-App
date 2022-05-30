import React from "react";

const InputAdd = () => {
  return (
    <div className="pt-8 mb-8">
      <form className="w-100" action="#">
        <label className="relative" htmlFor="add-input">
          <span className="absolute top-1/2 left-4 aspect-square w-5 -translate-y-1/2 rounded-full border border-light-text-secondary dark:border-dark-text-tertiary md:left-6 md:w-6"></span>
          <input
            className="w-full rounded border-0 bg-light-bg-primary p-3 px-6 pl-12 text-sm text-light-text-tertiary caret-blue shadow-2xl "
            type="text"
            placeholder="Create a new todo..."
          />
        </label>
      </form>
    </div>
  );
};

export default InputAdd;
