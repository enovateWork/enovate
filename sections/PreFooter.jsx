import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/PreFooter.module.css";
import vector from "../public/swiggly.png";
import arrowRight from "../public/arrow-right-gray.svg";
import { motion, easeInOut } from "framer-motion";
import { useRouter } from "next/router";

const PreFooter = () => {
  const [isHovered, setIsHovered] = useState(false);
  const route = useRouter();
  return (
    <>
      <div className={styles["vector-container"]}>
        <Image src={vector} alt="vector" className={styles.vector} />
      </div>
      <div className={styles["section-container"]}>
        <div className={styles["deliver-container"]}>
          <h4 className={styles.title}>We deliver what you need</h4>
          <motion.button
            animate={{
              gap: isHovered ? "12px" : 0,
              transition: { duration: 0.7, ease: easeInOut },
            }}
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={styles.btn}
            onClick={(e) => {
              e.preventDefault();
              route.push("/contact");
            }}
          >
            {" "}
            Let&rsquo;s work together{" "}
            <div className={styles.arrow}>
              {" "}
              <Image
                className={styles["arrow-svg"]}
                src={arrowRight}
                alt="arrow-right"
              />{" "}
            </div>{" "}
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default PreFooter;
