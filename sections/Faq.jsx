import styles from "../styles/Faq.module.css";
import React, { useState } from "react";
import { faq } from "../faq";
import Image from "next/image";
import plus from "../public/plus.svg";
import chat from "../public/chat.svg";
import arrowRight from "../public/arrow-right-gray.svg";

function Faq() {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className={styles["section-container"]}>
      <h4 className={styles["section-title"]}>Frequently asked questions</h4>
      <div className={styles["faq-content"]}>
        <div className={styles["left-section"]}>
          {faq.map((item) => {
            return (
              <div key={item.id} className={styles["faq-container"]}>
                <div className={styles["question-top"]}>
                  <p className={styles["question"]}>{item.question}</p>
                  <Image
                    src={plus}
                    alt="plus"
                    onClick={() => setShowAnswer(!showAnswer)}
                  />
                </div>
                <p className={styles.answer}> {showAnswer && item.answer} </p>
              </div>
            );
          })}
        </div>
        <div className={styles["right-section"]}>
          <Image src={chat} alt="chat-svg" />
          <h4 className={styles["have-question"]}>
            Do you have any more questions?
          </h4>
          <p className={styles["details"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            lacus dignissim lacus, sed feugiat dui odio.{" "}
          </p>
          <button className={styles["email-btn"]}>
            Shoot us an mail{" "}
            <span className={styles["arrow-right"]}>
              {" "}
              <Image src={arrowRight} alt="arrow-right" />{" "}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Faq;
