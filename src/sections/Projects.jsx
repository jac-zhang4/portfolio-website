import React from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";

const Projects = () => {
  return (
    <section className="c-space section-spacing" id="projects">
      <h2 className="text-heading">Selected Projects</h2>
      <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
        {myProjects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
