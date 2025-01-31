import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import "../assets/styles/home.css";
const Home = () => {
  return (
    <div className="heroContainer">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default Home;
