import logo from "../assets/cyber-logo.svg";

export function Header() {
  return (
    <header className="w-full bg-white py-8 flex ">
      <div className="w-full max-w-7xl m-auto flex justify-between">
        <img src={logo} alt="Logotipo do site" />
        <nav>
          <ul className="flex gap-5">
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Blog</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
