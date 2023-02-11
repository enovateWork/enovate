import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/Hero.module.css";
import arrowRight from "../public/arrow-right-gray.svg";
import mouse from "../public/mouse-solid.svg";
import star from "../public/star.svg";
import { easeInOut, motion } from "framer-motion";
import { useRouter } from "next/router";

function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const route = useRouter();
  return (
    <div className={styles["hero-container"]}>
      <h4 className={styles["hero-title"]}>
        We create stunning and timeless experiences
      </h4>
      <h2 className={styles["hero-subtitle"]}>
        We’re Enovate, more than just an agency, we specialize in creative
        design and development of websites, web applications and mobile apps.
      </h2>
      <motion.button
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{
          gap: isHovered ? "12px" : 0,
          transition: { duration: 0.7, ease: easeInOut },
        }}
        className={styles["hero-btn"]}
        onClick={(e) => {
          e.preventDefault();
          route.push("/contact");
        }}
      >
        Let&#39;s create something together
        <div className={styles["arrow-container"]}>
          <Image
            className={styles["arrow-svg"]}
            src={arrowRight}
            alt="arrow-right"
          />
        </div>
      </motion.button>
      <div className={styles["hero-bottom"]}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20 }}
          className={styles["star-container"]}
        >
          <Image className={styles["hero-star"]} src={star} alt="star" />
        </motion.div>
        <motion.div
          animate={{ opacity: 0.5 }}
          transition={{
            duration: 5,
            delay: 0.1,
            repeat: Infinity,
            ease: easeInOut,
          }}
          className={styles["bottom-text"]}
        >
          <p className={styles["get-fascinated"]}>
            {" "}
            Scroll down and get fascinated
          </p>
          <Image src={mouse} alt="mouse_svg" />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
