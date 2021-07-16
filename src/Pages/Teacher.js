import React from "react";

import Rocket from "../Global/Components/Images/Rocket.png";

import styles from "./Content.module.css";

const Teacher = () => {
  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Teachers</h1>
        <p className={styles.summary}>
          Stratosphere Talent aims to be the Number 1 service matching high
          potential students with exciting space sector companies, completely
          free of charge to the student.
        </p>
        <p className={styles.content}>
          If your students are interested in the space sector and don’t have a
          network, we can help make their first professional contacts and find
          their first placement.
        </p>
        <p className={styles.content}>
          Our team members would love to set up a call with you and discuss how
          we could help get your students started. To speak to us and find out
          more, please complete the form.
        </p>
      </div>
      <div className={`${styles.inner} ${styles.right}`}>
        <button className={`${styles.button} ${styles.button_pink}`}>
          <a
            className={styles.button_link}
            onClick={() =>
              window.open("https://forms.gle/XdgAac3kLHQ54huHA", "_blank")
            }
          >
            Complete the form
          </a>
        </button>
        <img src={Rocket} alt="Our rocket mascot" className={styles.rocket} />
      </div>
    </div>
  );
};

export default Teacher;
