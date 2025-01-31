const Footer = () => {
  return (
    <div>
      <div className="bg-[#002045]">
        <div className="max-w-7xl mx-auto py-10 flex justify-between items-center">
          <p className="text-white font-bold text-5xl"> ANYTECH</p>
          <div className="flex gap-4 font-semibold text-[#00E8E9]">
            <p className="font-bold">Our Solutions</p>
            <div className="text-[#00E8E9] w-px h-6 mx-2"></div>
            <p>AnyCaaS</p>
            <p>AnyBaas</p>
            <p>AnyPass</p>
          </div>
        </div>
      </div>
      {/* Second Footer */}
      <div className="border border-white"></div>
      <div className="bg-[#00152D]">
        <div className="flex justify-between max-w-7xl mx-auto bg-[#00152D]  py-5">
          <p className="text-[#1F80F0] font-bold">
            ©2023 All rights reserved. Any Technology Pte Ltd.
          </p>
          <p className="text-[#1F80F0] font-bold">Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
