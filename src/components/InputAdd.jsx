import React from "react";
import cross from "../img/icon-cross.svg";

const InputAdd = (props) => {
  const [tasks, setTask] = React.useState({
    task: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => {
      return {
        ...prevTask,
        [name]: value,
      };
    });
  };

  const submitTask = (e) => {
    e.preventDefault();
    setTask({
      task: "",
    });
    props.onAdd(tasks);
  };
  return (
    <div className="pt-8 mb-8">
      <form className="w-100" action="#">
        <label className="relative" htmlFor="add-input">
          <span className="absolute top-1/2 left-4 aspect-square w-5 -translate-y-1/2 rounded-full border border-light-text-secondary dark:border-dark-text-tertiary md:left-6 "></span>
          <input
            className="w-full rounded border-0 bg-light-bg-primary p-3 px-6 pl-16 text-sm text-light-text-tertiary caret-blue shadow-2xl "
            type="text"
            name="task"
            value={tasks.task}
            placeholder="Create a new todo..."
            onChange={handleChange}
          />
          <span className="absolute right-10 -bottom-1">
            <button className="cursor-pointer" onClick={submitTask}>
              <img className="scale-75 rotate-45" src={cross} alt="cross-img" />
            </button>
          </span>
        </label>
      </form>
    </div>
  );
};

export default InputAdd;
