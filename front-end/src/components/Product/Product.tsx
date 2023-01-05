import ProductItem from "../ProductItem/ProductItem";
import { getAllDataFromBE } from "../../graphql-client/queries";
import { useQuery, useReactiveVar } from "@apollo/client";
import { ProductItemType } from "../Interface/IproductItem";
import { cartItemsVar } from "../../lib/apolloClient";

export default function Product() {
  const { loading, error, data } = useQuery(getAllDataFromBE);
  const cartItems = useReactiveVar(cartItemsVar);

  if (loading) return <p> Loading ...</p>;
  if (error) return <p> Error loading </p>;

  
  const calculateTotal = (items: ProductItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

  //total cart items when add cart
  const getTotalItems = (items: ProductItemType[]) => {
    return items.reduce((ack: number, item) => ack + item.amount, 0);
  };

  const handleAddToCart = (clickedItem: ProductItemType) => {
    const isItemInCart = cartItems.find((item: any) => item.id === clickedItem.id);
    let listItem = [...cartItems] as any;

    if (isItemInCart) {
      listItem = listItem.map((item: any) =>
        item.id === clickedItem.id
          ? { ...item, amount: item.amount + 1 }
          : item
      );
    } else {
      listItem.push({...clickedItem, amount: 1});
    }

    cartItemsVar([...listItem] as any);
  };

  const handleRemoveFromCart = (id: number) => {
    let listItem = [...cartItems] as any;
    const isItemInCart = cartItems.find((item: any) => item.id === id);

    if(isItemInCart) {
      const index = cartItems.indexOf(isItemInCart);
      cartItems.splice(index, 1)
    }

    cartItemsVar([...cartItems] as any);
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-4 mt-8">
        {data.products.map((product: any) => (
          <div key={product.id}>
            <ProductItem
              key={product.id}
              item={product}
              addToCart={handleAddToCart}
              removeFromCart={handleRemoveFromCart}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
