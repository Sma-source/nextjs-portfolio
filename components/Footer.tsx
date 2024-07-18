import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-neutral-200">
          Prêt à faire<span className="text-purple"> décoller </span>
          votre présence en ligne ?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Voyons ensemble comment je peux vous aider à atteindre vos objectifs.
        </p>
        <a href="mailto:smain.rabhi@gmail.com">
          <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-lg p-px text-md font-semibold leading-6  text-white inline-block mt-12">
            <span className="absolute inset-0 overflow-hidden rounded-lg">
              <span className="absolute inset-0 rounded-lg bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-lg bg-black-100 py-3 px-9 ring-1 ring-white/40 ">
              <span>{`Contactez-moi`}</span>
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
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm text-neutral-200 md:font-normal font-light">
          Copyright © {currentYear}
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <Link
              href={info.link}
              target="_blank"
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
