import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";

import logo from "../assets/navbar/logo.svg";
import { useSiteStore } from "../context/siteStore";
import CartIcon from "./CartIcon";

export default function Navbar({ toggleCart }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cart = useSiteStore((store) => store.cart);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    let total = 0;
    cart.map((item) => {
      total += item.quantity;
    });
    setTotalQuantity(total);
  }, [cart]);

  return (
    <div className="w-full sticky z-[9] top-0 h-[100px] flex justify-between md:justify-center  md:mx-auto ">
      <div className="md:w-[55%] bg-[#ccccca] w-full h-[auto] flex justify-start items-center ps-12">
        <Link to={"/"}>
          <img src={logo} className="w-[120px] h-[100px] md:hidden  " />
          <img src={logo} className="w-[200px]  h-auto hidden md:block  " />
        </Link>
        <p className="pl-[15px] font-[Claston] text-[#323233] text-[16px]">
          PRÓXIMA GENERACIÓN DE PSILOCIBINA
        </p>
      </div>
      <div className="hidden md:flex bg-[#333] justify-between items-center gap-[15px] w-[45%] h-auto px-10 text-[#CECECC]">
        <Link className="text-[#CECECC] font-[Claston] text-[14px] ">
          Acerca de
        </Link>
        <Link className="text-[#CECECC] font-[Claston] text-[14px]">
          Ventajas
        </Link>
        <Link className="text-[#CECECC] font-[Claston] text-[14px]">
          Productos
        </Link>
        <Link
          className="text-[#CECECC] font-[Claston] text-[14px]"
          to="/distributors"
        >
          Distribuidores
        </Link>
        <Link
          to={"/gallery"}
          className="text-[#CECECC] font-[Claston] text-[14px]"
        > Dudas y Descargas
        </Link>
        <Link onClick={toggleCart} className="text-white flex items-center">
          {/* <FaShoppingCart /> */}
          <CartIcon />
          {totalQuantity > 0 && (
            <div className="bg-red-500 px-2 rounded-full">{totalQuantity}</div>
          )}
        </Link>
      </div>
      <div className="md:hidden bg-[#ccccca]  p-3 flex justify-center items-center">
        {isMenuOpen && (
          <div className="md:hidden absolute z-30 top-[60px]  left-0 right-0 bg-[#333] py-4 px-4 mx-1 my-4">
            <div className="flex flex-col space-y-2 ">
              <Link
                to={"gallery"}
                className="text-[#CECECC] font-[Claston] text-[14px]"
              >
                Gallery
              </Link>
              <Link className="text-[#CECECC] font-[Claston] text-[14px]">
                Acerca de
              </Link>
              <Link className="text-[#CECECC] font-[Claston] text-[14px]">
                Ventajas
              </Link>
              <Link className="text-[#CECECC] font-[Claston] text-[14px]">
                Productos
              </Link>
              <Link
                className="text-[#CECECC] font-[Claston] text-[14px]"
                to="/distributors"
              >
                Distribuidores
              </Link>
              <Link
                to={"/gallery"}
                className="text-[#CECECC] font-[Claston] text-[14px]"
              >
                Dudas y Descargas
              </Link>
            </div>
          </div>
        )}
        <div className="mr-2">
          <Link className="text-white flex">
            <CartIcon onClick={toggleCart} />
            {totalQuantity > 0 && (
              <div className="bg-red-500 px-1 rounded-full">
                {totalQuantity}
              </div>
            )}
          </Link>
        </div>
        {isMenuOpen ? (
          <FaTimes className="text-xl" onClick={toggleMenu} />
        ) : (
          <FaBars className="text-xl" onClick={toggleMenu} />
        )}
      </div>
    </div>
  );
}
