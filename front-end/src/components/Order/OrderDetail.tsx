import { useMutation, useReactiveVar } from "@apollo/client";
import { useEffect, useState } from "react";
import { cartItemsVar } from "../../lib/apolloClient";
import Item from "../Order/Item";
import { CartCheckout } from "../../graphql-client/queries";


export default function OrderDetail() {
  const cartItems = useReactiveVar(cartItemsVar);
  const calculateTotal = (items:any) =>
    items.reduce((ack: number, item: any) => ack + item.amount * item.price, 0);

    const [checkout, { data, loading, error }] = useMutation(CartCheckout);

    
    const checkoutCart = () => {
      console.log("cartItems", cartItems);
      checkout({variables : { type: cartItems }})
    }

  return (
    <div className="flex shadow-md my-10">
      <div className="w-3/4 bg-white px-10 py-10">
        <div className="flex justify-between border-b pb-8">
          <h1 className="font-semibold text-2xl">Trang đặt hàng</h1>
          <h2 className="font-semibold text-2xl"> {cartItems.length} Sản phẩm</h2>
        </div>

        <div className="flex mt-10 mb-5">
          <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
            {" "}
            Sản phẩm{" "}
          </h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
            Số lượng
          </h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
            Giá tiền
          </h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
            Tổng tiền
          </h3>
        </div>

        <div>
          {cartItems.map((product: any) => (
            <div key={product.id}>
              <Item 
              item={product}
              listItem={cartItems}
              />
            </div>
          ))}
        </div>

        <a
          href="/Home"
          className="flex font-semibold text-indigo-600 text-sm mt-10"
        >
          <svg
            className="fill-current mr-2 text-indigo-600 w-4"
            viewBox="0 0 448 512"
          >
            <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
          </svg>
          Tiếp tục mua hàng
        </a>
      </div>

      <div id="summary" className="w-1/4 px-8 py-10">
        <h1 className="font-semibold text-2xl border-b pb-8">
          Chi tiết đơn hàng
        </h1>
        <div className="border-t">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Tổng tiền</span>
            <span>${calculateTotal(cartItems)}</span>
          </div>
          <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full" onClick={() => checkoutCart()}>
            Đặt hàng
          </button>
        </div>
      </div>
    </div>
  );
}
