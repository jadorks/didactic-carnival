import React from "react";
import styles from "./hero.module.css";
import Money from "../../../assets/image/shonen-money.png";
import Shonen from "../../../assets/image/shonen-staking.png";
import Button from "../../common/button";
import GreenText from "../../common/greenText/greenText";

function StakeHero() {
  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.content} max-width`}>
        <div className={styles.content__left}>
          <img
            src={Shonen}
            alt="Shonen"
            className={styles.content__left_image}
          />
          <div className={styles.content__left_text}>
            <p className="text-center">
              Earn rewards while staking $Shonen. In the future, stakers will
              earn rewards from every project launched on the
              <span className={styles.spacer}></span>
              <GreenText>shonen</GreenText>
              <span className={styles.spacer}></span>
              platform.
            </p>
          </div>
          <div className={styles.content_left_buttons}>
            <Button
              href="#"
              buttonAs="a"
              target="_blank"
              className={styles.button}
            >
              Buy SHONEN
            </Button>
            <Button
              href="https://medium.com/shonen-io/sh%C5%8Dnen-revenue-distribution-model-2d2264e7f9fc"
              buttonAs="a"
              target="_blank"
              buttonType="secondary"
              className={styles.button}
            >
              Read More
            </Button>
          </div>
        </div>
        <div className={styles.content__right}>
          <img
            src={Money}
            alt="Ninja"
            className={styles.content__right_image}
          />
        </div>
      </div>
    </section>
  );
}

export default StakeHero;
