import React, { FC } from "react";
import Backdrop from "./UI/Backdrop";
import Select from "./UI/Select";
import { options } from "../helpers/data";
import Search from "./Search";

const Header: FC = () => {
  return (
    <header className="h-[270px] relative">
      <Backdrop />
      <div className="bg-header-image bg-cover h-full text-white-500 grid place-items-center ">
        <div className="absolute w-1/2 grid place-items-center gap-5">
          <h1 className="text-5xl font-bold">Search for Books</h1>
          <Search />
        </div>
      </div>
    </header>
  );
};

export default Header;