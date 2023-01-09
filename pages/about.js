import Image from "next/image";
import React from "react";
import Header from "../sections/Header";
import styles from "../styles/about.module.css";
import { teamMembers } from "../teamMembers";
import vector from "../public/swiggly.png";
import { useDispatch } from "react-redux";
import { dropDownAction } from "../redux/slice/dropDownSlice";
import HowWeWork from "../sections/HowWeWork.jsx";
import Footer from "../sections/Footer";

function About() {
  const dispatch = useDispatch();
  const closeDropDown = () => {
    dispatch(dropDownAction.close());
  };
  return (
    <>
      <Header />
      <div onClick={closeDropDown} className={styles["page-container"]}>
        <div className={styles.top}>
          <h3 className={styles["page-title"]}>About us</h3>
          <p className={styles["about-details"]}>
            Enovate is an agency that specializes in design and development of
            websites, web applications and mobile apps. Enovate is an agency
            that specializes in design and development of websites, web
            applications and mobile apps. Enovate is an agency that specializes
            in design and development of websites, web applications and mobile
            apps. Enovate is an agency that specializes in design and
            development of websites, web applications and mobile apps.
          </p>
        </div>
        <div className={styles["team-container"]}>
          <h3 className={styles.bandwagon}>A bandwagon of amazing people</h3>
          {teamMembers.map((member) => {
            return (
              <div className={styles["under-lay"]} key={member.id}>
                <div className={styles["member"]}>
                  <div className={styles["image-container"]}>
                    <Image
                      src={member.imgUrl}
                      alt={member.name}
                      className={styles["member-image"]}
                    />
                  </div>
                  <h4 className={styles.name}> {member.name} </h4>
                  <p className={styles.position}> {member.position} </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles["vector-container"]}>
          <Image src={vector} alt="vector" className={styles.vector} />
        </div>
        <HowWeWork />
        <Footer />
      </div>
    </>
  );
}

export default About;
