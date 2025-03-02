import React, { useState } from "react";
import Image from "next/image";

const works = [
  {
    title: "Slice",
    description: "This is a website I built for Fintech Startups to showcase their innovative solutions tailored to meet the evolving needs of their clients.",
    imageUrl: "/assets/images/slice.png",
    width: 1080,
    height: 720,
    gitHub: "https://github.com/Daniel264/horizon",
    link: "https://horizon-amber-zeta.vercel.app/",
    status: "Live",
    languages: ["Next.js", "Tailwind", "TypeScript"],
  },
  {
    title: "Foodland",
    description: "A company website showcasing Foodland's food offerings and providing easy contact options for customers",
    imageUrl: "/assets/images/foodland.png",
    width: 1080,
    height: 720,
    gitHub: "https://github.com/Daniel264/foodland",
    link: "",
    status: "Live",
    languages: ["React", "Tailwind", "TypeScript"],
  },
  {
    title: "SaveVest",
    description: "A full-stack Next.js and Node.js platform designed to help users save money efficiently with various tools.",
    imageUrl: "/assets/images/save.png",
    width: 1893,
    height: 969,
    gitHub: "",
    link: "",
    status: "inProgress",
    languages: ["Node.js", "Express", "MongoDB"],
  },
  {
    title: "GameHub",
    description: "A platform offering game recommendations, search functionality, and more for gamers.",
    imageUrl: "/assets/images/gamehub.png",
    width: 1080,
    height: 720,
    gitHub: "https://github.com/Daniel264/game-hub",
    link: "https://game-hub-eight-theta-95.vercel.app/",
    status: "Live",
    languages: ["React.js", "Chakra UI", "API"],
  },
  {
    title: "Horizon",
    description: "This is a website I built for Fintech Startups to showcase their innovative solutions tailored to meet the evolving needs of their clients.",
    imageUrl: "/assets/images/horiz.png",
    width: 1080,
    height: 720,
    gitHub: "https://github.com/Daniel264/horizon",
    link: "https://horizon-amber-zeta.vercel.app/",
    status: "Live",
    languages: ["Next.js", "Tailwind", "TypeScript"],
  },
];

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number>(0);

  return (
    <div id="portfolio" className="relative w-full px-[10%] py-12 text-white">
      {/* Selected Projects */}
      <div className="flex justify-between items-start gap-12">
        
        {/* Left side: Project Image */}
        <div
          className="relative w-[60%] h-[500px] overflow-hidden"
        >
          <div className="h-full w-full">
            <Image
              src={works[selectedProject].imageUrl}
              alt={works[selectedProject].title}
              width={works[selectedProject].width}
              height={works[selectedProject].height}
              priority
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right side: Project Names */}
        <div className="w-[30%] flex flex-col gap-6">
          <h3 className="uppercase text-lg tracking-wide">Selected Projects</h3>
          <div className="project-container">
            {works.map((project, index) => (
              <div
                key={index}
                onMouseEnter={() => setSelectedProject(index)}
                onMouseLeave={() => setSelectedProject(0)}
                className="project-item cursor-pointer p-2"
              >
                <h2 className="text-[2rem]">{project.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16">
        {/* Optional Description */}
        <div className="text-center text-lg">
          <p>
            Discover my work and explore the exciting projects I have built.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
