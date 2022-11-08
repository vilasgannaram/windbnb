import React from "react";
import logo from "/triangleLogo.png";

const Header = () => {
  return (
    <header className="mt-6 flex flex-col lg:mt-8 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-center">
        <img className="" src={logo} alt="" />
        <h1 className="ml-2  font-poppins text-[14px] font-bold leading-[21px] text-orange">
          windbnb
        </h1>
      </div>

      <div className="mt-9 flex self-center rounded-xl font-mulish text-[14px] font-normal leading-[18px] shadow drop-shadow-md lg:mt-0">
        <p className="border-r border-white1 p-4 text-gray1">
          Helsinki, Finland
        </p>
        <p className="border-r border-white1 p-4 text-gray4">Add guests</p>
        <i className="material-icons cursor-pointer p-4 text-orange">search</i>
      </div>
    </header>
  );
};

export default Header;
