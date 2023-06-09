import Head from "next/head";
import Navbar from "../../components/Navbar";
import ProjectPreview from "../../components/ProjectPreview";
import { motion } from "framer-motion";
import Javascript from "../../public/javascript.svg";
import Nextjs from "../../public/nextjs.svg";
import Nodejs from "../../public/nodejs.svg";
import React from "../../public/react.svg";
import Linkedin from "../../public/linkedin.svg";
import Github from "../../public/github.svg";
import Mail from "../../public/mail.svg";
import SocialButton from "../../components/SocialButton";
import Link from "next/link";
import ScrollToTopButton from "../../components/ScrollToTopButton";

export default function Home() {
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
  return (
    <>
      <Head>
        <title>Smain Rabhi Web Developer</title>
        <meta name="description" content="I am web developer based in Lyon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <Navbar />

      <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mb-8 mt-4">
        <div className="h-[30rem] md:h-[30rem] rounded-3xl border-2 md:p-10  p-4 flex flex-col md:gap-16 gap-6">
          <h1 className=" flex md:text-4xl text-2xl font-bold text-white text-center lg:text-left">
            I am a Javascript/React Developer
          </h1>
          <p className="flex-1 text-white text-sm  md:text-lg font-semibold text-center lg:text-left">
            Web developer passionate about crafting seamless digital
            experiences, specializing in JavaScript and React. Committed to
            clean code, intuitive interfaces and optimized performance. Strong
            problem-solving abilities and thrives in collaborative environments.
            Ready to leverage my expertise and join a dynamic team to create
            impactful projects.
          </p>
          <div className="flex flex-col lg:flex-row pb-12 md:pb-8  items-center gap-4 justify-self-end">
            <div className="relative group mb-[2rem] md:mb-0">
              <div
                className="absolute -inset-0.5 bg-gradient-to-r from-slate-50
               to-gray-50 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"
              ></div>
              <button className="relative cursor-pointer bg-white text-black font-semibold py-3 px-12 rounded-full w-60 lg:w-auto">
                <a href="#contact">Contact me</a>
              </button>
            </div>
            <div className="flex items-center gap-6 md:gap-8 ml-0 md:ml-5  md:pb-2 md:mb-0">
              <span className="text-white">|</span>
              <span className="text-white">Stacks</span>
              <SocialButton bgColor="javascript">
                <Javascript className="w-5 h-5" />
              </SocialButton>
              <SocialButton bgColor="react">
                <React className="w-5 h-5" />
              </SocialButton>
              <SocialButton>
                <Nextjs className="w-5 h-5" />
              </SocialButton>
              <SocialButton bgColor="nodejs">
                <Nodejs className="w-5 h-5" />
              </SocialButton>
            </div>
          </div>
        </div>
        <div className=" h-[18rem] md:h-[30rem] rounded-3xl order-first lg:order-last border-2 border-zinc-500 bg-[url('/avatar.webp')]  bg-cover bg-center transition-colors duration-1000 hover:bg-[#181624] hover:duration-800"></div>
      </section>

      <section
        id="projects"
        className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4"
      >
        <ProjectPreview
          name="Custom T-Shirt"
          description="React Threejs TailwindCSS 3d website"
          imageUrl="/customshirt.webp"
          bgColor="radial-gradient(
    ellipse at center,
    rgba(194, 97, 254, 0.15),
    rgba(255, 255, 255, 0)
  )"
          linkUrl="https://github.com/Sma-source/3d-tshirt.git"
          dark
        />
        <ProjectPreview
          name="Hall Of Prompt"
          description="Nextjs TailwindCSS Cloudinary"
          imageUrl="/promptai.webp"
          bgColor="radial-gradient(
    ellipse at center,
    rgba(194, 97, 254, 0.15),
    rgba(255, 255, 255, 0)
  )"
          linkUrl="https://github.com/Sma-source/hallofprompt.git"
          dark
        />
        <ProjectPreview
          name="Fashion Shop"
          description="Reactjs TailwindCSS clothing online store"
          imageUrl="/ecommerce.webp"
          bgColor="radial-gradient(
        ellipse at center,
        rgba(75, 158, 255, 0.15),
        rgba(255, 255, 255, 0)
        )"
          linkUrl="https://react-ecommerce-eight-livid.vercel.app/"
          dark
        />
        <ProjectPreview
          name="Adina Hotel & Spa"
          description="Book Hotel Room in Adina beautiful suites"
          imageUrl="/adinahotel.webp"
          bgColor="radial-gradient(
    ellipse at center,
  rgba(75, 158, 255, 0.15),
    rgba(255, 255, 255, 0)
  )"
          linkUrl="https://bookhotel-plum.vercel.app/"
          dark
        />
        <ProjectPreview
          name="Zugzwang"
          description="Political news blog"
          imageUrl="/blog.webp"
          bgColor="radial-gradient(
    ellipse at center,
  rgba(126, 231, 135, 0.15),
    rgba(255, 255, 255, 0)
  )"
          dark
        />
        <ProjectPreview
          name="Car Rental"
          description="Find and Rent a car, quickly"
          imageUrl="/carrental.webp"
          bgColor="radial-gradient(
    ellipse at center,
  rgba(126, 231, 135, 0.15),
    rgba(255, 255, 255, 0)
  )"
          linkUrl="https://github.com/Sma-source/car-rental.git"
          dark
        />
      </section>
      <ScrollToTopButton />
      <section
        id="contact"
        className="grid grid-cols-1 md:grid-cols-1 gap-4 mb-8 mt-4"
      >
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={PreviewAnimation}
          className="h-[30rem] rounded-3xl border-2 md:p-10 p-4 flex flex-col justify-center items-center md:gap-16 gap-9"
        >
          <h3 className="text-lg text-white">Contact</h3>
          <p className="text-4xl text-white text-center">
            Don't be shy! Hit me up!
          </p>

          <div className="flex flex-col items-center">
            <div className="relative group">
              <div
                className="absolute -inset-0.5 bg-gradient-to-r from-slate-50
               to-gray-50 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"
              ></div>
              <a
                href="mailto:smain.rabhi@gmail.com"
                title="Send me a mail"
                className={`relative group h-14 w-14 bg-white text-black  rounded-full  flex justify-center items-center`}
              >
                <div className="fill-black">
                  <Mail className="w-6 h-6" />
                </div>
              </a>
            </div>
            <span className="text-white pt-2 text-lg">Send me a mail</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex space-x-6">
              <Link
                href="https://www.linkedin.com/in/sma%C3%AFn-rabhi/"
                target="_blank"
                title="Linkedin profile"
              >
                <SocialButton bgColor="linkedin">
                  <Linkedin className="w-5 h-5" />
                </SocialButton>
              </Link>
              <Link
                href="https://github.com/Sma-source"
                target="_blank"
                title="Github profile"
              >
                <SocialButton>
                  <Github className="w-5 h-5" />
                </SocialButton>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-4">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-12 md:order-1">
            <span className="text-sm font-bold text-white tracking-widest uppercase">
              smadev
            </span>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              &copy; 2023 All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
