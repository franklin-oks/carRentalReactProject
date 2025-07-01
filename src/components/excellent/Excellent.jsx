import Button from "../button/Button";

const Excellent = () => {
  return (
    <section className="flex flex-col justify-center items-center space-y-4 h-auto py-15 mt-[-5rem] md:py-20 lg:h-screen bg-gray-100 p-2 md:p-4 lg:p-6">
      <h1 className="text-2xl font-bold md:text-3xl lg:text-6xl font-sans">
        Driving excellent and Innovation in car
      </h1>
      <h2 className="text-2xl font-bold md:text-3xl lg:text-6xl font-sans">
        <span className="text-yellow-500">Buying </span> &{" "}
        <span className="text-yellow-500">rental </span>services
      </h2>
      <p className="text-md md:text-xl lg:text-xl lg:w-[70rem]">
        At Driven Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
        asperiores est cumque quisquam libero quia deserunt dolorem! Doloribus,
        beatae dolorem. Ducimus ea rem deleniti nesciunt vero ex reiciendis
        itaque. Repudiandae.
      </p>
      <div className="bg-gray-200 w-[23rem] md:w-[35rem] p-2 flex space-x-4 md:space-x-6 justify-between items-center rounded-r-full rounded-l-full mt-15">
        <Button
          label="Our Value"
          className="text-xl  md:text-2xl md:w-[16rem] md:py-5 rounded-full"
        />
        <Button
          label="Lincense"
          className="bg-violet-300 text-xl md:text-2xl md:w-[16rem] md:py-5 rounded-full"
        />
        <Button
          label="Our Cars"
          className="bg-violet-300 text-xl md:text-2xl md:w-[16rem] md:py-5 rounded-full"
        />
      </div>
    </section>
  );
};

export default Excellent;
