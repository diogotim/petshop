import React from "react";
import Link from "next/link";
import classes from "./Brands.module.scss";

const Brands: React.FunctionComponent = () => {
  return (
    <div className={classes.root}>
      <div className={`container ${classes.content}`}>
        <img
          alt="Purina Pro Plan"
          src={require("../../../../public/Purina-Pro-Plan.svg")}
          height={120}
          width={120}
        />
        <img
          alt="Royal Canin"
          src={require("../../../../public/Royal-Canin-Logo.svg")}
          height={120}
          width={120}
        />
        <img
          alt="West Paw"
          src={require("../../../../public/West-Paw.svg")}
          height={120}
          width={120}
        />
      </div>
    </div>
  );
};

export default Brands;
