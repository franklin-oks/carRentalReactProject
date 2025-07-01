import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black w-full min-h-scren pt-15 p-8 lg:pt-30">
      <div className="flex text-gray-200 flex-col space-y-8 md:flex-row space-x-15 lg:space-x-40">
        <div className="flex flex-col space-y-4 lg:ml-8">
          <h1 className="font-mono font-bold text-3xl sm:text-5xl md:text-4xl lg:text-6xl text-red-600">
            FraCars
          </h1>
          <p className="text-xl lg:w-[40rem] lg:text-2xl">
            Designed and developed by Okeke Obinna Franklin @adipisicing elit.
            Eveniet dolorum quam voluptate autem repellat ratione corrupti
            beatae dolore aperiam distinctio!
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold my-8">INFORMATION</h2>
          <span className="text-xl">Cars for sale</span>
          <span className="text-xl">Cars for rent</span>
          <span className="text-xl">Cars for financing</span>
          <span className="text-xl">Contact Us</span>
        </div>

        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold my-8">CONTACT</h2>
          <div className="flex space-x-3 items-center">
            <span className="text-xl md:hidden lg:block text-green-400">
              <FaPhoneAlt />
            </span>
            <span className="text-xl">+234 8103919717</span>
          </div>
          <div className="flex space-x-3  items-center">
            <span className="text-xl md:hidden lg:block text-green-400">
              <FaLocationDot />
            </span>
            <span>No 6A Presidentail Rd, Enugu, Nigeria</span>
          </div>
        </div>

        <div className="flex flex-col md:hidden lg:flex space-y-4 mb-6">
          <h1 className="text-2xl font-bold my-8">SOCIAL MEDIA</h1>
          <span className="text-xl">Facebook</span>
          <span className="text-xl">twitter</span>
          <span className="text-xl">instagram</span>
        </div>
      </div>
      <hr className="text-white p-4 pt-2" />
      <div className="flex justify-between lg:text-xl lg:px-6 flex-col space-y-4 md:flex-row text-gray-100">
        <span>&copy; franklin Okeke Obinna all right reserved</span>
        <span>Terms of service</span>
        <span>Privacy Policy</span>
      </div>
    </footer>
  );
};

export default Footer;
