import React from "react";
import Link from "next/link";
import classes from "./PetPortrait.module.scss";

type Props = {
  className: string;
  src: string;
};

const PetPortrait: React.FunctionComponent<Props> = ({ className, src }) => {
  return (
    <div className={`${className} ${classes.animalPortrait}`}>
      <img className={`imgCover imgFill`} src={src} />
    </div>
  );
};

export default PetPortrait;
