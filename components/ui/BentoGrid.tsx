import { cn } from "@/utils/cn";
import { useState } from "react";
import {
  FaReact,
  FaNode,
  FaPython,
  FaWordpress,
  FaVuejs,
} from "react-icons/fa";
import { IoCopyOutline, IoLogoJavascript } from "react-icons/io5";
import { SiPhp, SiNextdotjs, SiGatsby, SiTypescript } from "react-icons/si";
import MyButton from "../MyButton";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 max-w-7xl w-full mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  spareImgClassName,
}: {
  className?: string;

  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  spareImgClassName?: string;
}) => {
  const leftLists = [
    { name: "Typecript", icon: SiTypescript, color: "#3178C6" },
    { name: "Javascript", icon: IoLogoJavascript, color: "#F7DF1E" },
    { name: "Php", icon: SiPhp, color: "#777BB4" },
  ];
  const middleLists = [
    { name: "React", icon: FaReact, color: "#61dbfb" },
    { name: "Wordpress", icon: FaWordpress, color: "#21759B" },
    { name: "Nodejs", icon: FaNode, color: "#539e43" },
  ];
  const rightLists = [
    { name: "Vuejs", icon: FaVuejs, color: "#42b883" },
    { name: "Nextjs", icon: SiNextdotjs, color: "#0B0B0B" },
    { name: "Gatsbyjs", icon: SiGatsby, color: "#663399" },
  ];
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    const text = "smain.rabhi@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);

    // Set a timeout to revert the copied state back to false after 3 seconds
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundSize: "30%",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%) ",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"}  h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <Image
              src={spareImg}
              alt={spareImg}
              width={220}
              height={0}
              className={cn(
                spareImgClassName,
                "object-cover object-center w-full h-full "
              )}
            />
          )}
        </div>
        {id === 6 && (
          // add background animation , remove the p tag
          <div className="flex justify-center h-full">
            <div className="w-full h-full  overflow-hidden top-0 left-0 ">
              <div className="absolute  z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
            </div>
          </div>
        )}

        {/* <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-sans font-bold text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal  text-xs text-neutral-300">
          {description}
        </div>
      </div> */}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}

          <div
            className={`
              
                font-sans text-balance text-base md:text-xl lg:text-2xl z-10  max-w-96 font-semibold  text-neutral-100
                
             `}
          >
            {title}
          </div>
          <div
            className={` ${
              id === 1
                ? "font-sans pt-3 font-light md:max-w-lg tracking-wide md:text-base lg:text-base text-sm text-neutral-300 z-10"
                : "font-sans pt-3 font-light md:max-w-96 tracking-wide md:text-xs lg:text-base text-sm text-neutral-300 z-10"
            } 
                 
            } `}
          >
            {description}
          </div>

          {id === 2 && (
            <div className="mt-5 relative mx-auto">
              <img
                className="rounded-full w-28 h-28"
                src="/profile-pic 3.png"
              />
            </div>
          )}
          {/* Profile card */}

          {/* Tech stack list div */}
          {id === 3 && (
            <div className="flex gap-2 lg:gap-6 w-fit absolute -right-3 lg:-right-0">
              {/* tech stack lists */}
              <div className="flex flex-col gap-2 md:gap-3 lg:gap-8">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className={`lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E] text-gray-100`}
                  >
                    <item.icon fill={`${item.color}`} className=" w-8 h-8" />
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-2 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                {middleLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    <item.icon color={`${item.color}`} className=" w-8 h-8" />
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-2 md:gap-3 lg:gap-8">
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    <item.icon color={`${item.color}`} className=" w-8 h-8" />
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              {/* button border magic from tailwind css buttons  */}
              {/* add rounded-md h-8 md:h-8, remove rounded-full */}
              {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
              {/* add handleCopy() for the copy the text */}
              <div
                className={`absolute -bottom-5 right-10 ${
                  copied ? "block" : "block"
                }`}
              >
                {copied && <img src="/confetti.gif" alt="confetti" />}
              </div>

              <MyButton
                title={
                  copied ? "Whaou, email copié!" : "Copie mon adresse mail"
                }
                icon={<IoCopyOutline />}
                handleClick={handleCopy}
                position="left"
                otherClasses="bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
