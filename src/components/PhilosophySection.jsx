import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image1 from "../assets/extra/first.svg";
import image2 from "../assets/extra/second.avif";
import image3 from "../assets/extra/third.svg";
import SectionTitle from "./reuseable/SectionTitle";

const PhilosophySection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // Animates every time on scroll
    AOS.refresh(); // Ensures it re-triggers on scroll
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div data-aos="fade-up">
        <SectionTitle
          title="OUR PHILOSOPHY"
          description="Human-centred innovation"
        />
      </div>

      {/* Content Part */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div
          className="space-y-3 bg-gradient-to-r from-cyan-50 to-blue-50 rounded p-8"
          data-aos="fade-right"
        >
          <img src={image1} alt="" />
          <h1 className="text-2xl font-semibold">Full-suite solutions</h1>
          <p>
            Experience the ease of integration across various banking and
            payment functions with our comprehensive suite of solutions.
          </p>
        </div>
        <div
          className="space-y-3 bg-gradient-to-r from-cyan-50 to-blue-50 rounded p-8"
          data-aos="fade-up"
        >
          <img src={image2} alt="" />
          <h1 className="text-2xl">Simplify the complex</h1>
          <p>
            Simplify complex processes and optimise your financial operations by
            leveraging the power of AI, Blockchain, Cloud Computing, and Big
            Data.
          </p>
        </div>
        <div
          className="space-y-3 bg-gradient-to-r from-cyan-50 to-blue-50 rounded p-8"
          data-aos="fade-left"
        >
          <img src={image3} alt="" />
          <h1 className="text-2xl">Cutting-edge tech</h1>
          <p>
            We seamlessly combine cutting-edge technologies, resulting in an
            unparalleled fintech experience for financial institutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhilosophySection;
