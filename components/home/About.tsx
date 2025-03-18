import { Award, Laptop, PersonStanding, SmilePlus, Swords } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mt-10 font-moonWalk flex items-center justify-center gap-2">
        <SmilePlus size={30} />
        About
        <SmilePlus size={30} style={{ transform: "scaleX(-1)" }} />
      </h2>
    </div>
  );
};

export default About;
