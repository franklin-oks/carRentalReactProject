import { FaLocationArrow } from "react-icons/fa";

const OurStand = () => {
  return (
    <section className="bg-gray-100 w-full h-auto flex flex-col md:flex-row space-y-8 md:space-x-2 justify-between items-center py-12 md:py-6 px-4 md:px-8 ">
      <div className="flex flex-col space-y-8 md:flex-1">
        <h1 className="text-3xl font serif md:flex-4xl lg:text-6xl lg:pb-10">
          What we <span className="text-yellow-400 font-bold"> stand</span> for
        </h1>
        <p className="text-lg md:text-2xl lg:text-3xl lg:w-[90%]">
          Discover the highest rated in each category handpicked for thier
          comfort and satisfaction
        </p>
        <div className="flex flex-col space-y-4 lg:space-y-12">
          <div className="flex  items-center space-x-4  mt-8">
            <span className="bg-green-500 h-12 w-12 rounded-full text-xl text-green-200 flex justify-center items-center">
              <FaLocationArrow />
            </span>
            <p className="text-lg md:text-xl lg:text-3xl">
              High end comfort and sleek design
            </p>
          </div>
          <div className="flex  items-center space-x-4">
            <span className="bg-green-500 h-12 w-12 rounded-full text-xl text-green-200 flex justify-center items-center">
              <FaLocationArrow />
            </span>
            <p className="text-lg md:text-xl lg:text-3xl">
              Advance security features for secure ride
            </p>
          </div>
          <div className="flex  items-center space-x-4">
            <span className="bg-green-500 h-12 w-12 rounded-full text-xl text-green-200 flex justify-center items-center">
              <FaLocationArrow />
            </span>
            <p className="text-lg md:text-xl lg:text-3xl">
              Smooth and responsive driving experience
            </p>
          </div>
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1562911791-c7a97b729ec5?q=80&w=937&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="car"
        className="md:w-[10rem] md:flex-1 rounded-4xl"
      />
    </section>
  );
};

export default OurStand;
