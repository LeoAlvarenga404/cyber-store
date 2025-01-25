import { useSelector } from "react-redux";
import { useCart } from "../redux/sliceCart";
import { CartProducts } from "../components/cart-products";
import { OrderSummaryCart } from "../components/order-summary-cart";
import cartEmpty from '../assets/cart-empty.svg'

export function Cart() {
  const productCart = useSelector(useCart);

  return (
    <div className="w-full max-w-7xl m-auto mt-20 px-4">
      <div className="flex flex-col justify-between lg:flex-row w-full  gap-8">
        <div className="flex flex-col w-full lg:w-[45rem] gap-4">
          <h1 className="font-bold text-2xl mb-4">Shopping Cart</h1>
          {productCart.length > 0 ? (
            <div className="flex flex-col gap-4 overflow-auto h-[40rem] lg:h-[40rem] scrollbar-none">
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
            <div className="flex flex-col h-full items-center justify-center">
              <p className="text-lg">Your cart is empty!</p>
              <img src={cartEmpty} alt="" className="max-w-full" />
            </div>
          )}
        </div>
        <div className="p-4 w-full lg:w-[400px] border">
          <OrderSummaryCart />
        </div>
      </div>
    </div>
  );
}
