import Banner from "../components/Banner";
import FutureSection from "../components/FutureSection";
import MovingBanner from "../components/MovingBanner";
import PhilosophySection from "../components/PhilosophySection";
import Sponsors from "../components/Sponsors";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PhilosophySection></PhilosophySection>
      <FutureSection></FutureSection>
      <Sponsors></Sponsors>
      <MovingBanner></MovingBanner>
    </div>
  );
};

export default Home;
