import Image from "next/image";
import localFont from "next/font/local";



export default function Home() {
  return (
    <div className="h-screen w-full bg-[#ABA38F] flex flex-col gap-10 justify-center items-center">
      <Image alt="ll" src="/logo-black.png" width={2000} height={2000} className="w-60"/>
      <h1 className="label text-3xl lg:text-7xl">Website under construction..</h1>
    </div>
  );
}
