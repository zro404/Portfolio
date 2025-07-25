import { Matrix } from "@/components/Matrix";

export default function Hero() {
  return (
    <div className="h-screen flex justify-center items-center bg-black text-white">
      <Matrix />
      <div className="font-bold bungee-regular z-1">
        <h1>Web Developer,</h1>
        <h1>Linux Enthusiast,</h1>
        <h1>Student</h1>
      </div>
    </div>
  );
}
