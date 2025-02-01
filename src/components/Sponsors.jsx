import CountUp from "react-countup";

const Sponsors = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div>
        <h1 className="text-blue-500 text-2xl md:text-3xl font-bold text-center">
          Trusted By The Best
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 text-center mt-6">
          {/* Years Of Experience */}
          <div>
            <h1 className="font-bold text-blue-600 text-5xl md:text-8xl">
              <CountUp start={0} end={20} duration={0.5} prefix=">" />
            </h1>
            <h2 className="text-base md:text-lg text-gray-500 mt-2 font-semibold">
              Years Of Experience
            </h2>
          </div>

          {/* Financial Institutions */}
          <div>
            <h1 className="font-bold text-blue-600 text-5xl md:text-8xl">
              <CountUp start={0} end={40} duration={0.5} suffix="+" />
            </h1>
            <h2 className="text-base md:text-lg text-gray-500 mt-2 font-semibold">
              Financial Institutions
            </h2>
          </div>

          {/* Customers */}
          <div>
            <h1 className="font-bold text-blue-600 text-5xl md:text-8xl">
              <CountUp start={0} end={200} duration={0.5} suffix="m" prefix=">" />
            </h1>
            <h2 className="text-base md:text-lg text-gray-500 mt-2 font-semibold">
              Customers Each
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
