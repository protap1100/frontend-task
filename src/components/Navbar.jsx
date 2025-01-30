import { useState } from "react";
import { MdLanguage, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const solutions = [
    { name: "Open Platform", href: "#" },
    { name: "Distributed Banking", href: "#" },
  ];

  const languages = [
    { code: "EN", name: "English" },
    { code: "ES", name: "Español" },
  ];

  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-5xl font-bold">ANYTECH</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Navigation Links */}
            <div className="flex space-x-4 gap-4">
              <div
                className="relative"
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
              >
                <button className="flex items-center space-x-1 hover:text-blue-200  text-lg p-2">
                  <span>Solutions</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isSolutionsOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {/* Solutions Dropdown Menu */}
                <div
                  className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg transform transition-all duration-300 ease-in-out ${
                    isSolutionsOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  <div className="py-1">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 "
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <Link
                href="#"
                className="text-lg p-2 hover:text-blue-200 transition-all duration-100 ease-linear border-b border-transparent hover:border-blue-200"
              >
                Services
              </Link>
              <Link
                href="#"
                className="text-lg p-2 hover:text-blue-200 transition-all duration-100 ease-linear border-b border-transparent hover:border-blue-200"
              >
                About Us
              </Link>
            </div>

            {/* Language Selector */}
            <div
              className="relative p-2"
              onMouseEnter={() => setIsLanguageOpen(true)}
              onMouseLeave={() => setIsLanguageOpen(false)}
            >
              <button className="flex items-center space-x-2 border border-white/70 font-bold rounded-full p-2 hover:bg-blue-500">
                <MdLanguage />
                <span>EN</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isLanguageOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {/* Language Dropdown Menu */}
              <div
                className={`absolute left-0 mt-2 w-36 bg-white rounded-md shadow-lg transform transition-all duration-300 ease-in-out ${
                  isLanguageOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="py-1">
                  {languages.map((lang) => (
                    <a
                      key={lang.code}
                      href="#"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <span className="w-8">{lang.code}</span>
                      <span>{lang.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Button */}
          <div>
            <button className="bg-transparent border border-white hover:bg-white hover:text-blue-500 text-white px-4 py-2 rounded text-xl font-semibold flex items-center gap-2 transition duration-150 ease-linear hover:scale-102">
              Contact Us
              <MdOutlineKeyboardArrowRight className="transition-transform duration-150 hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-200 hover:bg-blue-700"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Solutions Dropdown for Mobile */}
            <div className="space-y-1">
              <button
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                className="w-full text-left px-3 py-2 text-white hover:bg-blue-700 rounded-md"
              >
                Solutions
              </button>
              <div
                className={`pl-4 space-y-1 ${
                  isSolutionsOpen ? "block" : "hidden"
                }`}
              >
                {solutions.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-white hover:bg-blue-700 rounded-md text-sm"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <a
              href="#"
              className="block px-3 py-2 text-white hover:bg-blue-700 rounded-md"
            >
              Services
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-white hover:bg-blue-700 rounded-md"
            >
              About Us
            </a>

            {/* Language Dropdown for Mobile */}
            <div className="px-3 py-2">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="w-full text-left flex items-center justify-between text-white hover:bg-blue-700 rounded-md px-3 py-2"
              >
                <span>Language</span>
                <span>EN</span>
              </button>
              <div
                className={`mt-1 space-y-1 ${
                  isLanguageOpen ? "block" : "hidden"
                }`}
              >
                {languages.map((lang) => (
                  <a
                    key={lang.code}
                    href="#"
                    className="block px-3 py-2 text-white hover:bg-blue-700 rounded-md text-sm"
                  >
                    {lang.name}
                  </a>
                ))}
              </div>
            </div>

            <button className="w-full text-center px-3 py-2 bg-blue-500 hover:bg-blue-400 text-white rounded-lg">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
