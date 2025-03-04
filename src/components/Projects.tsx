import React, { useState } from "react";
import Image from "next/image";

const works = [
  {
    title: "Threshold Timelock Oracle ",
    description: "A secure, decentralized, and time-locked signing oracle using VDFs and threshold BLS signatures",
    imageUrl: "/assets/images/slice.png",
    width: 1080,
    height: 720,
    gitHub: "https://github.com/iman158/Threshold-Timelock-Oracle",
    status: "Live",
    languages: ["Python"],
  },
  {
    title: "Honeypot",
    description: "Honeypot script that uses the scapy library to mimic a vulnerable service and gather information about attackers.",
    imageUrl: "/assets/images/foodland.png",
    width: 1080,
    height: 720,
    gitHub: "https://github.com/iman158/Honeypot",
    link: "",
    status: "Live",
    languages: ["Python"],
  },
  {
    title: "Packet Sniffer",
    description: "This Python script utilizes Scapy and pandas libraries to sniff TCP packets and filter based on source or destination IP addresses starting with 192.168. The filtered packet data is then stored in an Excel file for further analysis.",
    imageUrl: "/assets/images/save.png",
    width: 1893,
    height: 969,
    gitHub: "https://github.com/iman158/Packet_sniffer",
    link: "",
    status: "Live",
    languages: ["Python"],
  },
  {
    title: "Python Reverse Shell",
    description: "This Python script demonstrates shellcode execution using Python's subprocess module. It includes functions for executing shellcode and reverse engineering shellcode into a Python function.",
    imageUrl: "/assets/images/gamehub.png",
    width: 1080,
    height: 720,
    gitHub: "https://github.com/iman158/Python_reverse_shell",
    link: "",
    status: "Live",
    languages: ["Python"],
  },
  {
    title: "Gravity",
    description: "Explore the fascinating world of particle physics with this Python simulation using Pygame. This interactive program generates a dynamic system of particles influenced by gravitational forces, providing users with a visual representation of celestial bodies' motion. ",
    imageUrl: "/assets/images/horiz.png",
    width: 1080,
    height: 720,
    gitHub: "https://github.com/iman158/gravity_",
    link: "",
    status: "Live",
    languages: ["Python"],
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
