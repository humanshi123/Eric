import React from "react";
import Navbar from "../components/Navbar";
import Descargas from "../components/Descargas";
import Perguntas from "../components/Perguntas";
import Pasos from "../components/Pasos";
import Ilustraciones from "../components/Ilustraciones";
import Expricance from "../components/Expricance";

const Gallery = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <Navbar />
      <Descargas />
      <Perguntas />
      <Pasos />
      <Ilustraciones />
      <Expricance />
    </div>
  );
};

export default Gallery;
