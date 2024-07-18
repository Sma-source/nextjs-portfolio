import React from "react";
import AnimatedShinyText from "./ui/animated-shiny-text";
import { IoIosArrowForward } from "react-icons/io";
import { cn } from "@/utils/cn";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const AnimatedButton = () => {
  return (
    <Link
      href={"/#projects"}
      className={cn(
        "group rounded-lg border text-base text-white transition-all ease-in hover:cursor-pointer border-white bg-black-100 hover:bg-black-200"
      )}
    >
      <AnimatedShinyText className="inline-flex items-center justify-center py-3 px-9 transition ease-out  hover:duration-300 hover:text-neutral-300">
        <span>✨ Voir mes Travaux </span>
        <IoIosArrowForward className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedShinyText>
    </Link>
  );
};

export default AnimatedButton;
