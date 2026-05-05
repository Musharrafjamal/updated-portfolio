import React from "react";
import { projects } from "./data";
import ProjectRow from "./ProjectRow";

const Work = () => {
  return (
    <section id="work" className="relative my-20 md:my-32">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <header className="mb-10 flex flex-col gap-6 border-b border-border pb-8 md:mb-14 md:flex-row md:items-end md:justify-between md:gap-8">
          <h2 className="font-moonWalk text-4xl font-bold leading-[1] tracking-tight md:text-6xl lg:text-7xl">
            Selected <span className="italic">work</span>
          </h2>
          <div className="max-w-sm text-sm text-muted-foreground md:text-right">
            <span className="mb-1 block font-merienda text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground/70">
              {String(projects.length).padStart(3, "0")} / Projects
            </span>
            Founder, creator and engineering work — links go to live products and source.
          </div>
        </header>

        <div>
          {projects.map((project, i) => (
            <ProjectRow
              key={project.slug}
              project={project}
              index={i}
              total={projects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
