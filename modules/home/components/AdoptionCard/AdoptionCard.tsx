import React from "react";
import Link from "next/link";
import classes from "./AdoptionCard.module.scss";

type Props = {
  name: string;
  className: string;
  src: string;
};

const AdoptionCard: React.FunctionComponent<Props> = ({
  name,
  src,
  className,
}) => {
  return (
    <div className={`${classes.badgeCard} shadow-lg ${className}`}>
      <div className={classes.innerWrapper}>
        <div className={classes.pic}>
          <img className={`imgCover imgFill`} src={src} />
        </div>
        <div className={classes.petName}>{name}</div>
        <a className={classes.adoptBtn}>Adopt Me!</a>
      </div>
    </div>
  );
};

export default AdoptionCard;
