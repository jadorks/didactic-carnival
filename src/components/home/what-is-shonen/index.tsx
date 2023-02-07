import React from "react";
import styles from "./what.module.css";
import TokenomicsCircle from "../../common/tokenomics-circle";
import ProgressBar from "../../common/progress-bar";

function WhatIsShonen() {
  const taxes = [
    {
      title: "Marketing",
      value: "2",
      percent: 0.2,
      pillColour: "#05FD13",
    },
    {
      title: "Infrastructure",
      value: "2",
      percent: 0.2,
      pillColour: "#CCE005",
    }
  ];
  return (
    <section className={`${styles.container}`} id="tokenomics">
      <div className={`${styles.content} max-width`}>
        <div className="md:hidden flex items-center xl:gap-8 gap-2 md:justify-start justify-center font-freude-reg xl:freude-64 freude-48">
          <span>Tokenomics</span>
        </div>

        <div className={styles.content__right}>
          <div className="md:flex hidden flex items-center xl:gap-8 gap-2 md:justify-start justify-center font-freude-reg xl:freude-64 freude-48">
            <span>Tokenomics</span>
          </div>
          <div className={styles.content__right_text}>
            <TokenomicsCircle
              text={"580,000,000"}
              className="max-w-[512px] md:min-w-[512px]"
            />
          </div>
        </div>
        <div className={styles.content__left}>
          <h3 className="font-freude-reg freude-48">Tax: 4% Buy / 4% Sell</h3>
          <div className="flex flex-col gap-8">
            {taxes.map((item, index) => (
              <ProgressBar
                key={index}
                title={item.title}
                value={item.value}
                percent={item.percent}
                pillColour={item.pillColour}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatIsShonen;
