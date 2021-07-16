import React from "react";

import Rocket from "../Global/Components/Images/Rocket.png";

import styles from "./Content.module.css";

const Student = () => {
  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Students</h1>
        <p className={styles.summary}>
          Stratosphere Talent aims to be the Number 1 service matching high
          potential students with exciting space sector companies, completely
          free of charge to the student.
        </p>
        <p className={styles.content}>
          If you’re interested in the space sector but don’t have a network, we
          can help you make your first professional contacts and find your first
          placement.
        </p>
        <p className={styles.content}>
          Every month we give our partner companies a list of 5 potential
          candidates for a placement with them. If they like the look of your
          profile they may offer you an interview!
        </p>
        <p className={styles.content}>
          To get started and add yourself to our pool of students, please
          complete the form.
        </p>
      </div>
      <div className={`${styles.inner} ${styles.right}`}>
        <button className={`${styles.button} ${styles.button_purple}`}>
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

export default Student;
