import { FaPlus, FaMinus, FaX } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addMoreItem, removeItem, removeFromCart } from "../redux/sliceCart";
import { Link } from "react-router-dom";
interface CartItem {
  title: string;
  price: number;
  pictures: { url: string }[];
  id: string;
  count: number;
}

export function CartProducts({ title, price, pictures, id, count }: CartItem) {
  const formattedPrice = price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-4">
      <Link to={`/details/${id}`} className="w-32">
        <img src={pictures[0].url} alt="" className=" object-cover" />
      </Link>
      <div className="flex flex-col">
        <h2 className="font-medium text-lg">{title}</h2>
        <p className="text-zinc-500">{id}</p>
      </div>
      <div className="flex gap-2">
        <button onClick={() => dispatch(removeItem(id))}>
          <FaMinus size={14} />
        </button>
        <div className="h-8 w-10 border border-zinc-200 flex justify-center items-center font-bold">
          {count}
        </div>
        <button onClick={() => dispatch(addMoreItem(id))}>
          <FaPlus size={14} />
        </button>
      </div>
      <div>{formattedPrice}</div>
      <button
        className="text-zinc-500"
        onClick={() => dispatch(removeFromCart(id))}
      >
        <FaX size={20} />
      </button>
    </div>
  );
}
