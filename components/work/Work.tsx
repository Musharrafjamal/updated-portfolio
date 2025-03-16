import React from "react";
import { FadeIn } from "../ui/animations/FadeIn";
import { BicepsFlexed } from "lucide-react";
import WorkCard from "./WorkCard";

const Work = () => {
  const work = [
    {
      image: "/mockups/dozit.png",
      title: "Dozit",
      description: "Provider market place!",
      link: "https://dozit.in",
      color: "#FFE569",
    },
    {
      image: "/mockups/ridhi-suman-fabrics.png",
      title: "Ridhi Suman Fabrics",
      description: "E-commerce store",
      link: "https://www.ridhisumanfabrics.com",
      color: "#AEEA94",
    },
    {
      image: "/mockups/chatfolio.png",
      title: "Chatfolio",
      description: "Ai chat saver chrome extension",
      link: "https://chatfolio-livid.vercel.app",
      color: "#C5BAFF",
    },
  ];
  return (
    <FadeIn direction="down">
      <div className="flex flex-col min-h-screen gap-10">
        <h2 className="text-4xl font-bold text-center mt-10 font-moonWalk flex items-center justify-center gap-2">
          <BicepsFlexed size={30} />
          Work
          <BicepsFlexed size={30} style={{ transform: "scaleX(-1)" }} />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-10">
          {work.map((item) => (
            <WorkCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </FadeIn>
  );
};

export default Work;
