import React from "react";
import { Spotlight } from "./ui/Spotlight";
import BlurFade from "./ui/blur-fade";

const Header = () => {
  return (
    <div className="pb-20 pt-36">
      <Spotlight
        className="z-[1] h-[169%] w-[148%] lg:w-[94%] opacity-0 -top-[60rem] left-10 md:left-60 md:-top-[50rem]"
        fill="white"
      />
      <div
        className="h-screen w-full bg-black-100  bg-grid-white/[0.04]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100
         [mask-image:linear-gradient(to_bottom,white_5%,transparent_20%)]"
        />
      </div>
      {/* <Spotlight
        className="z-[1] h-[169%] w-[138%] lg:w-[84%] opacity-0 -top-[50rem] left-0 md:left-60 md:-top-[50rem]"
        fill="white"
      /> */}

      <div className="flex justify-center relative my-20 z-10">
        <BlurFade delay={0.25} inView>
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[80vw] flex flex-col items-center justify-center">
            <img
              className="w-24 h-24 p-0.5 rounded-full ring-2 ring-purple dark:ring-gray-500 mb-4 -mt-6"
              src="/profile-pic 3.png"
            />
            <h1 className="text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              Transformez vos idées <br /> en expériences captivantes.
            </h1>

            <p className="mt-4 font-normal text-2xl md:text-3xl text-neutral-300 max-w-3xl text-center mx-auto">
              Je suis Smaïn, développeur full-stack basé à Lyon.
            </p>

            <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-lg p-px text-md font-semibold leading-6  text-white inline-block mt-12">
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
            </button>
          </div>
        </BlurFade>
      </div>
    </div>
  );
};

export default Header;
