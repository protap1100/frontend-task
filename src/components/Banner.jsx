import image from "../assets/men.avif";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10 px-5 flex flex-col lg:flex-row gap-10 items-center">
      <div className="flex-1 flex flex-col justify-center gap-5 text-center lg:text-left">
        <h1 className="text-lg md:text-xl text-blue-600">
          POWERING THE FUTURE OF FINANCE
        </h1>
        <h1 className="font-bold text-3xl md:text-5xl lg:text-7xl">
          Uncovering new ways to delight customers
        </h1>
        <p className="text-blue-950 text-sm md:text-base">
          AnyTech is revolutionising financial technology by introducing
          innovative and real-time transaction account processing capabilities,
          specifically designed for retail financial services.
        </p>
        <p className="text-blue-300 text-sm md:text-base">
          Our modern approach surpasses traditional banking and card processing
          systems, empowering you with the most advanced technology for lasting
          success.
        </p>
      </div>

      <div className="flex-1 flex justify-center">
        <img
          className="w-[250px] h-[300px] md:w-[300px] md:h-[350px] lg:w-[400px] lg:h-[450px] object-cover rounded-lg"
          src={image}
          alt="Finance Tech"
        />
      </div>
    </div>
  );
};

export default Banner;
