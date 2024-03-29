
import { FaClosedCaptioning, FaDownload } from "react-icons/fa";
import MicBox from "../assets/Acercade/mic_box.png";
import LaManita from "../assets/pdfs/La Manita Preguntas Frecuentes .pdf";
// import cited from "../assets/pdfs/CITED FAQ ABOUT PSILOCYBIN.pdf";
import protocol from "../assets/pdfs/PROTOCOLO DE MICRODOSIS DE PAUL STAMETS.pdf";
import cited from "../assets/pdfs/CITED FAQ ABOUT PSILOCYBIN.pdf";
import pdf1 from "../assets/pdfs/La Manita Protocolo Stamets.pdf"

import { useRef, useState } from "react";

const Acercade = () => {

  const [showOverlay, setShowOverlay] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const video = useRef();

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const closeOverlay = () => {

    if(video.current){
      console.log(video.current)
  video.current.pause()

  video.current.currentTime = 0;

    }

    setShowOverlay(false);
  // DELETE VIDEO FROM DOM 

  };

  const files = [
    {
      name: "PREGUNTAS FRECUENTES Y RESPUESTAS CON CITAS",
      file: LaManita,
    },
    {
      name: "PROTOCOLO DE MICRODÓSIS DE PAUL STAMETS",
      file: protocol,
    },
    {
      name: "CITED FAQ ABOUT PSILOCYBIN",
      file: cited,
    },
    {
      name: "La Manita Protocolo Stamets",
      file: pdf1,
    },
  ];
  return (
    <div className="pdf-section-grid grid px-10 pt-[80px] pb-[150px]">
      <div className="left-column-1 flex justify-center flex-col">
        <div className="flex mb-[90px]">
          <h1 className="font-[SunrollBold] text-[68px] text-[#323233]">
            ACER
         <span className="text-gray-200"></span>
            {" "}
            
          </h1>
        </div>
        <p className="font-[AcuminProBook] text-[22px] text-[#000] font-semibold">
          Históricamente se ha comprobado que los hongos mágicos (Psilocibe
          Cubensis) son responsables por varios avances mentales de nuestra
          especie. Ahora, científicamente se está comprobando la efectividad de
          esta molécula en curar a pacientes con drogadicción, depresión,
          ansiedad y anti-sociabilidad, entre otras. ¡Sane el pasado y retome su
          esencia!
        </p>
        <div className="gap-5 grid mt-[30px]">
          <div className="flex flex-col gap-3 font-semibold">
            {files.map((file, index) => (
              <DownloadItem title={file.name} file={file.file} key={index} />
            ))}
          </div>
          <div className="">
            <div className=" text-center cursor-pointer"  onClick={()=> setShowOverlay(true)}>
              <p className="bg-[#323233] py-2 px-5 max-w-[500px] text-white">
                REPRODUCE EL VIDEO E INFÓRMATE
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="right-column-1">
      <img src={MicBox} alt="" className="hidden md:block w-full" />
      </div>

      {/* overlay section with video tag  */}
   {   
    showOverlay && (
      <div className="fixed top-0 z-30 left-0 w-[100%] h-[90%] flex items-center justify-center bg-black bg-opacity-75">
           <video
            ref={video}
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            controls
            autoPlay // Add autoPlay attribute
            className="w-full h-full"
            onPause={handlePause}
            onPlay={handlePlay}
            onClick={closeOverlay}
          ></video>
          <button
            onClick={closeOverlay}
            className="absolute top-4 right-4 text-white bg-red-500 px-2 py-1 rounded"
          >
            <FaClosedCaptioning /> close
          </button>
        </div>
    )
   }
    </div>
  );
};

const DownloadItem = ({ title, file }) => (
  <a
    href={file}
    className="flex text-[#000] items-center"
    download // Add download attribute to make the link downloadable
  >
    <span className="text-[#CECECC] pr-[20px]">
      <FaDownload />
    </span>
    {title}
    <span className="text-[#CECECC] pl-[20px]"> (PDF) </span>
  </a>
);

export default Acercade;
