import React from "react";
import "../Styles/Projects.css";
import ProjectItem from "../components/ProjectItem";
import { projectList } from "../helpers/ProjectList";

function projects() {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {projectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>
    </div>
  );
}

export default projects;
