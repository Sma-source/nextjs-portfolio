import React from "react";
import { CardStack } from "./ui/CardStack";
import { cn } from "@/utils/cn";

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold  bg-emerald-700/[0.2] text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Kamel Barrouche",
    designation: "Dirigeant Kawamel",
    content: (
      <p>
        Je suis ravi du travail accompli pour la{" "}
        <Highlight>conception de ma boutique en ligne.</Highlight> Service
        professionnel et résultat à la hauteur de mes attentes, merci beaucoup !
        🙏
      </p>
    ),
  },
  {
    id: 1,
    name: "Claire",
    designation: "Cheffe de projet, Label&Prod",
    content: (
      <p>
        Collaborer avec Smaïn a été un réel plaisir. En tant que cheffe de
        projet, j'ai particulièrement apprécié son
        <Highlight> écoute attentive et sa réactivité.</Highlight> Le projet
        s'est bien déroulé et le résultat final est remarquable. Je recommande
        vivement Smaïn pour ses{" "}
        <Highlight>compétences et son sérieux.</Highlight>
      </p>
    ),
  },
  {
    id: 2,
    name: "Thomas Collombet",
    designation: "Développeur, Agence KN",
    content: (
      <p>
        The first rule of
        <Highlight>Fight Club</Highlight> is that you do not talk about fight
        club. The second rule of
        <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
        club.
      </p>
    ),
  },
  {
    id: 3,
    name: "Norvan Derderian",
    designation: "Coach Sportif",
    content: (
      <p>
        Je suis très satisfait du travail de
        <Highlight>Smaïn</Highlight> pour la création de mon site web. Il a su
        comprendre mes besoins, la collaboration a été fluide et le résultat
        final est <Highlight>excellent!</Highlight>
      </p>
    ),
  },
  {
    id: 4,
    name: "L Mua",
    designation: "Maquilleuse",
    content: (
      <p>
        Un travail de qualité et une aide très précieuse. Je recommande
        vivement! 😊
      </p>
    ),
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 w-full">
      <h1 className="heading text-neutral-200">
        Des mots doux de
        <span className="text-purple"> Clients satisfaits</span>
      </h1>
      <div className="flex flex-col items-center mt-16">
        <CardStack items={CARDS} />
      </div>
    </section>
  );
};

export default Testimonials;
