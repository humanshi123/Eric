import { useSiteStore } from "../context/siteStore";
import { useToast } from "tw-noti";
import { useState } from "react";
import Toaster from "./Toaster";
const ProductCard = ({ id, img, title, detail, price, btnText }) => {
  const addToCart = useSiteStore((store) => store.addToCart);
  const [showToast, toggleToast] = useState(false);
  const { enqueueToast } = useToast();
  const add = (id) => {
    addToCart(id);
    toggleToast(true);
  };
  const cart = useSiteStore((store) => store.cart);

  console.log(cart);
  return (
    <>
      <div className="bg-[#dbdbdb] w-full sm:w-[550px] flex-col flex justify-center pt-10  ">
        <div className="flex-center flex-col h-full">
          <img
            className=" mix-blend-multiply items-center"
            src={img}
            alt="lamanita image"
            width={400}
            height={400}
          />
          <h1 className="mt-3 sm:text-4xl tracking-[2px] text-2xl">{title}</h1>
          <p className="px-6 text-center mt-[20px] text-black flex-1">{detail}</p>
          <div
            className="bg-[#000] mx-5 gap-3 w-full mt-10 py-6  flex items-center justify-between flex-col gap-x-10 cursor-pointer hover:bg-gray-800 "
            onClick={() => {
              add(id);
            }}
          >
            <p className="text-white justify-self-center">{price}</p>
            <p className="text-[#323233] px-5 bg-white">{btnText}</p>
          </div>
        </div>
      </div>

      <Toaster
        duration={3000}
        visible={showToast}
        end={() => toggleToast(false)}
        text={"AÑADIDO. ACTUALIZAR CANTIDAD DESDE EL CARRITO"}
      />
    </>
  );
};

export default ProductCard;
