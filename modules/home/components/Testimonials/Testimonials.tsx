import React from "react";
import Link from "next/link";
import classes from "./Testimonials.module.scss";

const Testimonials: React.FunctionComponent = () => {
  return (
    <div className="container">
      <div className={classes.root}>
        <div className={`${classes.testimonialProfile} shadow-md`}>
          <img
            className={`imgCover imgFill`}
            src={require("../../../../public/woman-testimonials.jpg")}
          />
        </div>
        <div className={classes.speechWrapper}>
          <p className={`${classes.speech} shadow-md`}>
            “Etiam facilisis ornare ligula, id feugiat ante laoreet eget. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Etiam sed dui et mauris faucibus suscipit. Duis
            maximus purus id tincidunt dictum. Sed feugiat diam ut enim
            sollicitudin vestibulum.”
          </p>
          <p className={classes.clientName}>— Someone</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
