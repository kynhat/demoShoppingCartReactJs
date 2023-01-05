// Types
import { ProductItemType } from "../Interface/IproductItem";

type Props = {
  item: ProductItemType;
  addToCart: (clickedItem: ProductItemType) => void;
  removeFromCart: (id: number) => void;
};

export default function ProductItem({ item, addToCart, removeFromCart }: any) {
  return (
    <div className="border border-indigo-600 rounded-lg px-5">
      <button className="image flex justify-center m-auto">
        <img style={{ height: 200 }} src={item.image} alt={item.title} />
      </button>

      <div className="decription">
        <button  className="text-slate-500 hover:text-blue-600 font-sans hover:font-serif">{item.price} $</button>
        <p  className="text-slate-500 hover:text-blue-600">{item.title}</p>
      </div>

      <div className="flex justify-center m-6">
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-4" onClick={() => addToCart(item)}>
          Thêm
        </button>

        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => removeFromCart(item.id)}>
          Xóa
        </button>
      </div>
    </div>
  );
}

