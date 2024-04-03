import Dist2 from "../components/Dist2";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Map from "../components/Map";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Distribudors.css";
import { FaWhatsapp } from "react-icons/fa";
import FormData from "../components/FormData";

export default function Distrubudors() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const handleSubmit = (formData) => {
    // Handle form submission here, e.g., send data to server
    console.log("Form Data:", formData);
    closePopup(); // Close the popup after form submission
  };

  return (
    <div>
      <div className="halfbg fixed w-full">
        <Navbar />
      </div>
      <div className="intro2 flex-center">
        <Map />
      </div>
      <div>
        <div className="mb-20">
          <div className="flex justify-center p-2 mt-5 items-center">
            <h1 className="text-black text-[24px] bg-gruu  text-center">
              INGRESE Y PUBLIQUE SUS DATOS DE
            </h1>
            <button
              className="bg-[#323233] text-[#fff] p-2 mx-3"
              onClick={openPopup}
            >
              LLENE EL FORMULARIO{" "}
            </button>
            {/* {isPopupOpen && (
              <FormData onSubmit={handleSubmit} onCancel={closePopup} />
            )} */}
          </div>
        </div>
        {/* <ul className="grid sm:grid-cols-5 grid-cols-1 flex-center gap sm:gap-32 text-[20px]"> */}

        <div></div>
        <div className="flex-center flex-col gap-20">
          <ul className="font-[SunrollBold] flex flex-wrap items-center justify-center gap-4 sm:gap-16 text-[20px]  ">
            <li>MÉXICO</li>
            <li>COMBIA</li>
            <li>COSTA RICÀ</li>
            <li></li>
            <li>VENUA</li>
          </ul>
          <div className="flex-center flex-col gap-10">
            <h1 className="text-center text-[24px]">CIUDAD DE MEXICO</h1>
            <div className="flex-start flex-col gap-10">
              <div className="grid gap-16 sm:gap-32">
                <ul className="grid grid-cols-4 gap-4 sm:gap-10">
                  <li>Ciudad de</li>
                  <li>ERIC HADDAD</li>
                  <li>+52 55 2799</li>
                  <li>
                    <button className="bg-[#323233] px-4 py-2 text-white ">
                      <span className="hidden sm:block">ABRIR WHATSAPP</span>
                      <FaWhatsapp className="sm:hidden" size={30} />
                    </button>
                  </li>
                </ul>
                <ul className="grid grid-cols-4 gap-4 sm:gap-10">
                  <li>Ciudad de</li>
                  <li>PALACE VAPE SHOP</li>
                  <li>+52 55 2799</li>
                  <li>
                    <button className="bg-[#323233] px-4 py-2 text-white ">
                      <span className="hidden sm:block">ABRIR WHATSAPP</span>
                      <FaWhatsapp className="sm:hidden" size={30} />
                    </button>
                  </li>
                </ul>
                <ul className="grid grid-cols-4 gap-4 sm:gap-10">
                  <li>Ciudad de</li>
                  <li>TONY’S TATTOOS</li>

                  <li>+52 55 2799</li>
                  <li>
                    <button className="bg-[#323233] px-4 py-2 text-white ">
                      <span className="hidden sm:block">ABRIR WHATSAPP</span>
                      <FaWhatsapp className="sm:hidden" size={30} />
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <h1 className="text-center text-[24px]">QUERETARO</h1>
            <div className="flex-start flex-col ">
              <div className="grid grid-cols-4 flex-center gap-4 sm:gap-32">
                <ul className="flex-start flex-col gap-20">
                  <li>San Miguel</li>
                </ul>
                <ul className="flex-start flex-col gap-20">
                  <li>JORGE NAVARRETE</li>
                </ul>
                <ul className="flex-start flex-col gap-20">
                  <li>+52 55 2799</li>
                </ul>
                <ul className="flex-start flex-col gap-14">
                  <li>
                    <button className="bg-[#323233] px-4 py-2 text-white ">
                      <span className="hidden sm:block">ABRIR WHATSAPP</span>
                      <FaWhatsapp className="sm:hidden" size={30} />
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <h1 className="text-center text-[24px]">QUINTANA ROO</h1>
            <div className="flex-start flex-col">
              <div className="grid grid-cols-4 flex-center gap-6 sm:gap-32">
                <ul className="flex-start flex-col gap-10">
                  <li>Cancun</li>
                  <li>Playa del</li>
                  <li>Tulum</li>
                </ul>
                <ul className="flex-start flex-col gap-10">
                  <li>JORGE NAVARRETE</li>
                  <li>RAUL PACHECO</li>
                  <li>ANTONIO</li>
                </ul>
                <ul className="flex-start flex-col gap-10">
                  <li>+52 55 2799</li>
                  <li>+52 55 2799</li>
                  <li>+52 55 2799</li>
                </ul>
                <ul className="flex-start flex-col gap-4">
                  <li>
                    <button className="bg-[#323233] px-4 py-2 text-white ">
                      <span className="hidden sm:block">ABRIR WHATSAPP</span>
                      <FaWhatsapp className="sm:hidden" size={30} />
                    </button>
                  </li>
                  <li>
                    <button className="bg-[#323233] px-4 py-2 text-white ">
                      <span className="hidden sm:block">ABRIR WHATSAPP</span>
                      <FaWhatsapp className="sm:hidden" size={30} />
                    </button>
                  </li>
                  <li>
                    <button className="bg-[#323233] px-4 py-2 text-white ">
                      <span className="hidden sm:block">ABRIR WHATSAPP</span>
                      <FaWhatsapp className="sm:hidden" size={30} />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dist2 />
    </div>
  );
}
