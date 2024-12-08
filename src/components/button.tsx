import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string;
  theme?: "dark" | "light";
}

export function Button({ theme, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`${props.className} ${
        theme === "dark" ? "border-white hover:bg-white hover:text-black" : "bg-black border-black hover:bg-white hover:text-black"
      } border border-white rounded-lg text-white z-10`}
    >
      {props.children}
    </button>
  );
}
