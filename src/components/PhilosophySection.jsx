import image1 from "../assets/extra/first.svg";
import image2 from "../assets/extra/second.avif";
import image3 from "../assets/extra/third.svg";

const PhilosophySection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="uppercase text-center text-blue-500 text-sm">
          Our Philosophy
        </h1>
        <h1 className="text-center text-4xl font-semibold">
          Human-centered innovation
        </h1>
      </div>
      {/* Diagram Part */}
      <div>
        <div></div>
        <div></div>
      </div>
      {/* Content Part */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="space-y-3 bg-linear-to-r from-cyan-50 to-blue-50 rounded p-8">
          <img src={image1} alt="" />
          <h1 className="text-2xl font-semibold">Full-suite solutions</h1>
          <p>
            Experience the ease of integration across various banking and
            payment functions with our comprehensive suite of solutions.
          </p>
        </div>
        <div className="space-y-3 bg-linear-to-r from-cyan-50 to-blue-50 rounded p-8">
          <img src={image2} alt="" />
          <h1 className="text-2xl">Simplify the complex</h1>
          <p>
            Simplify complex processes and optimise your financial operations by
            leveraging the power of AI, Blockchain, Cloud Computing, and Big
            Data.
          </p>
        </div>
        <div className="space-y-3 bg-linear-to-r from-cyan-50 to-blue-50 rounded p-8">
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
