import { useSelector } from "react-redux";
import { useCart } from "../redux/sliceCart";
import { CartProducts } from "../components/cart-products";

export function Cart() {
  const productCart = useSelector(useCart);

  return (
    <div className="w-full max-w-7xl m-auto mt-20">
      <div className="flex w-full">
        <div className="flex flex-col w-full">
          <h1 className="font-bold text-2xl">Shopping Cart</h1>
          {productCart.map((product) => (
            <div key={product.id}>
              <CartProducts
                id={product.id}
                pictures={product.pictures}
                price={product.price}
                title={product.title}
                count={product.count}
              />
            </div>
          ))}
        </div>
        <div className="p-4 w-50 border w-full">
          <h2>Order Summary</h2>
          <form>{/* todo resto */}</form>
        </div>
      </div>
    </div>
  );
}
