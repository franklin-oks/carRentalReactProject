import Button from "../button/Button";
import me from "../../assets/me.jpg";
import { useState } from "react";

const Team = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-black w-full min-h-screen p-4 pt-15 lg:pt-50">
      <div className="flex flex-col justify-center items-center gap-8">
        <h1 className="text-3xl font-bold md:text-4xl lg:text-6xl text-white">
          Our dedicated <span className="text-yellow-400"> Team</span>
        </h1>
        <p className="text-white text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
          soluta consequatur dolores repellat facere assumenda iste!
        </p>
        <Button
          label={open ? "Close " : "View All"}
          className="py-2 px-8 text-xl md:px-12 lg:text-2xl"
          onClick={() => setOpen(!open)}
        />
      </div>

      <div className="flex justify-center items-center flex-col lg:flex-row mt-12 p-4 gap-4 lg:space-x-5 md:space-y-4 md:gap-2 ">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="me"
          className="flex-1 md:flex-0  object-cover w-[40rem]  h-[40rem]  rounded-3xl"
        />
        <img
          src={me}
          alt="me"
          className="flex-1 md:flex-0  object-cover w-[40rem]  h-[40rem] rounded-3xl"
        />
        <img
          src="https://images.unsplash.com/photo-1684272672218-49205e315a03?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image"
          className="flex-1 md:flex-0  object-cover w-[40rem]  h-[40rem] rounded-3xl"
        />
      </div>
      {open ? (
        <div className="flex justify-center items-center flex-col lg:flex-row mt-12 p-4 gap-4 lg:space-x-5 md:space-y-4 md:gap-2 ">
          <img
            src="https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="me"
            className="flex-1 md:flex-0  object-cover w-[40rem]  h-[40rem]  rounded-3xl"
          />
          <img
            src="https://images.unsplash.com/photo-1713946598467-fcf9332c56ea?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="me"
            className="flex-1 md:flex-0  object-cover w-[40rem]  h-[40rem] md:s-4 rounded-3xl"
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1681823111313-60e82cbd7f32?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image"
            className="flex-1 md:flex-0  object-cover w-[40rem]  h-[40rem] md:s-4 rounded-3xl"
          />
        </div>
      ) : null}
    </section>
  );
};

export default Team;
