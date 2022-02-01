import React from "react";
import Link from "next/link";
import classes from "./StatusCard.module.scss";

type Props = {
  name: string;
  className: string;
  src: string;
};

const StatusCard: React.FunctionComponent<Props> = ({
  name,
  src,
  className,
}) => {
  return (
    <div className={`${classes.badgeCard} shadow-md ${className}`}>
      <div>
        <img className={`imgCover imgFill`} src={src} />
      </div>
      <span>{name} just got vaccinated.</span>
    </div>
  );
};

export default StatusCard;
