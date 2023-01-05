import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/Header.module.css";
import logo from "../public/LogoDescription.svg";
import exploreSVG from "../public/explore.svg";
import exploreWhiteSVG from "../public/explore_white.svg";
import Clock from "react-live-clock";

function Header() {
  const [exploreBackground, setExploreBackground] = useState(false);
  return (
    <div className={styles["header-container-wrapper"]}>
      <div className={styles["header-container"]}>
        <div className={styles["left-section"]}>
          <div className={styles["enovate_logo_container"]}>
            <Image src={logo} alt="Enovate_Logo" />
          </div>
        </div>
        <div className={styles["right-section"]}>
          {/* <div className={styles["local-time-container"]}>
            <h3 className={styles["local-time"]}>
              {" "}
              <span className={styles["time-gray"]}>Lagos, Nigeria</span> -{" "}
              <Clock format={"HH:mm"} timezone={"Africa/Lagos"} />{" "}
            </h3>
          </div> */}
          <div
            onMouseOver={() => {
              setExploreBackground(true);
            }}
            className={styles["explore-container"]}
            onMouseLeave={() => setExploreBackground(false)}
          >
            <h3 className={styles.explore}> Explore </h3>
            {exploreBackground ? (
              <div className={styles["explore_white_container"]}>
                {" "}
                <Image src={exploreWhiteSVG} alt="explore_svg" />{" "}
              </div>
            ) : (
              <div className={styles["explore_svg_container"]}>
                <Image src={exploreSVG} alt="explore_svg" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
