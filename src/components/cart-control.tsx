import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useCart } from "../redux/sliceCart";

export function CartControl() {
  const productCart = useSelector(useCart);

  const total = productCart.reduce((acc, product) => acc + product.count, 0);

  return (
    <Link to={"/cart"} className="relative">
      <IoCartOutline size={24} />
      {total > 0 && (
        <span className="text-xs text-white rounded-full w-4 h-4 flex justify-center items-center bg-red-500 absolute -top-1 -right-1">
          {total}
        </span>
      )}
    </Link>
  );
}
