                                                                                                                                                                                                                                import { useState, useEffect } from "react";
// import Navbar from "./Navbar";
import macroChoco from "../assets/hero-section/MAC CHOCO BLANCHE.webp";
import macroCinamon from "../assets/hero-section/MAC CINNAMON.webp";
import macroGold from "../assets/hero-section/MAC GOLDEN CACAO.webp";
import macroLemon from "../assets/hero-section/MAC LEMON.webp";
import microCacao from "../assets/hero-section/MIC CACAO.webp";
import microVanilla from "../assets/hero-section/MIC VANILLA.webp";
import rightHorse from "../assets/hero-section/right-horse.svg";
import leftHorse from "../assets/hero-section/left-horse.svg";
import { FaClosedCaptioning } from "react-icons/fa";

const HeroSection = () => {
  const microImages = [microCacao, microVanilla];
  const macroImages = [macroChoco, macroCinamon, macroGold, macroLemon];

  const [currentMacroIndex, setCurrentMacroIndex] = useState(0);
  const [currentMicroIndex, setCurrentMicroIndex] = useState(0);

  const [overlayImage, setOverlayImage] = useState(null);

  // Function to handle click on an image
  // const handleSlideClick = (image) => {
  //   setOverlayImage(image);    
  // };

  // Function to close the overlay
  const closeOverlay = () => {
    setOverlayImage(null);
  };

  useEffect(() => {
    const macroInterval = setInterval(() => {
      setCurrentMacroIndex((prevIndex) => (prevIndex + 1) % macroImages.length);
    }, 3000);

    const microInterval = setInterval(() => {
      setCurrentMicroIndex((prevIndex) => (prevIndex + 1) % microImages.length);
    }, 5000);

    return () => {
      clearInterval(macroInterval);
      clearInterval(microInterval);
    };
  }, [macroImages.length, microImages.length]);

  return (
    <div className="w-full">
      <div className="flex flex-col h-[100vh] md:flex-row">
        <div
          style={{
            backgroundImage: `url(${leftHorse})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
          className="w-full md:w-[50%] bg-[#ccccca] bg-cover bg-center bg-no-repeat relative"
        >
          <div className="flex flex-col md:pt-[200px] items-center p-8 md:p-16">
            <h2 className="uppercase text-white text-3xl md:text-5xl z-10 bg-[#f4cec9] py-2 px-4">
              Ma<span className="text-black">cro</span>
            </h2>
            <img
              src={macroImages[currentMacroIndex]}
              className="w-full md:max-w-lg mt-8"
              alt="left product image"
              onClick={() => setOverlayImage(macroImages[currentMacroIndex])}
            />
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${rightHorse})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPositionY: "bottom",
          }}
          className="w-full md:w-[50%] bg-[#323232] bg-cover bg-center relative"
        >
          <div className="flex flex-col justify-center  items-center p-8 md:p-16">
            <img
              src={microImages[currentMicroIndex]}
              className="w-full md:max-w-lg mt-8"
              alt="right product image"
              onClick={() => setOverlayImage(microImages[currentMacroIndex])}
            />
            <h2 className="uppercase text-white text-3xl z-10 md:text-5xl bg-red-100 py-2 px-4 mt-8">
              Mi<span className="text-gray-300">cro</span>
            </h2>
          </div>
        </div>
      </div>
      {overlayImage && (
        <div className="fixed top-10 z-30 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
          <img
            src={overlayImage}
            alt="overlay"
            className="max-h-full max-w-full"
            onClick={closeOverlay}
          />
          <button
            onClick={closeOverlay}
            className="absolute top-4 right-4 text-white bg-red-500 px-2 py-1 rounded"
          >
            <FaClosedCaptioning />
          </button>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
