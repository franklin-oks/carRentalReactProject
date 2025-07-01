import { useState } from "react";
import Button from "../button/Button";
import { FaCar } from "react-icons/fa6";

const Commitment = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-gray-100 h-auto w-full pt-10 md:pt-18 lg:pt-20 p-8">
      <h1 className="text-center text-2xl font-bold md:text-4xl lg:text-5xl py-12">
        Our <span className="text-yellow-400"> commitment</span> to all our
        <br />
        customers globally
      </h1>
      <div className="flex flex-col md:flex-row mt-12 lg:mt-30  space-y-12 md:space-x-6 lg:space-x-15 lg:ml-40">
        <img
          src="https://images.unsplash.com/photo-1625047509252-ab38fb5c7343?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="car"
          className="md:size-[25rem] lg:h-[36rem] md:flex-1 h-[25rem] w-[25rem] rounded-4xl object-cover"
        />
        <div
          className={`flex flex-col space-y-5 md:space-y-4 lg:space-y-12 flex-1 p-4 pt-10 md:pt-6 lg:p-10 ${
            open ? "mt-[-3rem]" : ""
          }`}
        >
          <span className="bg-green-500 h-12 w-12 rounded-full text-xl text-white flex justify-center items-center">
            <FaCar />
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl">Transparency</h2>
          <p className="text-gray-950 lg:w-[40rem] lg:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae saepe
            repellendus perferendis fugiat, nulla sit veritatis sint odio
            nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Tempora pariatur nesciunt maiores temporibus numquam eos qu
            {open ? "" : <span className="text-green-400">{".........."}</span>}
            {open ? (
              <div className="text-gray-800">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
                delectus, earum blanditiis harum sequi deleniti alias adipisci
                cupiditate at ut aperiam incidunt ratione veniam in debitis
                nemo. Beatae, mollitia itaque?
              </div>
            ) : (
              ""
            )}
          </p>
          <Button
            label={open ? "Close" : "Learn More"}
            className="w-1/2 mt-8 md:mt-0 lg:w-3/12 md:w-35 lg:text-2xl"
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>
    </section>
  );
};

export default Commitment;
