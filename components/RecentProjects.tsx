"use client";
import React from "react";

import { projects } from "@/data";

import Link from "next/link";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading text-neutral-200">
        Une sélection de <span className="text-purple">projets récents</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10"></div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2  mx-auto mt-10">
        {projects.map((data) => (
          <div
            key={data.id}
            style={{
              opacity: 1,
              filter: "blur(0px)",
              transform: "translateY(-6px) translateZ(0px)",
            }}
            className="w-full"
          >
            <div className="rounded-2xl bg-[#13162D]  text-card-foreground flex flex-col overflow-hidden border border-white/[.1] hover:shadow-lg transition-all duration-300 ease-out h-full">
              <Link href={data.link} className="block cursor-pointer">
                <img
                  className="pointer-events-none mx-auto h-44 w-full object-cover object-top"
                  src={data.img}
                  alt={data.title}
                ></img>
              </Link>
              <div className="flex flex-col px-2">
                <div className="space-y-3">
                  <h3 className="font-semibold tracking-tight mt-1 text-base text-neutral-100">
                    {data.title}
                  </h3>
                  <time className="font-sans text-xs text-neutral-200">
                    {data.linkTitle}
                  </time>
                  <div className="hidden font-sans text-xs underline print:visible"></div>
                  <div className="prose max-w-full text-pretty font-sans text-sm text-neutral-300/80 prose-invert">
                    <p>{data.des}</p>
                  </div>
                </div>
              </div>
              <div className="text-pretty font-sans text-base text-muted-foreground mt-auto flex flex-col px-2">
                <div className=" mt-2 flex flex-wrap gap-1">
                  {data.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="inline-flex items-center rounded-md border font-semibold transition-colors  focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]"
                    >
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center pt-2 px-2 pb-2">
                <div className="flex flex-row flex-wrap items-start gap-1">
                  {data.link === "" ? (
                    ""
                  ) : (
                    <Link target="_blank" href={data.link}>
                      <div className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-purple text-black shadow hover:bg-purple/80 flex gap-2 px-2 py-1 text-[10px]">
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
                          className="lucide lucide-globe size-3"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                          <path d="M2 12h20"></path>
                        </svg>
                        Voir le projet
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
