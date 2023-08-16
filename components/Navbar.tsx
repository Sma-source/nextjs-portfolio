import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    // <nav className="flex justify-between items-center py-4 px-2">
    //   <div className="flex items-center gap-[1ch]">
    //     <div className="w-5 h-5 bg-purple-900/60 rounded-full" />
    //     <span className="text-sm font-bold text-white tracking-widest uppercase">
    //       smadev
    //     </span>
    //   </div>
    //   <div className="flex gap-12 text-md text-zinc-400">
    //     <a href="#" className="text-white font-medium">
    //       Home
    //     </a>
    //     <a href="#projects">Projects</a>
    //     <a href="#contact">Contact</a>
    //   </div>
    // </nav>
    <nav className="fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  bg-zinc-900/0 border-transparent">
      <div className="container flex flex-row-reverse items-center justify-between px-6  mx-auto">
        <div className="flex justify-between gap-8">
          <Link
            href="#"
            className="duration-200 text-zinc-400 hover:text-zinc-100"
          >
            Home
          </Link>
          <a
            href="#projects"
            className="duration-200 text-zinc-400 hover:text-zinc-100"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="duration-200 text-zinc-400 hover:text-zinc-100"
          >
            Contact
          </a>
        </div>
        <Link
          href="/"
          className="duration-200 text-zinc-300 hover:text-zinc-100"
        >
          {/* <div className="w-5 h-5 bg-zinc-500 sepia rounded-full" />
          <span className="text-sm font-bold text-white tracking-widest uppercase">
            smadev{" "}
          </span> */}
          <Image
            src="/sma-signature.png"
            alt="logo"
            width={100}
            height={30}
            className="sepia"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
