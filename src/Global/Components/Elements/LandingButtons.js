import React from "react";

import Button from "./Button";

import styles from "./LandingButtons.module.css";

const LandingButtons = () => {
  return (
    <div className={styles.container}>
      <p className={styles.p}>Are you a...</p>
      <div className={styles.buttons}>
        <Button to="/student" exact color="purple" size="big">
          Student
        </Button>
        <Button to="/teacher" exact color="pink" size="big">
          Teacher
        </Button>
        <Button to="/business" exact color="gray" size="big">
          Business
        </Button>
      </div>
    </div>
  );
};

export default LandingButtons;
