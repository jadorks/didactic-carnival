import React from "react";
import styles from "./more.module.css";
import Extra from "../../../assets/image/extra-details.png";
import { ReactComponent as Checkmark } from "../../../assets/icons/checkmark.svg";

function MoreDetails() {
  const details: { text: string }[] = [
    {
      text: "Migrating a liquidity pool from a v1 contract to a v2 contract can be a cumbersome process that requires trust and is fraught with flaws that can leave a project in a financial limbo.",
    },
    {
      text: "The current solutions madate that people send their tokens to the developer to receive an airdrop of tokens from the new contract. This is done so the devloper can sell the tokens to recover most of the liquidity. This usually happens due to the timed liquidity lock which can often have months or years left on it.",
    },
    {
      text: "Ichigo steps in to resolve this issue, by offering a permanent lock only. With no unlock date, we can provide a solution to benefit both parties to the contract, the developer and the investor.",
    },
    {
      text: " The difference with our liquidity locker is that the liquidity unlock can be initiated at any time, but the developer is forced to wait for a period of time to allow investors to decide if they want to sell and salvage their funds or not. Ichigo also provides seamless upgrades to a project's contract while allowing liquidity to be transferred along with the upgrades.",
    },
  ];
  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.content} max-width`}>
        <div className="flex md:hidden flex items-center xl:gap-8 gap-2 md:justify-start justify-center font-vermin xl:vermin-64 lg:vermin-32 md:vermin-26 vermin-24">
          <span>Why Ichigo?</span>
        </div>
        <div className={styles.content__left}>
          <img
            src={Extra}
            alt="Power UP"
            className={styles.content__left_image}
          />
        </div>

        <div className={styles.content__right}>
          <div className="md:flex hidden flex items-center xl:gap-8 gap-2 md:justify-start justify-center font-vermin xl:vermin-64 lg:vermin-32 md:vermin-26 vermin-24">
            <span>Why Ichigo?</span>
          </div>
          {details.map(({ text }, i) => (
            <div key={i} className={styles.content__right_body}>
              <Checkmark className="w-16" />
              <p className={styles.content__right_text}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MoreDetails;
