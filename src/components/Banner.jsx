import { motion } from "framer-motion";
import { FaChartLine, FaBuilding } from "react-icons/fa";
import image from "../assets/men.avif";

const Banner = () => {
  return (
    <div className="relative max-w-7xl mx-auto mt-10 px-5 flex flex-col lg:flex-row gap-10 items-center">
      {/* Left Side - Text (Static) */}
      <div className="flex-1 flex flex-col justify-center gap-5 text-center lg:text-left">
        <h1 className="text-lg md:text-xl text-blue-600 tracking-wide uppercase">
          Powering the Future of Finance
        </h1>
        <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl leading-tight">
          Uncovering new ways <br className="hidden md:block" /> to delight customers
        </h1>
        <p className="text-blue-950 text-sm md:text-base">
          AnyTech is revolutionizing financial technology by introducing
          innovative and real-time transaction account processing capabilities,
          specifically designed for retail financial services.
        </p>
        <p className="text-blue-500 text-sm md:text-base">
          Our modern approach surpasses traditional banking and card processing
          systems, empowering you with the most advanced technology for lasting
          success.
        </p>
      </div>

      <div className="relative flex-1 flex justify-center">
        {/* Main Image */}
        <img
          className="w-[280px] -z-10 h-[320px] md:w-[350px] md:h-[400px] lg:w-[450px] lg:h-[500px] object-cover rounded-lg shadow-xl"
          src={image}
          alt="Finance Tech"
        />

        <motion.div
          whileHover={{ y: -10, scale: 1.2 }} 
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute -top-5 left-10 bg-white p-3 rounded-full shadow-lg cursor-pointer"
        >
          <FaBuilding className="text-blue-500 text-2xl" />
        </motion.div>

        <motion.div
          whileHover={{ y: -10, scale: 1.2 }} 
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute bottom-5 left-20 bg-white p-3 rounded-full shadow-lg cursor-pointer"
        >
          <FaChartLine className="text-blue-500 text-2xl" />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
