import { Button } from "./button";
import { useSelector } from "react-redux";
import { useCart } from "../redux/sliceCart";
import { transformCurrency } from "../utils/transformCurrency";

export function OrderSummaryCart() {
  const productCart = useSelector(useCart);
  let subTotal = 0;

  productCart.forEach((product) => {
    subTotal += product.price;
  });

  const tax = 0.025 * subTotal;
  const shipping = 29;
  const total = subTotal + tax + shipping;

  return (
    <div className="p-10">
      <h2 className="font-bold text-xl">Order Summary</h2>
      <form className="mt-4 flex flex-col gap-4">
        <div>
          <label htmlFor="code" className="text-lg text-zinc-700">
            Discount code / Promo code
          </label>
          <input
            id="code"
            type="text"
            placeholder="Code"
            className="w-full border-zinc-300 border rounded-md p-5"
          />
        </div>
        <div className="relative">
          <label htmlFor="card-number" className="text-lg text-zinc-700">
            Your bonus card number
          </label>
          <input
            id="card-number"
            type="text"
            placeholder="Enter Card Number"
            className=" w-full border-zinc-300 border rounded-md p-5"
          />
          <Button className="text-black bg-white border border-zinc-950 px-4 py-1 hover:bg-black hover:text-white absolute bottom-4 right-4">
            Apply
          </Button>
        </div>
      </form>
      <div className="flex flex-col gap-6 my-5">
        <div className="w-full flex justify-between">
          <h2 className="text-xl font-medium">Subtotal</h2>
          <span className="font-medium text-lg">
            {transformCurrency(subTotal)}
          </span>
        </div>
        <div className="w-full flex justify-between">
          <h3 className="text-zinc-500 text-xl font-normal">Estimated Tax</h3>
          <span className="font-medium text-lg">{transformCurrency(tax)}</span>
        </div>
        <div className="w-full flex justify-between">
          <h3 className="text-zinc-500 text-xl font-normal">
            Estimated shipping & Handling
          </h3>
          <span className="font-medium text-lg">
            {transformCurrency(shipping)}
          </span>
        </div>
        <div className="w-full flex justify-between">
          <h2 className="text-xl font-medium">Total</h2>
          <span className="font-medium text-lg">
            {transformCurrency(total)}
          </span>
        </div>
      </div>
      <Button className="w-full py-4 text-white mt-5" theme="light">
        Checkout
      </Button>
    </div>
  );
}
