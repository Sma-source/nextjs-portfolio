"use client";
import React from "react";

import { PinContainer } from "./ui/3d-pin";
import { projects } from "@/data";
import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading text-neutral-200">
        Une sélection de <span className="text-purple">projets récents</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map((item) => (
          <div
            className="sm:h-[41rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.linkTitle} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image width="0" height="0" src="/bg.png" alt="bgimg" />
                </div>
                <Image
                  width="300"
                  height="0"
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                  style={{ height: "auto", width: "21rem" }}
                />
              </div>

              <h3 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-neutral-200">
                {item.title}
              </h3>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <Link
                    aria-disabled={item.link === "" && "true"}
                    href={item.link || ""}
                    className={`${item.link === "" && "pointer-events-none"}
                        flex lg:text-xl md:text-xs text-sm text-purple
                    `}
                  >
                    {item.link === "" ? "En cours" : "Voir le projet"}
                  </Link>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
