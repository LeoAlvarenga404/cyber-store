import iphoneBanner from "../assets/iphone-banner-2.webp";

export function Banner() {
  return (
    <div className="bg-[#211C24]">
      <div className="w-full max-w-7xl m-auto flex justify-between">
        <div className="flex flex-col justify-center gap-4">
          <h2 className="text-xl font-bold text-zinc-500">Pro.Beyond.</h2>
          <h1 className="text-8xl text-white tracking-wider flex gap-4">
            <span className="font-thin">IPhone 14</span>Pro
          </h1>
          <p className="text-lg font-medium text-zinc-500">
            Created to change everything for the better. For everyone
          </p>
          <button className="text-white border border-white py-4 w-48 rounded-lg w-auto">
            Shop Now
          </button>
        </div>
        <div className=" pt-20">

        <img className="w-96" src={iphoneBanner} alt="" />
        </div>
      </div>
    </div>
  );
}
