import { useState } from "react";
import Button from "../button/Button";

const About = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="flex flex-col lg:flex-row bg-gray-100 h-auto pt-30 pb-12 md:pt-50 lg:pt-70">
      <img
        className="order-2 lg:order-1 mb-2 flex-1 object-cover h-64  lg:size-[40rem] p-4 rounded-xl"
        src="https://images.unsplash.com/photo-1674151577470-caefc178ded2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="logo"
      />

      <div className="order-1 lg:order-2 flex flex-1 flex-col space-y-4 lg:space-y-12 px-4 text-center bg-[#ededed] py-6 m-4 rounded-xl lg:h-[38rem] lg:justify-center lg:items-center">
        <h1 className="text-black text-bold text-3xl md:text-4xl lg:text-5xl text-center">
          About <span className="text-yellow-400">Us</span>
        </h1>
        <p className="text-center text-lg md:text-xl lg:text-2xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio ab
          rerum autem, recusandae explicabo commodi aliquid asperiores maxime
          perspiciatis reprehenderit. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Culpa porro quas magni odio velit rem amet a
          blanditiis similique? Officia
          {open ? "" : <span className="text-green-400">{".........."}</span>}
          {open ? (
            <div className="text-gray-800">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
              delectus, earum blanditiis harum sequi deleniti alias adipisci
              cupiditate at ut aperiam incidunt ratione veniam in debitis nemo.
              Beatae, mollitia itaque?
            </div>
          ) : (
            ""
          )}
        </p>
        <Button
          label={open ? "Close" : "Learn More"}
          className="w-40 ml-18 sm:ml-40 md:ml-80 lg:ml-5 "
          onClick={() => setOpen(!open)}
        />
      </div>

      <img
        className="order-2 lg:order-3 flex-1 h-64 object-cover lg:size-[40rem] p-4 rounded-xl "
        src="https://plus.unsplash.com/premium_photo-1677009541194-de9c3fa54b18?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="logo"
      />
    </section>
  );
};

export default About;
