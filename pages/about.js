import Image from "next/image";
import React, { useState } from "react";
import Header from "../sections/Header";
import styles from "../styles/about.module.css";
import { teamMembers } from "../teamMembers";
import vector from "../public/swiggly.png";
import { useDispatch } from "react-redux";
import { dropDownAction } from "../redux/slice/dropDownSlice";
import HowWeWork from "../sections/HowWeWork.jsx";
import Footer from "../sections/Footer";
import MemberCard from "../components/MemberCard/memberCard";

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
        <h3 className={styles.bandwagon}>A bandwagon of amazing people</h3>
        <div className={styles["team-container"]}>
          {teamMembers.map((member) => {
            return (
              <MemberCard
                id={member.id}
                name={member.name}
                key={member.id}
                imgUrl={member.imgUrl}
                position={member.position}
              />
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
