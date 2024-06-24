import React from "react";
import { Spotlight } from "./ui/Spotlight";

const Header = () => {
  return (
    <div className="pb-20 pt-36">
      <div
        className="h-screen w-full bg-black-100  bg-grid-white/[0.02] 
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100
         [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      <Spotlight className="-top-1 left-0 md:left-80 md:-top-20" fill="white" />
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[80vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-neutral-300 max-w-80 mb-4">
            Je ne sai pas quoi écrire encore!
          </p>

          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Transformez vos idées <br /> en expériences captivantes.
          </h1>

          <p className="mt-4 font-normal text-xl text-neutral-300 max-w-lg text-center mx-auto">
            Je suis Smaïn, développeur full-stack basé à Lyon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
