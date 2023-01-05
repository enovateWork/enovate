import React from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import styles from "../styles/Projects.module.css";
import { projects } from "../projects";

function Projects() {
  return (
    <div className={styles["section-container"]}>
      <div className={styles["section-details"]}>
        <h3 className={styles["section-title"]}>Projects we are proud of</h3>
        <p className={styles["section-subtitle"]}>
          {" "}
          Enovate is an agency that specializes in design and development of
          websites, web applications and mobile apps.{" "}
        </p>
      </div>
      <div className={styles["project-container"]}>
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project._id}
              imgUrl={project.imgUrl}
              finished={project.finished}
              description={project.description}
              projectName={project.name}
              projectYear={project.year}
              projectWidth={project.width}
              projectTag={project.tags}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
