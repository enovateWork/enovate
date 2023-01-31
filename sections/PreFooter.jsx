import React from "react";
import Image from "next/image";
import styles from "../styles/PreFooter.module.css";
import vector from "../public/swiggly.png";
import arrowRight from "../public/arrow-right-gray.svg";

const PreFooter = () => {
  return (
    <>
      <div className={styles["vector-container"]}>
        <Image src={vector} alt="vector" className={styles.vector} />
      </div>
      <div className={styles["section-container"]}>
        <div className={styles["deliver-container"]}>
          <h4 className={styles.title}>We deliver what you need</h4>
          <button className={styles.btn}>
            {" "}
            Let&rsquo;s work together{" "}
            <span className={styles.arrow}>
              {" "}
              <Image src={arrowRight} alt="arrow-right" />{" "}
            </span>{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default PreFooter;
