import iphoneBanner from "../assets/iphone-16-pro.webp";
import blur from "../assets/blur.png";
import { Button } from "./button";

export function Banner() {
  return (
    <div className="bg-gradient-to-r from-[#131014] to-[#050405] relative overflow-hidden">
      <div className="w-full max-w-7xl m-auto flex flex-col md:flex-row justify-between px-4 pt-20 max-w-xl:px-8">
        <div className="flex flex-col justify-center gap-4 text-center md:text-left z-10">
          <h2 className="text-lg md:text-xl font-extrabold text-zinc-500">Pro.Beyond.</h2>
          <div>
            <h1 className="text-5xl md:text-8xl text-white">iPhone 16</h1>
            <span className="text-4xl md:text-6xl font-thin text-white tracking-[4px]">
              PRO MAX
            </span>
          </div>
          <p className="text-base md:text-lg font-medium text-zinc-500">
            Created to change everything for the better. For everyone
          </p>
          <Button className="w-40 py-3 text-white mx-auto md:mx-0" theme="dark">Shop Now</Button>
        </div>
        <div className="pt-8 md:pt-20">
          <img 
            className="z-10 pointer-events-none w-full md:w-auto max-w-[30rem] mx-auto" 
            src={iphoneBanner} 
            alt="Iphone 14 Pro" 
          />
          <img
            src={blur}
            alt="Blur"
            className="absolute top-0 right-0 md:right-72 scale-150 opacity-50 pointer-events-none"
          />
        </div>
      </div>
      <img
        src={blur}
        alt="Blur"
        className="absolute top-0 left-0 scale-150 opacity-30 pointer-events-none"
      />
    </div>
  );
}
