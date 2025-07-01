import Button from "../button/Button";
import jeep from "../../assets/jeep-remove.png";

const Car = () => {
  return (
    <section className="bg-black w-full h-auto pt-8 lg:mt-0 p-2 lg:p-15">
      <div className="bg-green-500 text-white space-y-6 w-full h-full lg:h-[40rem] py-2 px-4 rounded-3xl flex flex-col lg:flex-row md:justify-between items-center">
        <div className="flex flex-col space-y-10 px-8 order-2 lg:order-1">
          <h1 className="text-2xl lg:text-5xl font-bold">
            Drive your dream car today!
          </h1>
          <p className="text-3xl text-gray-100">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            magnam quo quis quos aliquam minus cumque odit, facere quia est unde
            pariatur ad cupiditate distinctio eum beatae! cumgtwe yudcuy importo
            pinty
          </p>
          <span className="flex space-x-4">
            <Button label="Browse Cars" className="bg-violet-200 text-3xl" />
            <Button label="Contact Us" className="border-2 border-white" />
          </span>
        </div>
        <img
          src={jeep}
          alt=""
          className="lg:w-[60rem] lg:h-[60rem] w-[25rem] h-[25rem] sm:w-[30rem] sm:h-[30rem] md:w-[45rem] md:h-[45rem] object-cover order-1 lg:order-2"
        />
      </div>
    </section>
  );
};

export default Car;
