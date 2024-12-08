import logo from "../assets/cyber-logo.svg";
import { IoHeartOutline, IoPersonOutline } from "react-icons/io5";
import { InputSearch } from "./input-search";
import { CartControl } from "./cart-control";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="w-full bg-white py-4 flex z-50 border-b">
      <div className="w-full max-w-7xl m-auto flex justify-between items-center">
        <div className="flex w-2/4">
          <Link to={'/'}  className="mr-10 flex">
            <img src={logo} alt="Logotipo do site" className="w-20"/>
          </Link>
          <InputSearch />
        </div>
        <div className="flex gap-12">
          <nav>
            <ul className="flex gap-8">
              <li>Home</li>
              <li>About</li>
              <li>Contact Us</li>
              <li>Blog</li>
            </ul>
          </nav>
          <div className="flex gap-5">
            <IoHeartOutline size={24} />
            <CartControl qtd={12} />
            <IoPersonOutline size={24} />
          </div>
        </div>
      </div>
    </header>
  );
}
