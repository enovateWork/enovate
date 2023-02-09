import React, { useState } from "react";
import styles from "./Dropdown.module.css";
import close from "../../public/close.svg";
import Image from "next/image";
import Link from "next/link";
import arrowRight from "../../public/arrow_right_white.svg";
import { useDispatch } from "react-redux";
import { dropDownAction } from "../../redux/slice/dropDownSlice";

const Dropdown = () => {
  const dispatch = useDispatch();
  const closeDropDown = () => {
    dispatch(dropDownAction.toggle());
  };
  return (
    <>
      <div className={styles["dropdown-wrapper"]}>
        <div className={styles["dropdown-container"]}>
          <div className={styles["top"]}>
            <p className={styles.explore}> Explore </p>
            <div onClick={closeDropDown} className={styles["control-center"]}>
              <p className={styles.close}>close</p>
              <Image
                className={styles["close-icon"]}
                src={close}
                alt="close_btn"
              />
            </div>
          </div>
          <div className={styles.links}>
            <ul className={styles["footer-links"]}>
              <li className={styles.link}>
                {" "}
                <Link href="/" onClick={closeDropDown}>
                  Home
                </Link>{" "}
              </li>
              <li className={styles.link}>
                {" "}
                <Link href="/about" onClick={closeDropDown}>
                  About
                </Link>{" "}
              </li>
              <li className={styles.link}>
                {" "}
                <Link href="/contact" onClick={closeDropDown}>
                  Contact
                </Link>{" "}
              </li>
              <li
                style={{ color: "#767676", fontWeight: 400 }}
                className={`${styles.link} ${styles.inactive}`}
              >
                {" "}
                <Link href="" onClick={(e) => e.preventDefault()}>
                  Blog
                </Link>{" "}
              </li>
              <li
                style={{ color: "#767676", fontWeight: 400 }}
                className={`${styles.link} ${styles.inactive}`}
              >
                {" "}
                <Link href="" onClick={(e) => e.preventDefault()}>
                  Success
                </Link>{" "}
              </li>
            </ul>
          </div>
          <div className={styles.bottom}>
            <button className={styles.btn}>
              Let&rsquo;s work together{" "}
              <Image
                src={arrowRight}
                alt="arrow"
                style={{ marginLeft: "10px" }}
              />{" "}
            </button>
            <div className={styles.socials}>
              <ul className={styles["footer-links"]}>
                <li className={styles["socials-link"]}>
                  {" "}
                  <Link href="/about-us">Instagram</Link>{" "}
                </li>
                <li className={styles["socials-link"]}>
                  {" "}
                  <Link href="/about-us">Twitter</Link>{" "}
                </li>
                <li className={styles["socials-link"]}>
                  {" "}
                  <Link href="/about-us">LinkedIn</Link>{" "}
                </li>
                <li className={styles["socials-link"]}>
                  {" "}
                  <Link href="/about-us">Behance</Link>{" "}
                </li>
                <li className={styles["socials-link"]}>
                  {" "}
                  <Link href="/about-us">Dribbble</Link>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
