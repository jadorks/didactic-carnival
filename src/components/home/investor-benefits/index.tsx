import React from "react";
import GreenText from "../../common/greenText/greenText";
import { DartGreen, Heading } from "../../common/uitils";
import styles from "./benefits.module.css";

function Benefits() {
  const benefits: { title: string; description: string }[] = [
    {
      title: "Perpetual income",
      description:
        "$SHONEN stakers earn tokens from every contract deployed on Shonen",
    },
    {
      title: "Airdrops and presales",
      description: "Incentivised partner project benefits",
    },
    {
      title: "DAO access",
      description: "Decide what to do with funds dedicated to DAO operations",
    },
    {
      title: "Exclusive features",
      description:
        "Get access to exclusive deployment features such as access to partnered marketing service providers, free deployments",
    },
  ];
  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.content} max-width`}>
        <Heading>
          <span>
            <GreenText>Investor</GreenText> Benefits
          </span>
        </Heading>
        <div className={styles.benefits}>
          {benefits.map(({ title, description }, i) => (
            <div key={i} className={styles.benefit}>
              <h2 className={styles.heading}>
                <DartGreen className="h-10" />
                <GreenText>{title}</GreenText>
              </h2>
              <p className={styles.description}>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
