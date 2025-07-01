import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Questions = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  return (
    <div className="bg-gray-100 w-full min-h-screen px-6 py-12 lg:py-12">
      <div className="flex flex-col lg:flex-row space-x-6 gap-4 justify-between items-center">
        <div className="flex flex-col space-y-10 md:space-y-18 md:p-4">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
            Frequently asked <span className="text-yellow-400">Questions</span>
          </h1>
          <img
            src="https://plus.unsplash.com/premium_photo-1683134240084-ba074973f75e?q=80&w=995&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="car"
            className="h-[25rem] w-[25rem] rounded-2xl md:size-[40rem] lg:h-[50rem] lg:w-[50rem] object-cover"
          />
        </div>

        <div className={`flex flex-col space-y-12 p-4`}>
          <div
            className={` ${
              open ? "bg-green-500" : "bg-gray-200"
            } w-full sm:w-[35rem] md:w-[40rem] lg:w-[70rem] h-auto rounded-2xl`}
          >
            <div className=" p-4 md:p-8 flex justify-between items-center space-x-8 ">
              <span className="font-bold lg:text-xl">
                What percentage will i get when referred a person?
              </span>
              <span
                className="bg-green-500 text-white h-12 w-12 text-2xl rounded-full font-bold flex justify-center items-center cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                {open ? (
                  <div className="cursor-pointer w-12 h-12 rounded-full flex justify-center items-center bg-gray-200">
                    <IoIosArrowUp />
                  </div>
                ) : (
                  <div>
                    <IoIosArrowDown />
                  </div>
                )}
              </span>
            </div>
            {open && (
              <p className="text-lg w-full p-4 mt-8 text-gray-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis perferendis ad ipsa ipsum, architecto molestias error
                ut temporibus eos optio illo possimus cupiditate, necessitatibus
                sit eum tenetur voluptates nostrum! Magni facilis aspernatur a
                est autem rem magnam dicta! Necessitatibus neque doloribus earum
                ducimus recusandae tempore consequuntur ut perspiciatis ratione
                velit.
              </p>
            )}
          </div>
          <div
            className={`${
              open1 ? "bg-green-500" : "bg-gray-200"
            }  w-full sm:w-[35rem] md:w-[40rem] lg:w-[70rem] h-auto rounded-2xl`}
          >
            <div className=" p-4 md:p-8 flex justify-between items-center space-x-8">
              <span className="font-bold lg:text-xl">
                How can the company repair my car when damaged?
              </span>
              <span
                className="bg-green-500 text-white w-12 h-12 rounded-full text-2xl font-bold flex justify-center items-center cursor-pointer"
                onClick={() => setOpen1(!open1)}
              >
                {open1 ? (
                  <div className="cursor-pointer w-12 h-12 bg-gray-200 flex justify-center items-center rounded-full">
                    <IoIosArrowUp />
                  </div>
                ) : (
                  <IoIosArrowDown />
                )}
              </span>
            </div>
            {open1 && (
              <p className="text-lg w-full lg:w-[70rem] p-4 mt-8 text-gray-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis perferendis ad ipsa ipsum, architecto molestias error
                ut temporibus eos optio illo possimus cupiditate, necessitatibus
                sit eum tenetur voluptates nostrum! Magni facilis aspernatur a
                est autem rem magnam dicta! Necessitatibus neque doloribus earum
                ducimus recusandae tempore consequuntur ut perspiciatis ratione
                velit.
              </p>
            )}
          </div>
          <div
            className={`${
              open2 ? "bg-green-500" : "bg-gray-200"
            }  w-full sm:w-[35rem] md:w-[40rem] lg:w-[70rem] h-auto rounded-2xl`}
          >
            <div className=" p-4 md:p-8 flex justify-between items-center space-x-8 ">
              <span className="font-bold lg:text-xl">
                How many years guarantee is the giving on a purchase?
              </span>
              <span
                className="bg-green-500 text-white h-12 w-12 rounded-full text-2xl font-bold flex justify-center items-center cursor-pointer"
                onClick={() => setOpen2(!open2)}
              >
                {open2 ? (
                  <div className="cursor-pointer h-12 w-12 rounded-full bg-gray-200 flex justify-center items-center">
                    <IoIosArrowUp />
                  </div>
                ) : (
                  <IoIosArrowDown />
                )}
              </span>
            </div>
            {open2 && (
              <p className="text-lg w-full lg:w-[70rem] p-4 mt-8 text-gray-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis perferendis ad ipsa ipsum, architecto molestias error
                ut temporibus eos optio illo possimus cupiditate, necessitatibus
                sit eum tenetur voluptates nostrum! Magni facilis aspernatur a
                est autem rem magnam dicta! Necessitatibus neque doloribus earum
                ducimus recusandae tempore consequuntur ut perspiciatis ratione
                velit.
              </p>
            )}
          </div>
          <div
            className={`${
              open3 ? "bg-green-500" : "bg-gray-200"
            }  w-full sm:w-[35rem] md:w-[40rem] lg:w-[70rem] h-auto rounded-2xl`}
          >
            <div className=" p-4 md:p-8 flex justify-between items-center space-x-8">
              <span className="font-bold lg:text-xl">
                can i drive myself on hiring on a daily basis withou cost?
              </span>
              <span
                className="bg-green-500 text-white h-12 w-12 rounded-full text-2xl font-bold flex justify-center items-center cursor-pointer"
                onClick={() => setOpen3(!open3)}
              >
                {open3 ? (
                  <div className="bg-gray-200 h-12 w-12 rounded-full cursor-pointer flex justify-center items-center">
                    <IoIosArrowUp />
                  </div>
                ) : (
                  <IoIosArrowDown />
                )}
              </span>
            </div>
            {open3 && (
              <p className="text-lg w-full  lg:w-[70rem] p-4 mt-8 text-gray-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis perferendis ad ipsa ipsum, architecto molestias error
                ut temporibus eos optio illo possimus cupiditate, necessitatibus
                sit eum tenetur voluptates nostrum! Magni facilis aspernatur a
                est autem rem magnam dicta! Necessitatibus neque doloribus earum
                ducimus recusandae tempore consequuntur ut perspiciatis ratione
                velit.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
