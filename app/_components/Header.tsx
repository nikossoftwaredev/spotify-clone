"use client";

import { useRouter } from "next/navigation";
import { cn } from "../_utils/general";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { Button } from "./Button";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const Header = ({ children, className }: HeaderProps) => {
  const router = useRouter();
  const handleLogout = () => {
    // Handle logout in the future
  };
  return (
    <div
      className={cn("h-fit bg-gradient-to-b from-emerald-800 p-6", className)}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            onClick={() => router.back()}
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
          >
            <RxCaretLeft size={35} className="text-white" />
          </button>
          <button
            onClick={() => router.forward()}
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
          >
            <RxCaretRight size={35} className="text-white" />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75  transition">
            <HiHome size={20} className="text-black" />
          </button>
          <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75  transition">
            <BiSearch size={20} className="text-black" />
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          <>
            <div>
              <Button
                onClick={handleLogout}
                className="bg-transparent text-neutral-300 font-medium"
              >
                Sign Up
              </Button>
            </div>
            <div>
              <Button
                onClick={handleLogout}
                className="bg-white px-6 py-2 text-black"
              >
                Login
              </Button>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  );
};
