import React, { FC } from "react";
import styles from "./stake-units-widget.module.css";
import { ReactComponent as WidgetBg } from "../../../assets/image/stake-widget.svg";
import GreenText from "../../common/greenText/greenText";

interface IStakeUnitWidget {
  name: string;
  value: string;
}

const StakeUnitWidget: FC<IStakeUnitWidget> = ({ name, value }) => {
  return (
    <>
      <div className={styles.container}>
        <WidgetBg className={styles.svg} />
        <div className={styles.content}>
          <p className={styles.heading}>
            <GreenText>{name}</GreenText>
          </p>
          <p className={styles.main}>{value}</p>
        </div>
      </div>
    </>
  );
};

export default StakeUnitWidget;
