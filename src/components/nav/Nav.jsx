import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { FaXmark } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <nav className=" w-full fixed top-0 right-0 left-0 z-50">
      <div className="flex bg-black md:px-4 px-12 py-4 justify-between items-center">
        <h1 className="font-mono font-bold text-3xl sm:text-5xl md:text-4xl lg:text-6xl text-red-600">
          FraCars
        </h1>
        <ul className="hidden md:flex gap-x-4 text-[#e2e8f0] md:text-lg lg:text-3xl lg:gap-x-10 ">
          <li className="hover:border-b-4 cursor-pointer border-red-600">
            Buy Car
          </li>
          <li className="hover:border-b-4 cursor-pointer border-red-600">
            Rent Car
          </li>
          <li className="hover:border-b-4 cursor-pointer border-red-600">
            Financing
          </li>
          <li className="hover:border-b-4 cursor-pointer border-red-600">
            About Us
          </li>
          <li className="hover:border-b-4 cursor-pointer border-red-600">
            Contact Us
          </li>
        </ul>
        <div className="hidden md:flex cursor-pointer gap-x-4 text-[#e2e8f0] md:text-xl lg:text-3xl lg:gap-x-6">
          <CiSearch />
          <CiHeart />
          <CiShoppingCart />
          <CiUser />
        </div>
        <div
          className="md:hidden text-[#e2e8f0] cursor-pointer"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? <FaXmark size={35} /> : <GiHamburgerMenu size={35} />}
        </div>
      </div>
      {openNav && (
        <div className="bg-black absolue top-12 w-full h-[35rem] ">
          <ul className="text-[#e2e8f0] mb-8 pb-7 pl-[8rem] py-15 text-3xl flex flex-col space-y-8">
            <li
              onClick={() => setOpenNav(!openNav)}
              className="hover:border-b-4 border-red-600 cursor-pointer hover:pb-2 hover:w-[6rem]"
            >
              Home
            </li>
            <li
              onClick={() => setOpenNav(!openNav)}
              className="hover:border-b-4 border-red-600 cursor-pointer hover:pb-2 hover:w-[8rem]"
            >
              Buy Car
            </li>
            <li
              onClick={() => setOpenNav(!openNav)}
              className="hover:border-b-4 border-red-600 cursor-pointer hover:pb-2 hover:w-[8rem]"
            >
              Rent Car
            </li>
            <li
              onClick={() => setOpenNav(!openNav)}
              className="hover:border-b-4 border-red-600 cursor-pointer hover:pb-2 hover:w-[6rem]"
            >
              Finance
            </li>
            <li
              onClick={() => setOpenNav(!openNav)}
              className="hover:border-b-4 border-red-600 cursor-pointer hover:pb-2 hover:w-[10rem]"
            >
              Contact Us
            </li>
          </ul>
          <div className="flex gap-x-4 text-[#e2e8f0] cursor-pointer text-3x pl-[6rem] py-12">
            <CiSearch />
            <CiHeart />
            <CiShoppingCart />
            <CiUser />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
