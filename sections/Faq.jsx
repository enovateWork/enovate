import styles from "../styles/Faq.module.css";
import React, { useState } from "react";
import { faq } from "../faq";
import Image from "next/image";
import plus from "../public/plus.svg";
import minus from "../public/minus.svg";
import chat from "../public/chat.svg";
import arrowRight from "../public/arrow-right-gray.svg";

function Faq() {
  const [showAnswer, setShowAnswer] = useState({});
  const toggleAnswer = (id) => {
    setShowAnswer({
      //   ...showAnswer,
      [id]: !showAnswer[id],
    });
  };
  return (
    <div className={styles["section-container"]}>
      <h4 className={styles["section-title"]}>Frequently asked questions</h4>
      <div className={styles["faq-content"]}>
        <div className={styles["left-section"]}>
          {faq.map((item) => {
            return (
              <div
                key={item.id}
                className={styles["faq-container"]}
                onClick={() => toggleAnswer(item.id)}
              >
                <div className={styles["question-top"]}>
                  <p className={styles["question"]}>{item.question}</p>
                  {showAnswer[item.id] ? (
                    <Image src={minus} alt="minus" />
                  ) : (
                    <Image src={plus} alt="plus" />
                  )}
                </div>
                <p className={styles.answer}>
                  {" "}
                  {showAnswer[item.id] && item.answer}{" "}
                </p>
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
            Shoot us an email{" "}
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
