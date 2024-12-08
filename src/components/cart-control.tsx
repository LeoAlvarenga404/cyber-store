import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export function CartControl({ qtd }: { qtd: number }) {
  return (
    <Link to={'/cart'} className="relative">
      <IoCartOutline size={24} />
      <span className="text-xs text-white rounded-full w-4 h-4 flex justify-center items-center bg-red-500 absolute -top-1 -right-1">
        {qtd}
      </span>
    </Link>
  );
}
