import React from "react";
import { FadeIn } from "../ui/animations/FadeIn";
import { BicepsFlexed } from "lucide-react";
import WorkCard from "./WorkCard";

const Work = () => {
  const work = [
    {
      image: "https://i.pinimg.com/736x/fd/bc/cb/fdbccb89069cf44acb5ccb8194f073e1.jpg",
      title: "Work 1",
      description: "Work 1 description",
      link: "https://www.google.com",
    },
  ];
  return (
    <FadeIn direction="down">
      <div className="flex flex-col min-h-screen">
        <h2 className="text-4xl font-bold text-center mt-10 font-moonWalk flex items-center justify-center gap-2">
          <BicepsFlexed size={30} />
          Work
          <BicepsFlexed size={30} style={{ transform: "scaleX(-1)" }} />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {work.map((item) => (
            <WorkCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </FadeIn>
  );
};

export default Work;
