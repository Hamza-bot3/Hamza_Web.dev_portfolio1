import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaCode, FaEnvelope } from "react-icons/fa";
import HamzaImage from "./img/Hamza.jpeg";

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const menuItems = ["Home", "About", "Projects", "Contact"];

  return (
    <div
      id="home"
      className="min-h-screen bg-gradient-to-br from-purple-700 via-blue-600 to-cyan-500"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 box-border">
        <nav className="fixed top-0 left-10 right-20 z-50 bg-transparent backdrop-blur-sm flex justify-between items-center p-4 sm:p-9">
          <a href="/" className="text-white text-2xl font-bold">
            DevPortfolio
          </a>
          <div className="sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FaTimes className="w-6 h-6 transition-transform duration-300 ease-in-out transform rotate-180" />
              ) : (
                <FaBars className="w-6 h-6 transition-transform duration-300 ease-in-out" />
              )}
            </button>
          </div>
          <div className="hidden sm:block sm:absolute sm:right-0 lg:-right-4">
            <ul className="flex space-x-6">
              {menuItems.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-white hover:text-cyan-200 relative group"
                  >
                    {item}
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-cyan-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="fixed inset-y-0 right-0 z-40 w-64 bg-purple-700 bg-opacity-95 backdrop-blur-md flex items-center justify-center sm:hidden">
            <ul className="space-y-8 text-center">
              {menuItems.map((item) => (
                <li
                  key={item}
                  className="border-b border-white border-opacity-20 pb-2"
                >
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-white text-xl hover:text-cyan-200 block py-2 px-4 rounded-md hover:bg-white hover:bg-opacity-10 transition duration-300 ease-in-out"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-80px)] mt-20 lg:mt-0">
          <div className="text-center lg:text-left lg:w-1/2 mb-4 lg:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
              Hi, I'm <span className="text-cyan-300">Hamza Parvez</span>
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 mb-4 animate-fade-in-up animation-delay-200">
              Full-stack Developer & UI/UX Enthusiast
            </p>
            <p className="text-white text-lg mb-6 animate-fade-in-up animation-delay-400 max-w-2xl">
              I craft beautiful, responsive, and user-friendly web applications.
              With a passion for clean code and innovative design, I bring ideas
              to life in the digital realm.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up animation-delay-600">
              <button
                onClick={() => scrollToSection("projects")}
                className="bg-white text-purple-700 hover:bg-cyan-100 px-6 py-3 rounded-full font-semibold flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105"
              >
                <FaCode className="mr-2" />
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-700 px-6 py-3 rounded-full font-semibold flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105"
              >
                <FaEnvelope className="mr-2" />
                Contact Me
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end animate-fade-in-up animation-delay-800 mt-8 lg:mt-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                src={HamzaImage}
                alt="Hamza Parvez"
                className="w-full h-full object-cover rounded-full shadow-lg shadow-gray-500/50"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
