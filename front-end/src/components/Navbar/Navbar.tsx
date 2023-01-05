import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProductItemType } from "../Interface/IproductItem";
import { cartItemsVar } from "../../lib/apolloClient";
import { useReactiveVar } from "@apollo/client";

export default function Navbar() {
  let navigate = useNavigate(); 
  const addCart = () => {
    let path = `/Cart`; 
    navigate(path);
  };
  const cartItems = useReactiveVar(cartItemsVar);
  console.log("cartItemsVar-rrrr", cartItems);
  
  // const totalNumberProduct = (items: ProductItemType[]) =>
  //   items.reduce((ack: number, item) => ack + item.amount, 0);


  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-slate-400 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
            Trang chủ
          </span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Danh mục sản phẩm
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Mã giảm giá
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              Giao hàng nhanh
            </a>
          </div>
          <button style={{ position: "relative" }} onClick={() => addCart()}>
            <div
              style={{
                background: "#b73636",
                alignItems: "center",
                borderRadius: "60px",
                color: " #fff",
                display: "flex",
                fontSize: "10px",
                height: "20px",
                justifyContent: "center",
                position: "absolute",
                width: "20px",
                top: "-10px",
                left: "11px",
              }}
            >
              {cartItems.length}
            </div>
            <img
              src="https://stfe.woka.io/desktop/image/icon-header/shopping-bag.png"
              alt=""
            />
          </button>
        </div>
      </nav>
    </div>
  );
}
