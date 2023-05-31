import Head from "next/head";
import Navbar from "../../components/Navbar";
import ProjectPreview from "../../components/ProjectPreview";
import Dribbble from "../../public/dribbble.svg";
import Instagram from "../../public/instagram.svg";
import Twitter from "../../public/twitter.svg";
import Linkedin from "../../public/linkedin.svg";
import SocialButton from "../../components/SocialButton";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>My portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mb-8 mt-4 ">
        <div className="h-[30rem] rounded-3xl border-2 md:p-10 p-4 flex flex-col md:gap-16 gap-9">
          <h1 className="text-4xl font-bold text-white">
            Je suis un développeur Javascript /React
          </h1>
          <p className="flex-1 text-white font-semibold">
            Développeur web passionné par la création d'expériences digitales
            fluides, maîtrisant JavaScript et React. Engagé pour un code propre,
            des interfaces intuitives et des performances optimisées. Fortes
            compétences en résolution de problèmes et collaboration. Prêt à
            apporter mon expertise à une équipe dynamique.
          </p>
          <div className="flex flex-col lg:flex-row pb-8 items-center gap-4 justify-self-end">
            <div className="relative group">
              <div
                className="absolute -inset-0.5 bg-gradient-to-r from-slate-50
               to-gray-50 rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"
              ></div>
              <button className="relative bg-white text-black font-semibold py-3 px-12 rounded-full w-60 lg:w-auto">
                Me Contacter
              </button>
            </div>
            <div className="flex items-center gap-6 ml-0 md:ml-5 pb-2">
              <SocialButton bgColor="instagram">
                <Instagram className="w-5 h-5" />
              </SocialButton>
              <Link href={"https://www.linkedin.com"}>
                <SocialButton bgColor="linkedin">
                  <Linkedin className="w-5 h-5" />
                </SocialButton>
              </Link>
            </div>
          </div>
        </div>
        <div className="h-[30rem] rounded-3xl border-2  border-zinc-500 bg-[url('/avatar.png')]  bg-cover bg-center"></div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
        <ProjectPreview
          name="Custom T-Shirt"
          description="React Threejs 3d website"
          imageUrl="/customshirt.png"
          bgColor="radial-gradient(
    ellipse at center,
    rgba(194, 97, 254, 0.15),
    rgba(255, 255, 255, 0)
  )"
          linkUrl="https://github.com/Sma-source/3d-tshirt.git"
          dark
        />
        <ProjectPreview
          name="Moneyscape"
          description="Lend and borrow dashboard"
          imageUrl="/project-2.png"
          bgColor="radial-gradient(
    ellipse at center,
    rgba(194, 97, 254, 0.15),
    rgba(255, 255, 255, 0)
  )"
          dark
        />
        <ProjectPreview
          name="Admin Onboarding"
          description="Increase user engagement"
          imageUrl="/project-3.png"
          bgColor="radial-gradient(
    ellipse at center,
  rgba(75, 158, 255, 0.15),
    rgba(255, 255, 255, 0)
  )"
          dark
        />
        <ProjectPreview
          name="Project Dashboard"
          description="Project management app"
          bgColor="radial-gradient(
    ellipse at center,
   rgba(93, 254, 62, 0.15),
    rgba(255, 255, 255, 0)
  )"
          dark
        />
        <ProjectPreview
          name="Newsy App"
          description="News aggregator app"
          imageUrl="/project-2.png"
          bgColor="#171717"
          dark
        />
        <ProjectPreview
          name="Krypto"
          description="Analyze crypto currency"
          imageUrl="/project-3.png"
        />
      </section>
    </>
  );
}
