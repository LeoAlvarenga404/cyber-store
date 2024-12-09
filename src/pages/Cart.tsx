import { useSelector } from "react-redux";
import { useCart } from "../redux/sliceCart";
import { CartProducts } from "../components/cart-products";
import { OrderSummaryCart } from "../components/order-summary-cart";
import cartEmpty from '../assets/cart-empty.svg'

export function Cart() {
  const productCart = useSelector(useCart);

  return (
    <div className="w-full max-w-7xl m-auto mt-20">
      <div className="flex w-full gap-8">
        <div className="flex flex-col w-full">
          <h1 className="font-bold text-2xl mb-4">Shopping Cart</h1>
          {productCart.length > 0 ? (
            <div className="flex flex-col gap-4 overflow-auto h-[40rem] scrollbar-none">
              {productCart.map((product) => (
                <div key={product.id} className="border-b pb-8">
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
          ) : (
            <div className="flex flex-col w-full h-full items-center justify-center">
              <p className="text-lg">Your cart is empty!</p>
              <img src={cartEmpty} alt="" />
            </div>
          )}
        </div>
        <div className="p-4 w-50 border w-full">
          <OrderSummaryCart />
        </div>
      </div>
    </div>
  );
}
