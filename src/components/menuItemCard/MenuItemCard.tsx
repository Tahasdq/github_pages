import React from "react";
import { Link } from "react-router-dom";
import { MenuItemCardProps } from "../../Types";

const MenuItemCard: React.FC<MenuItemCardProps> = ({
  item,
  index,
  showSearch,
  setShowSearch,
}) => {
  return (
    <li
      className={
        item.classes ||
        "border-2 border-white border-r-0 py-6 text-center w-full items-center justify-center text-xs md:text-md hover:w-[115%] transition-all duration-100 ease-linear hover:bg-gradient-to-b hover:from-[rgba(121,121,121,0.8)] hover:via-black hover:to-[rgba(121,121,121,0.8)] hidden md:flex"
      }
      key={index}
    >
      {item.isMenu ? (
        <>
          <div
            className="flex flex-col justify-around w-5 h-5 cursor-pointer"
            onClick={item.onClick}
          >
            <div className="h-[0.8px] bg-white transition-all duration-500 ease-in-out "></div>
            <div className="h-[0.8px] bg-white transition-all duration-500 ease-in-out "></div>
            <div className="h-[0.8px] bg-white transition-all duration-500 ease-in-out "></div>
          </div>
          menu
        </>
      ) : item.isLast ? (
        <>
          <i
            className="fa-light fa-sm fa-magnifying-glass cursor-pointer text-gray-300 transition-all duration-100 ease-linear group-hover:text-white"
            onClick={() => setShowSearch(!showSearch)}
          ></i>
          <button
            className="border-[1px] border-white py-1 px-4"
            onClick={item.onClick}
          >
            {item.name}
          </button>
        </>
      ) : (
        <div className="hidden md:flex">
          {item.link && <Link to={item.link}>{item.name}</Link>}
        </div>
      )}
    </li>
  );
};

export default MenuItemCard;
