import React from "react";

import Rocket from "../Global/Components/Images/Rocket.png";
import LandingRocket from "../Global/Components/Images/LandingRocket.png";
import LandingButtons from "../Global/Components/Elements/LandingButtons";
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <>
      <div>
        <p className={`${styles.welcome} ${styles.hero}`}>Welcome to</p>
        <h1 className={`${styles.title} ${styles.hero}`}>
          Stratosphere Talent.
        </h1>
        <p className={`${styles.tagline} ${styles.hero}`}>
          Cultivating the next generation of space leaders and innovators.
        </p>
      </div>
      <img src={LandingRocket} className={styles.upper_rocket} />
      <div className={styles.lower}>
        <LandingButtons />
        <img src={Rocket} className={styles.lower_rocket} />
      </div>
    </>
  );
};

export default Landing;
