import React from "react";
import styles from "./features.module.css";
import SpaceshipIcon from "../../../assets/image/dworm/spaceship.svg";
import Button from "../../common/nnbutton";

function Features() {
  const features: { title: string; description: string }[] = [
    {
      title: "Liquidity Locking",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus repellat unde, impedit suscipit excepturi consectetur ducimus soluta? Ipsum maiores, optio esse laudantium nisi aperiam fugit sequi odit odio praesentium obcaecati.",
    },
    {
      title: "Seamless Upgrades",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus repellat unde, impedit suscipit excepturi consectetur ducimus soluta? Ipsum maiores, optio esse laudantium nisi aperiam fugit sequi odit odio praesentium obcaecati.",
    },
    {
      title: "Seamless Upgrades",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus repellat unde, impedit suscipit excepturi consectetur ducimus soluta? Ipsum maiores, optio esse laudantium nisi aperiam fugit sequi odit odio praesentium obcaecati.",
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
            <p className="lato-20 w-full md:w-1/2 text-center md:text-left">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              error sit voluptatem
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
            href="#"
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
