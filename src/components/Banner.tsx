import iphoneBanner from "../assets/iphone-16-pro.webp";
import blur from "../assets/blur.png";
import { Button } from "./button";

export function Banner() {
  return (
    <div className="bg-gradient-to-r from-[#131014] to-[#050405] relative">
      <div className="w-full max-w-7xl m-auto flex justify-between">
        <div className="flex flex-col justify-center gap-4">
          <h2 className="text-xl font-extrabold text-zinc-500">Pro.Beyond.</h2>
          <div>
            <h1 className="text-8xl text-white">iPhone 16</h1>
            <span className="text-6xl font-thin text-white tracking-[4px]">
              PRO MAX
            </span>
          </div>
          <p className="text-lg font-medium text-zinc-500">
            Created to change everything for the better. For everyone
          </p>
          <Button theme="dark">Shop Now</Button>
        </div>
        <div className=" pt-20">
          <img className="z-3 pointer-events-none" src={iphoneBanner} alt="Iphone 14 Pro" />
          <img
            src={blur}
            alt="Blur"
            className="absolute top-0 right-72 scale-150 opacity-50 pointer-events-none"
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
