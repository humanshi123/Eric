import women from "../assets/Ventajas/women.svg";
import rock from "../assets/Ventajas/rock.svg";

import ProductCard from "./ProductCard";

const Distrib = ({ products }) => {
  // const products = [
  //   {
  //     id: 1,
  //     img: product1,
  //     title: "CHAI VAINILA aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  //     detail: "Caja de 30 sobres con 0.33g (10g)",
  //     btnText: "AÑADIR",
  //     price: "1,250",
  //   },

  //   {
  //     id: 2,
  //     img: coca,
  //     title: "CACAO DORADO (KETO)",
  //     detail: "Caja de 30 sobres con 0.33g (10g) por sobre",
  //     btnText: "AÑADIR",
  //     price: "1,250",
  //   },

  //   {
  //     id: 3,
  //     img: zpurple,
  //     title: "ROL DE",
  //     detail:
  //       "1.25g de Psilocibe Cubensis por sobre (1 sobre Macro = 4-6 horas con visuales)",
  //     btnText: "AÑADIR",
  //     price: "200",
  //   },

  //   {
  //     id: 4,
  //     img: zblack,
  //     title: "CHOCOLATE",
  //     detail:
  //       "1.25g de Psilocibe Cubensis por sobre (2 sobres Macro = 6-8 horas del mejor viaje de tu vida. ¡Prepárate!)",
  //     btnText: "AÑADIR",
  //     price: "200",
  //   },

  //   {
  //     id: 5,
  //     img: zwine,
  //     title: "CARAMELO",
  //     detail:
  //       "1.25g de Psilocibe Cubensis por sobre (Vacía el polvo en un café o te tibio y tómalo de un trago)",
  //     btnText: "AÑADIR",
  //     price: "200",
  //   },

  //   {
  //     id: 6,
  //     img: zgold,
  //     title: "PAY DE",
  //     detail:
  //       "1.25g de Psilocibe Cubensis por sobre (Texas Yellow Cap, Z-Strain y Storm Troopers en cada formulación)",
  //     btnText: "AÑADIR",
  //     price: "200",
  //   },
  //   {
  //     id: 7,
  //     img: zyellowblack,
  //     title: "CACAO DORADO ",
  //     detail:
  //       "1.25g de Psilocibe Cubensis por sobre (Sin calorias. ¡Viaja sin afectar la dieta!)",
  //     btnText: "AÑADIR",
  //     price: "200",
  //   },
  //   {
  //     id: 8,
  //     img: zyellowblack,
  //     title: "CACAO DORADO (KETO VEGANO)",
  //     detail:
  //       "1.25g de Psilocibe Cubensis por sobre (Sin calorias. ¡Viaja sin afectar la dieta!)",
  //     btnText: "AÑADIR",
  //     price: "200",
  //   },
  // ];

  return (
    <div className="flex flex-col gap-10 py-6">
      <div className="hidden md:flex  justify-between overflow-hidden">
        <img src={rock} alt="" className="w-full md:w-1/4 lg:w-1/5 xl:w-1/6" />
        <img src={women} alt="" className="w-full md:w-1/2 lg:w-2/3" />
        <img
          src={rock}
          alt=""
          className="w-full md:w-1/4 lg:w-1/5 xl:w-1/6 rotate-180 -mr-[100px]"
        />
      </div>
      <div className="md:mt-[100px] flex justify-center flex-col items-center md:gap-10">
        <h1 className="font-[SunrollBold] text-[#CECECC] leading-[82px] text-4xl md:text-[68px] mb-[20px] md:mb-[40px]">
          MI
          <span className="text-[#000]">CR</span>
        </h1>

        <div className="flex sm:px-5 w-full flex-col md:flex-row justify-center gap-10">
          {products.slice(0, 2).map((product, index) => (
            <ProductCard
              key={index}
              id={product.id}
              img={product.img}
              title={product.title}
              detail={product.detail}
              btnText={product.btnText}
              price={product.price}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-10 justify-center">
        <h1 className="font-[SunrollBold] text-[#CECECC] text-4xl md:text-5xl md:mb-[30px]  md:mt-[80px]">
          MA
          <span className="text-[#323233]">CR</span>
        </h1>
        {products.slice(2, products.length - 1).map((product, index) => (
          <ProductCard
            key={index}
            id={product.id}
            img={product.img}
            title={product.title}
            detail={product.detail}
            btnText={product.btnText}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Distrib;
