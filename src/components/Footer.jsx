const Footer = () => {
  return (
    <div>
      {/* Top Footer Section */}
      <div className="bg-[#002045]">
        <div className="max-w-7xl mx-auto py-10 px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-white font-bold text-3xl md:text-5xl">ANYTECH</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-10 font-semibold text-[#00E8E9] mt-4 md:mt-0">
            <p className="font-bold">Our Solutions</p>
            <div className="hidden md:block text-[#00E8E9] w-px h-6 mx-2 bg-[#00E8E9]"></div>
            <p>AnyCaaS</p>
            <p>AnyBaas</p>
            <p>AnyPass</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border border-white"></div>

      {/* Bottom Footer Section */}
      <div className="bg-[#00152D]">
        <div className="max-w-7xl mx-auto py-5 px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-[#1F80F0] font-bold text-sm md:text-base">
            ©2023 All rights reserved. Any Technology Pte Ltd.
          </p>
          <p className="text-[#1F80F0] font-bold text-sm md:text-base mt-2 md:mt-0">
            Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
