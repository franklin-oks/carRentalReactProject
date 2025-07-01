import Hero from "../hero/Hero";
import Nav from "../nav/Nav";

const Home = () => {
  return (
    <div className="h-screen bg-[#0d1117] relative">
      <Nav />
      <Hero />
    </div>
  );
};

export default Home;
