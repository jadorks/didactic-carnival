import React from "react";
import GreenText from "../../common/greenText/greenText";
import styles from "./tokenmetrics.module.css";
import { Heading } from "../../common/uitils/index";
import { ReactComponent as TokenMetricsBg } from "../../../assets/image/tokenomics-text.svg";

function TokenMetrics() {
  const tokenmetrics: { title: string; description: string }[] = [
    {
      title: "$ICHIGO",
      description: "Token Ticker",
    },
    {
      title: "1 Billion",
      description: "Total Supply",
    },
    {
      title: "12%",
      description: "Total Tax",
    },
    {
      title: "20%",
      description: "Burnt",
    },
  ];

  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.content} max-width`}>
        <Heading>
          <span>
            <GreenText>Shonen</GreenText> Token Metrics
          </span>
        </Heading>
        <div className={styles.tokenmetrics}>
          {tokenmetrics.map(({ title, description }, i) => (
            <div key={i} className={styles.tokenmetric}>
              <TokenMetricsBg className={styles.tokenmetricbg} />
              <div className={styles.tokenmetricText}>
                <h2 className={styles.title}>
                  <GreenText>{title}</GreenText>
                </h2>
                <p className={styles.description}>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TokenMetrics;
