import React, { FC } from "react";
import style from "./roadmap-item.module.css";

const RoadmapItem: FC<{
  title: string;
  content: string[];
  pillColour: string;
}> = ({ title, content, pillColour }) => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.content_title} style={{background:`${pillColour}`}}>
          <p>{title}</p>
        </div>
        <div className={style.content_body}>
          {content.map((item) => (
            <p>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadmapItem;
