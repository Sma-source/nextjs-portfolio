import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-2">
      <div className="flex items-center gap-[1ch]">
        <div className="w-5 h-5 bg-yellow-400 rounded-full" />
        <span className="text-sm font-bold text-white tracking-widest uppercase">
          smadev
        </span>
      </div>
      <div className="flex gap-12 text-md text-zinc-400">
        <Link href="#" className="text-white font-medium">
          Home
        </Link>
        <Link href="#">Projects</Link>
        <Link href="#">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;