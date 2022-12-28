import Image from "next/image";
import React from "react";
import styles from "./ExpertiseCard.module.css";

function ExpertiseCard({ id, iconUrl, title, detail, bgColor, pushDown }) {
  return (
    <div
      style={{ marginTop: pushDown === true ? 100 : 0 }}
      className={styles["card-container"]}
    >
      <div
        style={{
          width: 204,
          height: 300,
          backgroundColor: bgColor,
          borderRadius: 8,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image src={iconUrl} alt={title} width={48} height={48} />
      </div>
      <div className={styles["card-details"]}>
        <h3 className={styles["expertise-title"]}> {title} </h3>
        <p className={styles["expertise-details"]}> {detail} </p>
      </div>
    </div>
  );
}

export default ExpertiseCard;
