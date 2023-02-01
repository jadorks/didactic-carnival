import React, { FC } from "react";
import style from "./progress-bar.module.css";

type Props = {
  title: string;
  value: string;
  percent: number;
  pillColour: string;
};

const ProgressBar: FC<Props> = ({ title, value, percent, pillColour }) => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.progress_bar_title}>
          <p className="freude-24">{title}</p>
          <p className={`freude-24`} style={{ color: pillColour }}>
            {value}%
          </p>
        </div>
        <div className={style.progress_bar}>
          <div
            className={style.progress}
            style={{ width: `${percent * 100}%`, background: pillColour }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
