import { useSelector } from "react-redux";
import { useCart } from "../redux/sliceCart";

export function Cart() {
  const productCart = useSelector(useCart);

  return (
    <div className="w-full max-w-7xl m-auto mt-20">
      <div className="flex w-full">
        <div className="flex flex-col w-full">
          <h1 className="font-bold text-2xl">Shopping Cart</h1>
          {productCart.map((product) => (
            <div key={product.id}>
              <img src={product.pictures[0].url} alt={product.title} />
              <h2>{product.title}</h2>
              <p>{product.price}</p>
              <p>{product.count}</p>
              
            </div>
          ))}
          oi
        </div>
        <div className="p-4 w-50 border w-full">
          <h2>Order Summary</h2>
          <form>{/* todo resto */}</form>
        </div>
      </div>
    </div>
  );
}
