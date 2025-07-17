import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { SplineAstronaut } from "../components/SplineAstronaut";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section id="home" className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
      <HeroText />
      <ParallaxBackground />
      <div
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <SplineAstronaut />
      </div>
    </section>
  );
};

export default Hero;
