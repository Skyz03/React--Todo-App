import React from "react";
import icon from "../img/icon-moon.svg";

const Header = () => {
  return (
    <div className="bg-hero-pattern min-h-screen bg-no-repeat">
      <main className="mx-auto w-[87%] max-w-[34rem] py-10 md:py-20">
        {/* Top Title with button  */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold uppercase text-white tracking-[.8rem]">
            Todo
          </h1>

          <div>
            <button className="cursor-pointer" type="button">
              <img src={icon} alt="theme-icon" />
            </button>
          </div>
        </div>

        {/* Input Component  */}
      </main>
    </div>
  );
};

export default Header;
