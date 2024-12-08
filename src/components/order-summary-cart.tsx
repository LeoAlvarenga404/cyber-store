import { Button } from "./button";

export function OrderSummaryCart() {
  return (
    <div className="p-10">
      <h2 className="font-bold text-xl">Order Summary</h2>
      <form className="mt-4">
        <div>
          <label htmlFor="code">Discount code / Promo code</label>
          <input id="code" type="text" placeholder="Code" />
        </div>
        <div>
          <label htmlFor="card-number">Your bonus card number</label>
          <input id="card-number" type="text" placeholder="Enter Card Number" />
          <Button className="text-black bg-white border border-zinc-950 px-4 py-1">
            Apply
          </Button>
        </div>
      </form>
      <div>
        <h2>Subtotal</h2>
        <span>$23460.90</span>
      </div>
      <div>
        <h3>Estimated Tax</h3>
        <span>$60.00</span>
      </div>
      <div>
        <h3>Estimated shipping & Handling</h3>
        <span>$29</span>
      </div>
      <div>
        <h2>Total</h2>
        <span>$23589.90</span>
      </div>
      <Button className="w-full py-4" theme="light">
        Checkout
      </Button>
    </div>
  );
}
