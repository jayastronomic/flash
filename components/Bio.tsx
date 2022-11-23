import React from "react";
import styles from "./Bio.module.css";

export const Bio = () => {
  return (
    <section className={styles.container}>
      <p>
        Wassup guys. I'm <strong>Julian</strong>. I’m a software engineer, beat
        maker, fitness enthusiasts, foodie, and a good time.
      </p>
      <p>
        Welcome to my blog. I will be sharing my life experiences with others,
        some things about code, and ideas that come to my head from time to
        time.
      </p>
      <p>
        I want to also shed light on my story about my life - the good, the bad
        and the ugly.
      </p>
    </section>
  );
};
