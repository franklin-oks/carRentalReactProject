import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
const Updated = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <section className="bg-gray-100 w-full min-h-screen pt-12 md:pt-15 p-4 lg:pb-30">
      <h1 className="text-center mb-8 lg:my-40 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-6xl">
        Stay updated with latest car <br />{" "}
        <span className="text-yellow-400">trends and tips</span>
      </h1>
      <div className="flex flex-col lg:flex-row space-x-15 space-y-10">
        <img
          src="https://plus.unsplash.com/premium_photo-1665203593162-b98285d838c7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="me"
          className=" md:ml-8 rounded-3xl"
        />

        <div className="flex flex-col space-x-2">
          <div className="flex space-x-4 mb-8">
            <img
              src="https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="car"
              className="hidden lg:block w-75 h-75 object-cover rounded-3xl"
            />
            <div
              className={`bg-gray-200 flex p-2 lg:mt-8 md:p-8 md:w-[40rem] lg:w-[55rem] mb-8 flex-col  space-y-4 ${
                open2 ? "lg:h-60" : "lg:h-40"
              }`}
            >
              <h2 className="text-lg font-bold lg:text-2xl">
                How to maintain your car for long-term performance
              </h2>
              <div className="flex justify-between p-2 items-center">
                <div
                  className="flex justify-center items-center gap-2 cursor-pointer"
                  onClick={() => setOpen2(!open2)}
                >
                  <span className="text-green-400 text-lg">
                    {open2 ? "Close" : "Read more"}
                  </span>
                  <span className="text-green-400">
                    {open2 ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </span>
                </div>
                <div className="flex justify-center items-center gap-1">
                  <span>
                    <MdOutlineDateRange />
                  </span>
                  <span className="text-gray-800 text-lg">01 July 2025</span>
                </div>
              </div>
              {open2 && (
                <p className="text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  iure ratione ipsa, quasi accusamus officia soluta esse
                  expedita minus odio!
                </p>
              )}
            </div>
          </div>

          <div className="flex space-x-4">
            <img
              src="https://plus.unsplash.com/premium_photo-1677574622702-d93f29b3708b?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="logo"
              className="hidden lg:block w-75 h-75 object-cover rounded-3xl"
            />
            <div
              className={`bg-gray-200 flex p-2 md:p-8 lg:mt-8 flex-col space-y-4 md:w-[40rem] lg:w-[55rem] ${
                open ? "lg:h-60" : "lg:h-40"
              } `}
            >
              <h2 className="text-lg font-bold lg:text-2xl">
                Rountine on changing car engine oil for healthiness
              </h2>
              <div className="flex justify-between p-2 items-center">
                <div
                  className="flex justify-center cursor-pointer  items-center gap-1"
                  onClick={() => setOpen(!open)}
                >
                  <span className="text-green-400 text-lg">
                    {open ? "Close" : "Read more"}
                  </span>
                  <span className="text-green-400">
                    {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </span>
                </div>
                <div className="flex justify-center items-center gap-1">
                  <span>
                    <MdOutlineDateRange />
                  </span>
                  <span className="text-gray-800 text-lg">01 July 2025</span>
                </div>
              </div>
              {open && (
                <p className="text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  iure ratione ipsa, quasi accusamus officia soluta esse
                  expedita minus odio!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Updated;
