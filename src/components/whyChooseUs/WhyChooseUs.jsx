import { FaCar } from "react-icons/fa6";

const WhyChooseUs = () => {
  return (
    <section className="hidden  bg-gray-100 w-full min-h-screen lg:px-8 md:px-2  md:pt-[15rem] md:pb-[15rem]  md:p-2 md:grid grid-cols-3 place-items-center">
      <div className="flex flex-col space-y-[12rem] md:space-y-[8rem] pt-[8rem]">
        <div className="flex flex-col space-y-5">
          <span className="bg-green-500 h-12 w-12 rounded-full text-xl text-white flex justify-center items-center">
            <FaCar />
          </span>
          <h2 className=" lg:text-4xl md:text-2xl md:font-bold">
            Why Choose Us
          </h2>
          <p className=" lg:text-2xl md:text-sm md:w-[10rem] lg:w-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            illo aspernatur libero fugiat a commodi architecto veritatis
            sapiente.
          </p>
        </div>
        <div className="flex flex-col space-y-5 mt-[15rem]">
          <span className="bg-green-500 h-12 w-12 text-xl rounded-full text-white flex justify-center items-center">
            <FaCar />
          </span>
          <h2 className=" lg:text-4xl md:text-2xl md:font-bold">
            Why Choose Us
          </h2>
          <p className="lg:text-2xl md:text-sm md:w-[10rem] lg:w-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            illo aspernatur libero fugiat a commodi architecto veritatis
            sapiente.
          </p>
        </div>
      </div>

      <img
        src="https://images.unsplash.com/photo-1742715420408-561aeb0c7126?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="me"
        className="row-span-2 rounded-t-full rounded-b-full md:h-[70rem] object-cover md:w-[90rem]"
      />

      <div className="flex flex-col lg:space-y-[12rem] md:pt-[8rem] md:space-y-[8rem]">
        <div className="flex flex-col space-y-5 lg:ml-10 md:ml-2">
          <span className="bg-green-500 h-12 w-12 text-xl rounded-full text-white flex justify-center items-center">
            <FaCar />
          </span>
          <h2 className="lg:text-4xl md:text-2xl md:font-bold">
            Why Choose Us
          </h2>
          <p className="lg:text-2xl md:text-sm md:w-[10rem] lg:w-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            illo aspernatur libero fugiat a commodi architecto veritatis
            sapiente.
          </p>
        </div>
        <div className="flex flex-col md:space-y-5 md:mt-[15rem] lg:ml-10 md:ml-2">
          <span className="bg-green-500 h-12 w-12 text-xl rounded-full text-white flex justify-center items-center">
            <FaCar />
          </span>
          <h2 className="lg:text-4xl md:text-2xl md:font-bold">
            Why Choose Us
          </h2>
          <p className="lg:text-2xl md:text-sm md:w-[10rem] lg:w-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            illo aspernatur libero fugiat a commodi architecto veritatis
            sapiente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
