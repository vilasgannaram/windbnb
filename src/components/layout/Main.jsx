import React from "react";
import List from "../property/List";

const Main = () => {
  return (
    <main className="mt-8 font-montserrat lg:mt-16">
      <div className="flex items-center justify-between ">
        <h1 className="text-[18px] font-bold leading-[22px] text-gray1 lg:text-[24px] lg:leading-[29px]">
          Stays in Finland
        </h1>

        <p className="text-[14px] font-medium leading-[17px] text-gray2">
          12+ stays
        </p>
      </div>

      <List />
    </main>
  );
};

export default Main;
