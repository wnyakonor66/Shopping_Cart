import "../assets/styles/heroSection.css";
import banner from "../assets/img/banner4.png";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="innerHero">
        <div className="bannerContainer">
          <img src={banner} alt="banner" />
        </div>

        <div className="otherHero">
          <div className="headContainer">
            <h2>Welcome to Mainee </h2>
          </div>

          <div className="paragraphContainer">
            <p>
              Your Preferred online shopping platform. Mainee offers a seamless,
              fun and reliable shopping experience to millions of users
              worldwide.
            </p>
          </div>
        </div>
        <div className="footerContainer">
          <p>&copy; 2025 Mainee. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
