import About from "./components/about/About";
import Car from "./components/car/Car";
import Commitment from "./components/commitment/Commitment";
import Excellent from "./components/excellent/Excellent";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Innovation from "./components/innovation/Innovation";
import OurStand from "./components/ourStand/OurStand";
import Quality from "./components/quality/Quality";
import Questions from "./components/questions/Questions";
import Team from "./components/team/Team";
import Updated from "./components/updated/Updated";
import WhyChooseUs from "./components/whyChooseUs/WhyChooseUs";
const App = () => {
  return (
    <div>
      <Home />
      <About />
      <Excellent />
      <OurStand />
      <Commitment />
      <Innovation />
      <Quality />
      <Team />
      <WhyChooseUs />
      <Questions />
      <Updated />
      <Car />
      <Footer />
    </div>
  );
};

export default App;
