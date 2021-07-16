import React from "react";

import Rocket from "../Global/Components/Images/Rocket.png";

import styles from "./Content.module.css";

const Business = () => {
  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Business</h1>
        <p className={styles.summary}>
          Stratosphere Talent aims to be the Number 1 service matching high
          potential students with exciting space sector companies, completely
          free of charge to the student.
        </p>
        <p className={styles.content}>
          When your company takes on young people it achieves the following
          three things:
        </p>
        <ul className={`${styles.content} ${styles.list}`}>
          <li>
            Increasing their chances of an exciting future in the space sector.
          </li>
          <li>
            Addressing the skills problem which we are facing at the moment.
          </li>
          <li>
            Building a company reputation of being inclusive and forward
            thinking, further incentivising the next generation of talent to
            work with you.
          </li>
        </ul>
        <p className={styles.content}>
          We are currently working behind the scenes on developing our service.
          If your company is interested in finding out more, please send an
          email to info@stratospheretalent.com
        </p>
      </div>
      <div className={`${styles.inner} ${styles.right}`}>
        <img src={Rocket} alt="Our rocket mascot" className={styles.rocket} />
      </div>
    </div>
  );
};

export default Business;
