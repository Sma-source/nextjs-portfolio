import React from "react";
import Arrow from "../public/arrow.svg";
import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  name?: string | undefined;
  description?: string | undefined;
  imageUrl?: string | undefined;
  bgColor?: string | undefined;
  linkUrl?: string | undefined;
  dark?: boolean | undefined;
}

const ProjectPreview: React.FC<Props> = ({
  name = "Block name",
  description = "This is an amazing block",
  imageUrl = "/project-1.png",
  bgColor = "#e4e4e7",
  linkUrl = "/",
  dark = false,
}) => {
  return (
    <motion.div
      className={`h-[30rem] rounded-3xl border-2 border-zinc-500 overflow-hidden ${
        dark ? "dark" : ""
      }`}
      style={{ background: `${bgColor}` }}
      initial="initial"
      whileInView="animate"
      variants={PreviewAnimation}
    >
      <div
        className={`h-full w-full px-10 py-6  duration-[700ms] hover:scale-105 bg-cover bg-no-repeat bg-center transition-all ease-in-out`}
        style={{ backgroundImage: `url('${imageUrl}')` }}
      >
        <div className="flex justify-between">
          <div>
            <h2 className="font-medium text-lg dark:text-white">{name}</h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-300">
              {description}
            </p>
          </div>
          <Link href={linkUrl} target="_blank" title="View Project">
            <div className="relative group">
              <div className="h-12 w-12 bg-white rounded-full flex justify-center items-center cursor-pointer">
                <div
                  className="absolute -inset-1 bg-gradient-to-r from-slate-50
               to-gray-50 rounded-full blur-sm opacity-20 group-hover:opacity-40 transition duration-200 group-hover:duration-200"
                ></div>
                <Arrow alt="Follow link" className="w-6 h-6" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const PreviewAnimation = {
  initial: {
    y: 30,
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1,
    },
  },
};

export default ProjectPreview;
