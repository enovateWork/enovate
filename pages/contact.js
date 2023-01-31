import Image from "next/image";
import React, { useState } from "react";
import Footer from "../sections/Footer";
import Header from "../sections/Header";
import styles from "../styles/contact.module.css";
import arrowRight from "../public/arrow-right-gray.svg";
import star1 from "../public/star1.svg";
import star3 from "../public/star3.svg";
import arrowWhite from "../public/arrow-right-white.svg";
import {
  dollarsCharges,
  foundOptions,
  nairaCharges,
  workOptions,
} from "../formData";

const Contact = () => {
  const [checkedDollars, setCheckedDollars] = useState(true);
  const [checkedNaira, setCheckedNaira] = useState(false);
  const [formDetails, setFormDetails] = useState({
    name: "",
    company: "",
    found: "",
    work: "",
    budget: "",
    email: "",
    projectDetails: "",
  });
  const toggleDollar = () => {
    setCheckedDollars(false);
    setCheckedNaira(true);
  };
  const toggleNaira = () => {
    setCheckedDollars(true);
    setCheckedNaira(false);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formDetails);
  };
  return (
    <>
      <Header />
      <div className={styles["page-container"]}>
        <div className={styles.top}>
          <Image src={star1} alt="star1" />
          <div className={styles["section-title"]}>
            Let’s make it work <span className={styles.together}>together</span>
          </div>
          <Image src={star3} alt="star3" />
        </div>
        <form onSubmit={handleSubmit} className={styles["form-container"]}>
          <div className={styles["top-input"]}>
            <div className={styles["name-container"]}>
              <p className={styles.text}>Hi, My name is </p>
              <input
                className={styles["text-input"]}
                placeholder="Type your name*"
                name="name"
                onChange={handleChange}
                value={formDetails.name}
                required
              />
            </div>
            <div className={styles["company-container"]}>
              <p className={styles.text}>and I currently work in </p>
              <input
                className={styles["text-input"]}
                placeholder="Type your company's name*"
                name="company"
                value={formDetails.company}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className={styles["found-container"]}>
            <p className={styles.text}>I found Enovate agency using </p>
            {foundOptions.map((found) => {
              return (
                <div className={styles.found} key={found.name}>
                  <input
                    className={styles.radio}
                    type="radio"
                    name="found"
                    id={found.id}
                    value={found.name}
                    onChange={handleChange}
                  />
                  <label htmlFor={found.id} className={styles.label}>
                    {" "}
                    {found.name}{" "}
                  </label>
                </div>
              );
            })}
          </div>
          <div className={styles["work-container"]}>
            <p className={styles.text}> I am looking for help with </p>
            <div className={styles.works}>
              {workOptions.map((work) => {
                return (
                  <div className={styles.work} key={work.name}>
                    <input
                      className={styles.radio}
                      type="radio"
                      name="work"
                      value={work.name}
                      onChange={handleChange}
                      id={work.id}
                    />
                    <label htmlFor={work.id} className={styles.label}>
                      {" "}
                      {work.name}{" "}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles["budget-container"]}>
            <p className={styles.text}> My budget is around</p>
            <div className={styles["under-lay"]}>
              <div className={styles["currency-control"]}>
                <div className={styles.dollars}>
                  <div
                    style={
                      checkedDollars === true
                        ? { backgroundColor: "#000000" }
                        : null
                    }
                    className={styles.selector}
                    onClick={toggleNaira}
                  ></div>
                  <p className={styles.currency}> $ </p>
                </div>
                <div className={styles.naira}>
                  <div
                    style={
                      checkedNaira === true
                        ? { backgroundColor: "#000000" }
                        : null
                    }
                    className={styles.selector}
                    onClick={toggleDollar}
                  ></div>
                  <p className={styles.currency}> ₦ </p>
                </div>
              </div>
            </div>
            <div className={styles["amount-container"]}>
              {checkedDollars === true
                ? dollarsCharges.map((charge) => {
                    return (
                      <div className={styles.found} key={charge.id}>
                        <input
                          className={styles.radio}
                          type="radio"
                          name="budget"
                          onChange={handleChange}
                          value={charge.amount}
                          id={charge.id}
                        />
                        <label htmlFor={charge.id} className={styles.label}>
                          {" "}
                          {charge.amount}{" "}
                        </label>
                      </div>
                    );
                  })
                : nairaCharges.map((charge) => {
                    return (
                      <div className={styles.found} key={charge.id}>
                        <input
                          className={styles.radio}
                          type="radio"
                          name="budget"
                          onChange={handleChange}
                          value={charge.amount}
                          id={charge.id}
                        />
                        <label htmlFor={charge.id} className={styles.label}>
                          {" "}
                          {charge.amount}{" "}
                        </label>
                      </div>
                    );
                  })}
            </div>
          </div>
          <div className={styles["email-container"]}>
            <p className={styles.text}>Kindly contact me at </p>
            <input
              className={styles["text-input"]}
              placeholder="Type your email*"
              name="email"
              value={formDetails.email}
              onChange={handleChange}
              required
            />
            <p className={styles.text}>to start the conversation.</p>
          </div>
          <div className={styles["details-container"]}>
            <p className={styles.text}>
              {" "}
              I will like to share more details about the project{" "}
              <span>(optional)</span>
            </p>
            <textarea
              className={styles["text-area"]}
              placeholder="Tell us more about your project"
              name="projectDetails"
              onChange={handleChange}
              value={formDetails.projectDetails}
            />
          </div>
          <button className={styles["collaborate-btn"]}>
            {" "}
            Let&rsquo;s Collaborate!{" "}
            <span className={styles["white-arrow"]}>
              {" "}
              <Image src={arrowWhite} alt="arrow_white" />{" "}
            </span>{" "}
          </button>
        </form>
        <div className={styles["deliver-container"]}>
          <h4 className={styles["profit-title"]}>Do you have more questions</h4>
          <button className={styles.btn}>
            {" "}
            Shoot us a mail{" "}
            <span className={styles.arrow}>
              {" "}
              <Image src={arrowRight} alt="arrow-right" />{" "}
            </span>{" "}
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
