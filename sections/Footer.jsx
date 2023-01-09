import styles from "../styles/Footer.module.css";

import React from "react";
import Image from "next/image";
import enovateLogo from "../public/enovate_logo.svg";
import star from "../public/star3.svg";
import mail from "../public/mail.svg";
import call from "../public/call.svg";
import arrowWhite from "../public/arrow-right-white.svg";
import Link from "next/link";

function Footer() {
  return (
    <>
      <div className={styles["section-container"]}>
        <div className={styles["footer-container"]}>
          <div className={styles.top}>
            <Link href="/" className={styles["top-left"]}>
              <Image src={enovateLogo} alt="enovate_logo" />
              <p className={styles["logo-description"]}>
                A modern agency focused on giving your clients the best
                experience.
              </p>
            </Link>
            <div className={styles["top-right"]}>
              <Image src={star} alt="star" />
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles["contact"]}>
              <button className={styles["contact-btn"]}>
                Let&rsquo;s work together{" "}
                <span className={styles.arrow}>
                  {" "}
                  <Image src={arrowWhite} alt="arrow" />{" "}
                </span>
              </button>
              <p className={styles["contact-text"]}>
                You don&rsquo;t like the form? Reach out to us via email or call
              </p>
              <p className={styles["contact-text"]}>
                {" "}
                <span>
                  {" "}
                  <Image src={mail} alt="mail" />{" "}
                </span>{" "}
                hello@enovate.work{" "}
              </p>
              <p
                style={{ marginTop: "16px" }}
                className={styles["contact-text"]}
              >
                {" "}
                <span>
                  {" "}
                  <Image src={call} alt="call" />{" "}
                </span>{" "}
                +234-916-3796-328{" "}
              </p>
            </div>
            <div className={styles["location"]}>
              <p className={styles["location-title"]}> We&rsquo;re Remote! </p>
              <p className={styles["location-detail"]}>
                {" "}
                Flexibility is important for great work. We let our team members
                integrate work into their personal lives.{" "}
              </p>
            </div>
            <div className={styles["links"]}>
              <p className={styles["location-title"]}>Explore </p>
              <ul className={styles["footer-links"]}>
                <li className={styles.link}>
                  {" "}
                  <Link href="/about">About</Link>{" "}
                </li>
                <li className={styles.link}>
                  {" "}
                  <Link href="/contact-us">Contact</Link>{" "}
                </li>
                <li
                  style={{ color: "#767676", fontWeight: 400 }}
                  className={styles.link}
                >
                  {" "}
                  <Link href="/blog-posts">Blog</Link>{" "}
                </li>
                <li
                  style={{ color: "#767676", fontWeight: 400 }}
                  className={styles.link}
                >
                  {" "}
                  <Link href="/success-stories">Success</Link>{" "}
                </li>
              </ul>
            </div>
            <div className={styles["socials"]}>
              <p className={styles["location-title"]}>Follow us </p>
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
          <div className={styles["copyright-section"]}>
            <p className={styles.copyright}>
              {" "}
              © Enovate 2023. All rights reserved.{" "}
              <span className={styles["privacy-policy"]}>
                {" "}
                <Link href="">Privacy Policy</Link>{" "}
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
