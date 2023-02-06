import React from "react";
import styles from "./hero.module.css";
import DwormLogo from "../../../assets/image/dworm/logo.svg";
import Button from "../../common/nnbutton";

function Hero() {
  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.content} max-width`}>
        <div className={styles.content__left}>
          <img
            src={DwormLogo}
            alt="DWORM"
            className={styles.content__left_image}
          />
          <div className={styles.content__left_text}>
            With the arrival of Shibarium and the abundance of dog coins, it's
            easy to overlook the leftover "dog shit" that accumulates in your
            wallets. But, DWORM is here to take care of it for you.
          </div>
          <div className={styles.content_left_buttons}>
            <Button
              href="#about"
              buttonAs="a"
              buttonType="secondary"
              className={styles.button}
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className={styles.content__right}>
          {/* <img
            src={Ninja}
            alt="Ninja"
            className={styles.content__right_image}
          /> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
