import React from "react";
import ExpertiseCard from "../components/ExpertiseCard/ExpertiseCard";
import styles from "../styles/expertise.module.css";
import Image from "next/image";
import gradient from "../public/Subtract.png";
import mSwiggly from "../public/mobile-swiggly.png";
import CarouselScroll from "../components/CarouselScroll";

function Expertise() {
  const expertiseList = [
    {
      id: "1",

      iconLink: "/brand_identity.svg",
      title: "Brand Identity Design",
      bgColor: "#92EBFF",
      descprition: `
        We provide a wide spectrum of media design such as creation of logotype, color palette and typography, social network materials, presentations, business cards, stationery, and many more. All that we can pack into the brand guidelines.`,
      projectImage: "/brand-design.png",
    },
    {
      id: "2",
      iconLink: "/product_design.svg",
      pushDown: true,
      title: "Product Design",
      bgColor: "#67FE9B",
      descprition:
        "We ensure the delivery of an industry-leading creative vision which provides consistency across UX. We incorporate clean, responsive aesthetics to facilitate seamless and engaging browsing experiences across all platforms & devices.",
      projectImage: "/product-design.png",
    },
    {
      id: "3",
      iconLink: "/web_design.svg",
      title: "Web Design",
      bgColor: "#8B98FF",
      descprition:
        "We ensure all aspects of creating a high performance website are effectively considered. We are much invested in creating an experience through a user friendly and lead-generating web design.",
      projectImage: "/web-design.png",
    },
    {
      id: "4",
      iconLink: "/web_dev.svg",
      title: "Web Application Development",
      bgColor: "#6DDBF3",
      pushDown: true,
      descprition:
        "We have an amazing team with a depth of knowledge and experience in developing and managing complex web applications and transactional platforms.",
      projectImage: "/web-dev.png",
    },
    {
      id: "5",
      iconLink: "/mobile_dev.svg",
      title: "Mobile Application Development",
      bgColor: "#54EA87",
      descprition:
        "We take your app idea, validate it, build it, test it, get reviews, iterate and launch your app successfully. We’d also provide a first-rate support all the way, be it IOS or Android app.",
      projectImage: "/mobile-dev.png",
    },
  ];
  const mappedItem = expertiseList.map((expertise, index) => (
    <ExpertiseCard
      key={index}
      id={expertise.id}
      iconUrl={expertise.iconLink}
      bgColor={expertise.bgColor}
      title={expertise.title}
      detail={expertise.descprition}
      projectImage={expertise.projectImage}
    />
  ));
  return (
    <>
      <div className={styles["section-container"]}>
        <div className={styles["section-details"]}>
          <h3 className={styles["section-title"]}>Our areas of expertise</h3>
          <p className={styles["section-subtitle"]}>
            {" "}
            We provide a full suite of creative design including illustrations,
            web design and app development services, with special care for
            mobile.{" "}
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
                projectImage={expertise.projectImage}
              />
            );
          })}
        </div>
        <div className={styles["mobile-cards"]}>
          <CarouselScroll>{mappedItem}</CarouselScroll>
        </div>
      </div>
      <div className={styles["gradient-container"]}>
        <Image
          src={gradient}
          alt="gradient"
          // width={2000}
          className={styles["swiggly"]}
          priority
        />
        <Image
          src={mSwiggly}
          alt="gradient"
          width={460}
          className={styles["mobile-swiggly"]}
        />
      </div>
    </>
  );
}

export default Expertise;
