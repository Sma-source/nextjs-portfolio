import React from "react";
import { Spotlight } from "./ui/Spotlight";
import BlurFade from "./ui/blur-fade";
import AnimatedButton from "./AnimatedButton";
import Link from "next/link";
import { cn } from "@/utils/cn";
import Image from "next/image";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold  bg-purple/[0.1] text-purple px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const Header = () => {
  return (
    <div className="pb-20 pt-36">
      {/* <Spotlight
        className="z-[1] h-[169%] w-[148%] lg:w-[94%] opacity-0 -top-[60rem] left-10 md:left-60 md:-top-[50rem]"
        fill="white"
      /> */}
      <div
        className="h-screen w-full bg-black-100  bg-grid-purple/[0.02]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="spotlight-header"
        />
      </div>
      {/* <Spotlight
        className="z-[1] h-[169%] w-[138%] lg:w-[84%] opacity-0 -top-[50rem] left-0 md:left-60 md:-top-[50rem]"
        fill="white"
      /> */}

      <div className="flex justify-center relative my-20 z-10">
        <BlurFade delay={0.25} inView>
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[80vw] flex flex-col items-center justify-center">
            <Image
              height={80}
              width={80}
              className="w-20 h-20 p-0.5 rounded-full ring-2 ring-purple dark:ring-gray-500 mb-8 -mt-20"
              src="/profile-pic 3.png"
              alt="Smain Rabhi"
            />

            <h1 className="mt-4 text-6xl max-w-xl font-bold leading-[6.5rem]  text-center bg-clip-text text-transparent bg-gradient-to-l from-neutral-50 to-neutral-300 bg-opacity-50">
              <div className="inline-block">Smaïn</div>
              <span className="mot-design bg-clip-text text-transparent bg-gradient-to-l from-neutral-50 to-neutral-300 bg-opacity-50">
                <div
                  className="mot-selection"
                  style={{ top: "-3px", left: "-3px" }}
                ></div>
                <div
                  className="mot-selection"
                  style={{ right: "-3px", top: "-3px" }}
                ></div>
                <div
                  className="mot-selection"
                  style={{ bottom: "-3px", left: "-3px" }}
                ></div>
                <div
                  className="mot-selection"
                  style={{ bottom: "-3px", right: "-3px" }}
                ></div>
                <div className="mot-taille text-white">
                  Développeur Full Stack
                </div>
                Rabhi
              </span>
            </h1>
            <p className="mt-3 font-normal text-xl leading-8 text-balance max-w-sm sm:max-w-screen-lg text-neutral-300  text-center mx-auto">
              Passionné par l&apos;innovation et le{" "}
              <Highlight>développement</Highlight>, engagé dans
              l&apos;excellence technique et la résolution créative de défis
              complexes.
            </p>
            <div className="flex mt-9 items-center justify-center relative ">
              <AnimatedButton />
            </div>
            {/* <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-lg p-px text-md font-semibold leading-6  text-white inline-block mt-12">
              <span className="absolute inset-0 overflow-hidden rounded-lg">
                <span className="absolute inset-0 rounded-lg bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-lg bg-black-100 py-3 px-9 ring-1 ring-white/40 ">
                <span>{`Voir mes travaux`}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                  ></path>
                </svg>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
            </button> */}
            {/* <div className="flex justify-center items-center mt-14">
              <Link
                href="#"
                className="items-center ring-1 ring-purple justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black-100 text-primary-foreground shadow hover:bg-black-100/90 h-8 px-6 py-6 whitespace-pre flex group relative w-full gap-1 overflow-hidden text-base font-semibold tracking-tighter transform-gpu rounded-lg ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2"
              >
                <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-32 bg-white/60"></span>
                ✨ Voir mes travaux
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </Link>
            </div> */}
          </div>
        </BlurFade>
      </div>
    </div>
  );
};

export default Header;
