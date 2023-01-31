import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/Header.module.css";
import logo from "../public/LogoDescription.svg";
import exploreSVG from "../public/explore.svg";
import exploreWhiteSVG from "../public/explore_white.svg";
import Dropdown from "../components/Dropdown/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { dropDownAction } from "../redux/slice/dropDownSlice";
import Link from "next/link";

function Header() {
  const [exploreBackground, setExploreBackground] = useState(false);
  const dispatch = useDispatch();
  const toggleDropDown = () => {
    dispatch(dropDownAction.toggle());
  };
  const displayDropDown = useSelector(
    (state) => state.dropDown.dropDownVisible
  );
  return (
    <>
      <div className={styles["header-container-wrapper"]}>
        <div className={styles["header-container"]}>
          <div className={styles["left-section"]}>
            <Link href="/" className={styles["enovate_logo_container"]}>
              <Image src={logo} alt="Enovate_Logo" />
            </Link>
          </div>
          <div className={styles["right-section"]}>
            <div
              onMouseOver={() => {
                setExploreBackground(true);
              }}
              className={styles["explore-container"]}
              onMouseLeave={() => setExploreBackground(false)}
              onClick={toggleDropDown}
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
        {displayDropDown && <Dropdown />}
      </div>
    </>
  );
}

export default Header;
