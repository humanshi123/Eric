import React from "react";
import Artboard32 from "../assets/Ventajas/Artboard_32.svg";
import Artboard33 from "../assets/Ventajas/Artboard_33.svg";
import Artboard34 from "../assets/Ventajas/Artboard_34.svg";
import Artboard35 from "../assets/Ventajas/Artboard_35.svg";
import Artboard36 from "../assets/Ventajas/Artboard_36.svg";
import Artboard37 from "../assets/Ventajas/Artboard_37.svg";

const Ventajas = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center bg-[#ccccca] p-8 md:p-20 gap-8">
        <h1 className="text-4xl">
          VEn<span className="text-white">T</span>AJas
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          <VentajaItem
            imgSrc={Artboard32}
            title="COMPACTO"
            description="Caben 2 sobres Micro en el 50 bolsillo del jean. Caben 20 Macro en una bolsa de noche. Caben 200 Macro y"
          />
          <VentajaItem
            imgSrc={Artboard33}
            title="DISCRETO"
            description="Diseñado para ser confudido con un saborizante de café, viaja y envía tranquilamente."
          />
          <VentajaItem
            imgSrc={Artboard34}
            title="SABROSO"
            description="El polvo sólo sabe agradable. Mezclado con café o té, sólo se percibe el endulzante natural. ¡Adiós a sabores fuertes!"
          />
          <VentajaItem
            imgSrc={Artboard35}
            title="ESTÉRIL"
            description="Métodos de cultivo avanzados, laboratorios abastecidos y maquinaria de última generación nos han ganado la"
          />
          <VentajaItem
            imgSrc={Artboard36}
            title="DURADERO"
            description="El sobre protege de rayos UV y oxígeno, que degradan la molécula. Consume con confianza 2 años después de la"
          />
          <VentajaItem
            imgSrc={Artboard37}
            title="POTENTE"
            description="Cada sobre contiene la mezcla de 3 cepas mágicas, permitiendo el rango máximo de experiencia."
          />
        </div>
      </div>
    </div>
  );
};

const VentajaItem = ({ imgSrc, title, description }) => {
  return (
    <div className="flex gap-4 items-center">
      <img src={imgSrc} alt="" className="w-16 md:w-24" />
      <div className="flex flex-col">
        <p className="text-xl md:text-3xl font-semibold">{title}</p>
        <p className="text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
};

export default Ventajas;
