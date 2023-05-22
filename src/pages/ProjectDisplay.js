import React from "react";
import { useParams } from "react-router-dom";
import { projectList } from "../helpers/ProjectList";
import { BsGithub } from "react-icons/bs";
import { VscCode, VscGlobe } from "react-icons/vsc";
import "../Styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = projectList[id];
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <div className="projectLinks">
        <a href={project.sourceCodeLink} title="Source Code" target="_blank">
          <VscCode />
        </a>
        {project.deployedLink != "" && (
          <a href={project.deployedLink} title="Try It Out" target="_blank">
            <VscGlobe />
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectDisplay;
