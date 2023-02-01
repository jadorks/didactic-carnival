import React, { FC } from "react";
import { ReactComponent as TripleDartG } from "../../../assets/icons/daggers.svg";
import { ReactComponent as DartG } from "../../../assets/icons/daggers.svg";
import { ReactComponent as DartW } from "../../../assets/icons/daggers.svg";

export const TripleDartGreen: FC<{ className?: string }> = ({ className }) => {
  return <TripleDartG className={className} />;
};

export const DartGreen: FC<{ className?: string }> = ({ className }) => {
  return <DartG className={className} />;
};

export const DartWhite: FC<{ className?: string }> = ({ className }) => {
  return <DartW className={className} />;
};

export const Heading: FC<{ className?: string }> = ({
  children,
  className,
}) => {
  const styles = {
    title:
      "flex items-center xl:gap-8 gap-2 md:justify-start justify-center font-nba-bold xl:nba-bold-48 lg:nba-bold-32 md:nba-bold-26 nba-bold-24",
    dart: "xl:h-16 w-auto lg:h-10 h-8",
  };
  return (
    <h1 className={`${styles.title} ${className}`}>
      <TripleDartGreen className={styles.dart} />
      {children}
    </h1>
  );
};
