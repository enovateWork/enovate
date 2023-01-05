import Image from "next/image";
import React from "react";
import styles from "../../styles/Header.module.css";
import logo from "../../public/LogoDescription.svg";
import exploreSVG from "../../public/explore.svg";
import Clock from "react-live-clock";

function Header() {
  return (
    <div className={styles["header-container-wrapper"]}>
      <div className={styles["header-container"]}>
        <div className={styles["left-section"]}>
          <div className={styles["enovate_logo_container"]}>
            <Image src={logo} alt="Enovate_Logo" />
          </div>
        </div>
        <div className={styles["right-section"]}>
          <div className={styles["local-time-container"]}>
            <h3 className={styles["local-time"]}>
              {" "}
              <span className={styles["time-gray"]}>Lagos, Nigeria</span> -{" "}
              <Clock format={"HH:mm"} timezone={"Africa/Lagos"} />{" "}
            </h3>
          </div>
          <div className={styles["explore-container"]}>
            <h3 className={styles.explore}> Explore </h3>
            <div className={styles["explore_svg_container"]}>
              <Image src={exploreSVG} alt="explore_svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
