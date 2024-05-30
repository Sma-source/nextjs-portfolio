import Head from "next/head";
import Navbar from "../../components/Navbar";

import React from "../../public/react.svg";

import Link from "next/link";
import ScrollToTopButton from "../../components/ScrollToTopButton";

export default function Home() {
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
      <div className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
        <div className="relative py-16">
          <Navbar />

          <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                Full Stack Developer
              </h1>
              <p className="mt-4 text-zinc-400">
                Ask me about Javascript, React, Nodejs, Mernstack, Jamstack,
                Wordpress
              </p>
            </div>
            <div className="w-full h-px bg-zinc-800"></div>
            <section className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
              <div className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 ">
                <div className="pointer-events-none">
                  <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]"></div>
                  <div
                    className="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50 "
                    style={{
                      maskImage:
                        "radial-gradient(240px at 492.5px 5px, white, transparent)",
                      WebkitMaskImage:
                        "radial-gradient(240px at 492.5px 5px, white, transparent)",
                    }}
                  ></div>
                  <div
                    className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
                    style={{
                      maskImage:
                        "radial-gradient(240px at 492.5px 5px, white, transparent)",
                      WebkitMaskImage:
                        "radial-gradient(240px at 492.5px 5px, white, transparent)",
                    }}
                  ></div>
                </div>

                <div className="relative w-full h-full p-4 md:p-8">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-xs text-zinc-100">
                      <h3>About me</h3>
                    </div>
                  </div>
                  <h2
                    id="featured-post"
                    className="mt-4  text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                  >
                    Coding Addict
                  </h2>
                  <p className="mt-4  leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                    Web developer passionate about crafting seamless digital
                    experiences, specializing in JavaScript and React. Committed
                    to clean code, intuitive interfaces and optimized
                    performance. Strong problem-solving abilities and thrives in
                    collaborative environments. Ready to leverage my expertise
                    and join a dynamic team to create impactful projects.
                  </p>
                  <div className="absolute bottom-4 md:bottom-4 mb-2">
                    <a href="#contact">
                      <p className="hidden text-zinc-200 hover:text-zinc-50 hover:underline lg:block">
                        Contact me <span aria-hidden="true">→</span>
                      </p>
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative h-[18rem] md:h-[26rem] rounded-xl hover:bg-zinc-800/10 order-first lg:order-last  duration-700 border border-zinc-600 hover:border-zinc-400/50 bg-[url('/tof.png')]  bg-cover bg-center sepia hover:sepia-0">
                <div className="pointer-events-none">
                  <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]"></div>
                  <div
                    className="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50"
                    style={{
                      maskImage:
                        "radial-gradient(240px at 492.5px 5px, white, transparent)",
                      WebkitMaskImage:
                        "radial-gradient(240px at 492.5px 5px, white, transparent)",
                    }}
                  ></div>
                  <div
                    className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
                    style={{
                      maskImage:
                        "radial-gradient(240px at 492.5px 5px, white, transparent)",
                      WebkitMaskImage:
                        "radial-gradient(240px at 492.5px 5px, white, transparent)",
                    }}
                  ></div>
                </div>
              </div>

              {/* <div className="h-[30rem] md:h-[30rem] rounded-3xl border-2 md:p-10  p-4 flex flex-col md:gap-16 gap-6">
                <h1 className=" flex md:text-4xl text-2xl font-bold text-white text-center lg:text-left">
                  About me
                </h1>
                <p className="flex-1 text-white text-sm  md:text-lg font-semibold text-center lg:text-left">
                  Web developer passionate about crafting seamless digital
                  experiences, specializing in JavaScript and React. Committed
                  to clean code, intuitive interfaces and optimized performance.
                  Strong problem-solving abilities and thrives in collaborative
                  environments. Ready to leverage my expertise and join a
                  dynamic team to create impactful projects.
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
              <div className=" h-[18rem] md:h-[30rem] rounded-3xl order-first lg:order-last border-2 border-zinc-500 bg-[url('/avatar.webp')]  bg-cover bg-center transition-colors duration-1000 hover:bg-[#181624] hover:duration-800"></div> */}
            </section>
            <div className="hidden w-full h-px md:block bg-zinc-800"></div>
            <div id="projects" className="max-w-2xl mx-auto lg:mx-0">
              <h3 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                Projects
              </h3>
            </div>
            {/* Project */}

            <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
              <div className="grid grid-cols-1 gap-4">
                <div className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600">
                  <div className="pointer-events-none">
                    <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]"></div>
                    <div
                      className="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50"
                      style={{
                        maskImage:
                          "radial-gradient(240px at 369px 89px, white, transparent)",
                        WebkitMaskImage:
                          "radial-gradient(240px at 369px 89px, white, transparent)",
                      }}
                    ></div>
                    <div
                      className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
                      style={{
                        maskImage:
                          "radial-gradient(240px at 369px 89px, white, transparent)",
                        WebkitMaskImage:
                          "radial-gradient(240px at 369px 89px, white, transparent)",
                      }}
                    ></div>
                  </div>
                  <Link
                    href="https://bookhotel-plum.vercel.app/"
                    target="_blank"
                    title="Click to see"
                  >
                    <article className="p-4 md:p-8">
                      <div className="flex justify-between gap-2 items-center">
                        <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
                          #react
                        </span>
                        <span className="text-zinc-500 text-xs  flex items-center gap-1">
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
                            className="w-5 h-5"
                          >
                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>{" "}
                        </span>
                      </div>
                      <h4 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                        Hotel Booking
                      </h4>
                      <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
                        Book a room in Adina luxury Hotel. A project made with
                        React, TailwindCSS, HeadlessUI and powered by Vercel.
                      </p>
                    </article>
                  </Link>
                </div>
                <div className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600">
                  <div className="pointer-events-none">
                    <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]"></div>
                    <div
                      className="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50"
                      style={{
                        maskImage:
                          "radial-gradient(240px at 0px 0px, white, transparent)",
                        WebkitMaskImage:
                          "radial-gradient(240px at 0px 0px, white, transparent)",
                      }}
                    ></div>
                    <div
                      className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
                      style={{
                        maskImage:
                          "radial-gradient(240px at 0px 0px, white, transparent)",
                        WebkitMaskImage:
                          "radial-gradient(240px at 0px 0px, white, transparent)",
                      }}
                    ></div>
                  </div>
                  <Link
                    href="https://react-ecommerce-sma-source.vercel.app/"
                    target="_blank"
                    title="Click to see"
                  >
                    <article className="p-4 md:p-8">
                      <div className="flex justify-between gap-2 items-center">
                        <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
                          #react
                        </span>
                        <span className="text-zinc-500 text-xs  flex items-center gap-1">
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
                            className="w-5 h-5"
                          >
                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>{" "}
                        </span>
                      </div>
                      <h4 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                        Online Shopping
                      </h4>
                      <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
                        Online shopping clothes for the latest fashion. Made
                        with React, ReactContext, TailwindCSS & Fake Store API.
                      </p>
                    </article>
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600">
                  <div className="pointer-events-none">
                    <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]"></div>
                    <div
                      className="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50"
                      style={{
                        maskImage:
                          "radial-gradient(240px at 341.333px 161px, white, transparent)",
                        WebkitMaskImage:
                          "radial-gradient(240px at 341.333px 161px, white, transparent)",
                      }}
                    ></div>
                    <div
                      className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
                      style={{
                        maskImage:
                          "radial-gradient(240px at 341.333px 161px, white, transparent)",
                        WebkitMaskImage:
                          "radial-gradient(240px at 341.333px 161px, white, transparent)",
                      }}
                    ></div>
                  </div>
                  <Link
                    href="https://technisourcing.com/"
                    target="_blank"
                    title="Click to see"
                  >
                    <article className="p-4 md:p-8">
                      <div className="flex justify-between gap-2 items-center">
                        <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
                          #wordpress
                        </span>
                        <span className="text-zinc-500 text-xs  flex items-center gap-1">
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
                            className="w-5 h-5"
                          >
                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>{" "}
                        </span>
                      </div>

                      <h4 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                        Technisourcing
                      </h4>
                      <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
                        A complete overhaul of the Technisourcing website, an
                        industrial sourcing company. Developed with wordpress.
                      </p>
                    </article>
                  </Link>
                </div>
                <div className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600">
                  <div className="pointer-events-none">
                    <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]"></div>
                    <div
                      className="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50"
                      style={{
                        maskImage:
                          "radial-gradient(240px at 345.333px 4px, white, transparent)",
                        WebkitMaskImage:
                          "radial-gradient(240px at 345.333px 4px, white, transparent)",
                      }}
                    ></div>
                    <div
                      className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
                      style={{
                        maskImage:
                          "radial-gradient(240px at 345.333px 4px, white, transparent)",
                        WebkitMaskImage:
                          "radial-gradient(240px at 345.333px 4px, white, transparent)",
                      }}
                    ></div>
                  </div>
                  <Link
                    href="https://www.originweb.fr"
                    target="_blank"
                    title="Click to see"
                  >
                    <article className="p-4 md:p-8">
                      <div className="flex justify-between gap-2 items-center">
                        <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
                          #wordpress
                        </span>
                        <span className="text-zinc-500 text-xs  flex items-center gap-1">
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
                            className="w-5 h-5"
                          >
                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>{" "}
                        </span>
                      </div>
                      <h4 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                        Origin Web
                      </h4>
                      <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
                        Creation and design of a digital agency's website and
                        development of its brand identity. Developed with
                        wordpress
                      </p>
                    </article>
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600">
                  <div className="pointer-events-none">
                    <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]"></div>
                    <div
                      className="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50"
                      style={{
                        maskImage:
                          "radial-gradient(240px at 492.5px 5px, white, transparent)",
                        WebkitMaskImage:
                          "radial-gradient(240px at 492.5px 5px, white, transparent)",
                      }}
                    ></div>
                    <div
                      className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
                      style={{
                        maskImage:
                          "radial-gradient(240px at 492.5px 5px, white, transparent)",
                        WebkitMaskImage:
                          "radial-gradient(240px at 492.5px 5px, white, transparent)",
                      }}
                    ></div>
                  </div>
                  <Link
                    href="https://github.com/Sma-source/car-rental"
                    target="_blank"
                    title="Click to see"
                  >
                    <article className="p-4 md:p-8">
                      <div className="flex justify-between gap-2 items-center">
                        <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
                          #nextjs
                        </span>
                        <span className="text-zinc-500 text-xs  flex items-center gap-1">
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
                            className="w-5 h-5"
                          >
                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>{" "}
                        </span>
                      </div>

                      <h4 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                        Car Rental
                      </h4>
                      <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
                        Find, book and rent a car, quickly and easily. Enjoy our
                        effortless booking process. Made with Nextjs typescript,
                        HeadlessUI, TailwindCSS.
                      </p>
                    </article>
                  </Link>
                </div>
                <div className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600">
                  <div className="pointer-events-none">
                    <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]"></div>
                    <div
                      className="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50"
                      style={{
                        maskImage:
                          "radial-gradient(240px at 492.5px 5px, white, transparent)",
                        WebkitMaskImage:
                          "radial-gradient(240px at 492.5px 5px, white, transparent)",
                      }}
                    ></div>

                    <div
                      className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
                      style={{
                        maskImage:
                          "radial-gradient(240px at 492.5px 5px, white, transparent)",
                        WebkitMaskImage:
                          "radial-gradient(240px at 492.5px 5px, white, transparent)",
                      }}
                    ></div>
                  </div>
                  <Link href="#" target="_blank" title="Click to see">
                    <article className="p-4 md:p-8">
                      <div className="flex justify-between gap-2 items-center">
                        <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
                          #nextjs
                        </span>
                        <span className="text-zinc-500 text-xs  flex items-center gap-1">
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
                            className="w-5 h-5"
                          >
                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>{" "}
                        </span>
                      </div>
                      <h4 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                        Blog Post
                      </h4>
                      <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
                        A stylish Geo-Political blog news. Made with Nextjs,
                        typescript, TailwindCSS and Sanity as a CMS. Powered by
                        Vercel.
                      </p>
                    </article>
                  </Link>
                </div>
              </div>
            </div>

            {/* End Project */}
            <div className="hidden w-full h-px md:block bg-zinc-800"></div>
            <div id="projects" className="max-w-2xl mx-auto lg:mx-0">
              <h3 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                Contact
              </h3>
            </div>
            {/* <section
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
            </section> */}
            <ScrollToTopButton />
            {/* <section
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
                  <span className="text-white pt-2 text-lg">
                    Send me a mail
                  </span>
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
            </section> */}
            {/* Contact */}
            <div
              id="contact"
              className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-2 lg:gap-4"
            >
              <div className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 ">
                <div className="pointer-events-none">
                  <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]"></div>
                  <div
                    className="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50"
                    style={{
                      maskImage:
                        "radial-gradient(240px at 366.833px 111.5px, white, transparent)",
                      WebkitMaskImage:
                        "radial-gradient(240px at 366.833px 111.5px, white, transparent)",
                    }}
                  ></div>
                  <div
                    className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
                    style={{
                      maskImage:
                        "radial-gradient(240px at 366.833px 111.5px, white, transparent)",
                      WebkitMaskImage:
                        "radial-gradient(240px at 366.833px 111.5px, white, transparent)",
                    }}
                  ></div>
                </div>
                <a
                  href="mailto:smain.rabhi@gmail.com"
                  className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
                >
                  <span className="relative z-10 flex items-center justify-center w-14 h-14 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-mail h-6 w-6"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </span>
                  <div className="z-10 flex flex-col items-center">
                    <span className="text-xl font-medium duration-150 lg:text-xl text-zinc-200 group-hover:text-white font-display">
                      Don't be shy! Hit me up!
                    </span>
                    <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                      Email
                    </span>
                  </div>
                </a>
              </div>
              <div className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 ">
                <div className="pointer-events-none">
                  <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]"></div>
                  <div
                    className="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50"
                    style={{
                      maskImage:
                        "radial-gradient(240px at 381.167px 51.5px, white, transparent)",
                      WebkitMaskImage:
                        "radial-gradient(240px at 381.167px 51.5px, white, transparent)",
                    }}
                  ></div>
                  <div
                    className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
                    style={{
                      maskImage:
                        "radial-gradient(240px at 381.167px 51.5px, white, transparent)",
                      WebkitMaskImage:
                        "radial-gradient(240px at 381.167px 51.5px, white, transparent)",
                    }}
                  ></div>
                </div>
                <a
                  href="https://github.com/Sma-source"
                  className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
                >
                  <span className="relative z-10 flex items-center justify-center w-14 h-14 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-github h-6 w-6"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </span>
                  <div className="z-10 flex flex-col items-center">
                    <span className="text-xl font-medium duration-150 lg:text-xl text-zinc-200 group-hover:text-white font-display">
                      Sma-source
                    </span>
                    <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                      Github
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* End Contact */}
            {/* Footer */}
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
            {/* End Footer */}
          </div>
        </div>
      </div>
    </>
  );
}
