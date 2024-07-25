export const gridItems = [
  {
    id: 1,
    title: "Passionné par le développement",
    description:
      " Je transforme vos idées en expériences fluides et innovantes. Mon objectif est de créer des sites web performants et élégants qui captivent et inspirent les utilisateurs. Découvrez mes travaux et laissez-moi vous aider à concrétiser vos projets!",
    className:
      "col-span-1 lg:col-span-2 h-full  md:min-h-[500px] lg:min-h-[300px]",
    imgClassName:
      "absolute -right-8 bottom-0 md:w-96 w-60  opacity-20 bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/Dialog.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 3,
    title: "Tech Stack",
    description: "Les technologies",
    className: "col-span-1 md:min-h-[300px]",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  // {
  //   id: 2,
  //   title: "Smain Rabhi",
  //   description: "Développeur ",
  //   className: "col-span-1 md:min-h-[300px] flex items-center",
  //   imgClassName:
  //     "opacity-10 h-full w-full  bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]",
  //   titleClassName: "justify-center md:max-w-full max-w-60 text-center",
  //   img: "/profile-pic 3.png",
  //   spareImg: "/grid.svg",
  // },
  // {
  //   id: 4,
  //   title: "Technophile passionné par le dévelopement",
  //   description: "",
  //   className: "lg:col-span-2 md:col-span-3 md:row-span-1",
  //   imgClassName: "",
  //   titleClassName: "justify-start",
  //   img: "/grid.svg",
  //   spareImg: "/b4.svg",
  // },

  {
    id: 6,
    title: "Vous voulez lancer votre projet?",
    description: "",
    className: "col-span-1 md:min-h-[300px]",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
  {
    id: 5,
    title: "Actuellement en train de développer un SaaS IA",
    description: "Projet en cours",
    className:
      "col-span-1 lg:col-span-2 h-full  md:min-h-[500px] lg:min-h-[300px]",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
];

export const projects = [
  {
    id: 1,
    title: "Kawamel Vente de Café en Ligne",
    des: "Kawamel offre une sélection de cafés grains torréfiés avec soin, pour une expérience gustative exceptionnelle chez vous.",
    img: "/Kawamel-1.webp",
    iconLists: [
      "/wordpress.svg",
      "/woo.svg",
      "/php.svg",
      "/ovh.svg",
      "/figma.svg",
    ],
    link: "https://kawamel-cafe.fr",
    linkTitle: "KawamelCafé",
  },
  {
    id: 2,
    title: "Techno Gatsby application blog",
    des: "Une application web de blog, qui décrypte des sujets d'actualité liés au monde de la tech et de la géopolitique",
    img: "/technogatsby.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/supabase.svg",
      "/fm.svg",
    ],
    link: "",
    linkTitle: "Prochainement...",
  },
  {
    id: 3,
    title: "Technisourcing - Sous traitance industriel",
    des: "TechniSourcing assure à ses clients une sous-traitance Europe de l'Est de très haut niveau technologique en chaudronnerie, équipements inox, mécano-soudure ...",
    img: "/technisourcing.webp",
    iconLists: [
      "/wordpress.svg",
      "/php.svg",
      "/js.svg",
      "/elementor.svg",
      "/figma.svg",
    ],
    link: "https://technisourcing.com",
    linkTitle: "Technisourcing",
  },
  {
    id: 4,
    title: "Nepsod - Centre de Formation",
    des: "Nepsod accompagne ses apprenants dans leur intégration vers leur projet professionnel et les guider dans une démarche active de retour à l’emploi !",
    img: "/nepsod.png",
    iconLists: [
      "/wordpress.svg",
      "/elementor.svg",
      "/php.svg",
      "/js.svg",
      "/figma.svg",
    ],
    link: "https://www.nepsod.com",
    linkTitle: "Nepsod",
  },
  {
    id: 5,
    title: "ACJ - Apprendre Chaque Jour",
    des: "ACJ est une plateforme qui permet d'apprendre et de partager chaque jour des informations captivantes avec une communauté passionnée.",
    img: "/acj.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/supabase.svg",
      "/fm.svg",
    ],
    linkTitle: "Prochainement...",
  },
];

export const navItems = [
  { name: "A Propos", link: "#about" },
  { name: "Projets", link: "#projects" },
  { name: "Témoignages", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const workExperience = [
  {
    id: 1,
    title: "Développeur Front-End - Logos Pro",
    desc: "Optimisation et maintenance du site web, création et intégration de plugin Wordpress. Modification interface utilisateur d'une application web interne.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Développeur Web - Label & Prod",
    desc: "Développement, intégration, mise à jour et maintenance de site web. Formation d'utilisateurs finaux.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },

  {
    id: 3,
    title: "Développeur Full-Stack - DoctoSwiss",
    desc: "Développement et maintenance de fonctionnalités d' une plateforme à l'aide de technologies Back-end et Front-end modernes.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 4,
    title: "Développeur Freelance",
    desc: "Dirige le développement d'application et site web pour un client, du concept initial au déploiement en ligne.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Sma-source",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://github.com/Sma-source",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://fr.linkedin.com/in/sma%C3%AFn-rabhi",
  },
];
