import Image from "next/image";
import React from "react";
import styles from "./ProjectCard.module.css";
import arrowRight from "../../public/arrow-right-long.svg";

function ProjectCard({
  imgUrl,
  projectName,
  projectYear,
  description,
  finished,
  projectWidth,
  projectTag,
}) {
  return (
    <div className={styles["card-container"]}>
      <div
        style={{
          width: projectWidth,
        }}
        className={styles["image-container"]}
      >
        <Image
          src={imgUrl}
          alt={projectName}
          fill={true}
          className={styles["project-image"]}
          style={{ objectFit: "cover", width: "100%", borderRadius: "16px" }}
        />
        <div className={styles["project-description"]}>
          <div className={styles.top}>
            <p className={styles.year}> {projectYear} </p>
            {finished ? (
              <button className={styles["view-project"]}>
                {" "}
                View Project{" "}
                <span className={styles.arrow}>
                  {" "}
                  <Image src={arrowRight} alt="arrow-right" />{" "}
                </span>{" "}
              </button>
            ) : (
              <div className={styles["view-project"]}> Coming Soon </div>
            )}
          </div>
          <p className={styles["description"]}>{description}</p>
        </div>
      </div>
      <div className={styles["details"]}>
        <h4 className={styles["project-name"]}> {projectName} </h4>
        <div className={styles["tags"]}>
          {projectTag.map((tag) => {
            return (
              <div className={styles["under-lay"]} key={tag}>
                <p className={styles["tag"]}>{tag}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
