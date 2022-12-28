import React from "react";
import ExpertiseCard from "../components/ExpertiseCard/ExpertiseCard";
import styles from "../styles/expertise.module.css";
import Image from "next/image";
import gradient from "../public/Subtract.png";
import star1 from "../public/star1.svg";
import star2 from "../public/star2.svg";
import star3 from "../public/star3.svg";

function Expertise() {
  const expertiseList = [
    {
      id: "1",

      iconLink: "/brand_identity.svg",
      title: "Brand Identity Design",
      bgColor: "#92EBFF",
      descprition:
        "Enovate is an agency that specia lizes in design and development of websites, web applications and mobile apps.",
    },
    {
      id: "2",
      iconLink: "/product_design.svg",
      pushDown: true,
      title: "Product Design",
      bgColor: "#67FE9B",
      descprition:
        "Enovate is an agency that specia lizes in design and development of websites, web applications and mobile apps.",
    },
    {
      id: "3",
      iconLink: "/web_design.svg",
      title: "Web Design",
      bgColor: "#8B98FF",
      descprition:
        "Enovate is an agency that specia lizes in design and development of websites, web applications and mobile apps.",
    },
    {
      id: "4",
      iconLink: "/web_dev.svg",
      title: "Web Application Development",
      bgColor: "#6DDBF3",
      pushDown: true,
      descprition:
        "Enovate is an agency that specia lizes in design and development of websites, web applications and mobile apps.",
    },
    {
      id: "5",
      iconLink: "/mobile_dev.svg",
      title: "Mobile Application Development",
      bgColor: "#54EA87",
      descprition:
        "Enovate is an agency that specia lizes in design and development of websites, web applications and mobile apps.",
    },
  ];
  return (
    <>
      <div className={styles["section-container"]}>
        <div className={styles["section-details"]}>
          <h3 className={styles["section-title"]}>Our areas of expertise</h3>
          <p className={styles["section-subtitle"]}>
            {" "}
            Enovate is an agency that specializes in design and development of
            websites, web applications and mobile apps.{" "}
          </p>
        </div>
        <div className={styles["cards"]}>
          {expertiseList.map((expertise) => {
            return (
              <ExpertiseCard
                key={expertise.id}
                id={expertise.id}
                pushDown={expertise.pushDown}
                iconUrl={expertise.iconLink}
                bgColor={expertise.bgColor}
                title={expertise.title}
                detail={expertise.descprition}
              />
            );
          })}
        </div>
      </div>
      <div className={styles["gradient-container"]}>
        <Image src={gradient} alt="gradient" width={1280} />
        <div className={styles["star_1"]}>
          <Image src={star1} alt="star_1" />
        </div>
        <div className={styles["star_2"]}>
          <Image src={star2} alt="star_2" />
        </div>
        <div className={styles["star_3"]}>
          <Image src={star3} alt="star_3" />
        </div>
      </div>
    </>
  );
}

export default Expertise;
