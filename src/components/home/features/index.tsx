import React from "react";
import styles from "./features.module.css";
import SpaceshipIcon from "../../../assets/image/dworm/spaceship.svg";
import Button from "../../common/nnbutton";

function Features() {
  const features: { title: string; description: string }[] = [
    {
      title: "Cleaner Wallets",
      description:
        "DWORM helps users clean up their crypto wallets by collecting all the leftover 'dog shit' tokens and giving them an opportunity to trade them for SHIB on the Shibarium network.",
    },
    {
      title: "Community Focused",
      description:
        "DWORM loves its community; hence, the governance can vote for the accepted leftover 'dog shit' tokens. DWORM also incentivises users to participate by offering a chance to win a reward. We can't forget DWORM's staking platform which also provides users with 333% APY in an unlocked pool allowing users to withdraw at any time.",
    },
    {
      title: "Endless Value",
      description:
        "After each collection round, a percentage of the amount collected is collected to help increase the value of DWORM. That percentage may be used for buybacks, burns or sent to the treasury.",
    },
  ];
  return (
    <>
      <section className={`${styles.container}`} id="about">
        <div className={`${styles.content} max-width`}>
          <div className="flex flex-col pt-16 items-center md:justify-start justify-center">
            <h2 className="font-freude-reg xl:freude-64 freude-48 uppercase">
              Why Dworm?
            </h2>
            <p className="lato-20 w-full md:w-1/2 text-center text-justify">
              With shibarium coming, the dogs will be abundant, but nobody is
              thinking about the shit, yes, the dog shit, that all these coins
              produce. That's where DWORM comes into play. We have developed a
              system where we will collect all the leftover dog tokens in your
              wallets from all networks to help you clean up your shit, in turn
              giving you what can be used to trade for SHIB on the Shibarium
              network. Let's not be those people that just leave dogshit all
              over the park, fill up your bags and let's make this a cleaner
              place.
            </p>
          </div>
          <div className={`${styles.features}`}>
            {features.map(({ title, description }, i) => (
              <div key={i} className={`${styles.feature}`}>
                <div className={`${styles.content__left}`}>
                  <img src={SpaceshipIcon} className="h-24 w-24" alt="" />
                </div>
                <div className={`${styles.content__right}`}>
                  <div className={`${styles.heading}`}>{title}</div>
                  <div className={`${styles.description}`}>{description}</div>
                </div>
              </div>
            ))}
          </div>
          <Button
            href="https://app.uniswap.org/#/swap?outputCurrency=0xf1b315293f358afc64db8eddef25c26d1592ba05"
            buttonAs="a"
            target="_blank"
            buttonType="secondary"
            className="w-40 mt-48"
          >
            Buy DWORM
          </Button>
        </div>
      </section>
    </>
  );
}

export default Features;
