import Button from "../button/Button";
import camry from "../../assets/camry.jpg";
import jeep from "../../assets/jeep-remove.png";
import play from "../../assets/play.png";
import { useState } from "react";

const Hero = () => {
  const [small, setSmall] = useState(false);
  return (
    <>
      <header className="flex justify-center items-center w-full mt-[-3rem]  min-h-screen relative sm:mt-1 md:mt-[-8rem] lg:mt-[-4]">
        <div className="flex flex-col space-y-10">
          <h1 className="text-3xl text-white font-bold text-center md:text-4xl lg:text-6xl font-sans">
            <span className="text-yellow-400">Buy</span> or{" "}
            <span className="text-yellow-400">Rent</span> Your Dream Car
          </h1>
          <p className="text-white p-4 text-md text-center md:text-lg lg:text-xl lg:w-1/2 lg:ml-[32rem]">
            explore this exclusive good cars and get a discount on a huge
            purchase. enjoy the luxury of licenced and qualified drivers when
            you hire our cars. we give a huge discount on all purchase, hire and
            ride
          </p>
          <div className="flex space-x-4 justify-center items-center md:p-8">
            <Button
              label={
                <>
                  <span className="block md:hidden">Explore Cars for sale</span>
                  <span className="hidden md:block">
                    Explore Browse Cars for sale
                  </span>
                </>
              }
              className="w-auto "
            />
            <Button
              label={
                <>
                  <span className="block md:hidden">
                    Explore favourite cars
                  </span>
                  <span className="hidden md:block">
                    Explore your favourite Cars
                  </span>
                </>
              }
              className="bg-green-800 border-2  border-green-400 w-auto text-sm"
            />
          </div>
        </div>
      </header>

      <div className="flex lg:flex-row space-x-6">
        <img
          src={camry}
          alt="car"
          className="hidden lg:flex order-2 md:order-1 size-[15rem] object-cover rounded-xl  absolute bottom-30 left-40"
        />
        <img
          src={jeep}
          alt="car"
          className="order-1 md:order-2  h-[25rem] w-[25rem] md:size-[50rem] object-cover absolute  bottom-[-9rem] md:bottom-[-20rem] sm:w-[30rem] sm:h-[30rem] lg:bottom-[-20rem] p-4 lg:ml-[45rem] lg:w-[55rem] lg:pt-15"
        />
        <img
          src={play}
          className="hidden w-[10rem] lg:flex absolute bottom-[9rem] left-50"
        />
      </div>
    </>
  );
};

export default Hero;
