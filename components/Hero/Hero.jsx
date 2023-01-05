import Image from "next/image";
import React from "react";
import styles from "../../styles/Hero.module.css";
import arrowRight from "../../public/arrow-right.svg";
import arrowBg from "../../public/Arrow_bg.svg";
import mouse from "../../public/mouse-solid.svg";
import star from "../../public/star.svg";

function Hero() {
  return (
    <div className={styles["hero-container"]}>
      <h4 className={styles["hero-title"]}>
        We create stunning and timeless experiences
      </h4>
      <h2 className={styles["hero-subtitle"]}>
        Enovate is an agency that specializes in design and development of
        websites, web applications and mobile apps.
      </h2>
      <button className={styles["hero-btn"]}>
        Let&#39;s create something together
        <span className={styles["arrow-container"]}>
          <Image src={arrowRight} alt="arrow-right" />
        </span>
      </button>
      <div className={styles["hero-bottom"]}>
        <div className={styles["bottom-text"]}>
          <p className={styles["get-fascinated"]}>
            {" "}
            Scroll down and get fascinated
          </p>
          <Image src={mouse} alt="mouse_svg" />
        </div>
        <div className={styles["star-container"]}>
          <Image src={star} alt="star" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
