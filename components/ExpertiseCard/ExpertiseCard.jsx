import Image from "next/image";
import React, { useState } from "react";
import styles from "./ExpertiseCard.module.css";
import { motion } from "framer-motion";

function ExpertiseCard({
  id,
  iconUrl,
  title,
  detail,
  bgColor,
  pushDown,
  projectImage,
}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      style={{ marginTop: pushDown === true ? 100 : 0 }}
      className={styles["card-container"]}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ position: "relative" }}>
        <motion.div
          animate={{ opacity: isHovered ? 0 : 1 }}
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            transition: { type: "tween", duration: 0.8 },
          }}
          style={{ position: "absolute", top: 0 }}
        >
          <Image src={projectImage} alt={title} width={204} height={300} />
        </motion.div>
      </div>
      <div className={styles["card-details"]}>
        <h3 className={styles["expertise-title"]}> {title} </h3>
        <p className={styles["expertise-details"]}> {detail} </p>
      </div>
    </div>
  );
}

export default ExpertiseCard;
