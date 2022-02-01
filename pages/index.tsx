import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import APIRequest from "../modules/api/lib/API";
import Layout from "../common/components/Layout/Layout";
import classes from "../common/styles/pages/Home.module.scss";

import AdoptionCard from "../modules/home/components/AdoptionCard/AdoptionCard";
import PetPortrait from "../modules/home/components/PetPortrait/PetPortrait";
import StatusCard from "../modules/home/components/StatusCard/StatusCard";
import Brands from "../modules/home/components/Brands/Brands";
import BestSellers from "../modules/home/components/BestSellers/BestSellers";
import Testimonials from "../modules/home/components/Testimonials/Testimonials";
import { Product } from "../types";
import SEOHead from "../common/components/SEOHead/SEOHead";

const Home: NextPage<{ bestSellers: Product[] }> = ({ bestSellers }) => {
  return (
    <React.Fragment>
      <SEOHead title="Home | Pets" />
      <Layout>
        <div className={`${classes.home} container`}>
          <div>
            <h1 className={classes.heading}>
              Your pet <span className={classes.headingHighlight}>deserve</span>{" "}
              the best
            </h1>
            <p>
              Quisque laoreet pretium interdum. Nulla vitae dolor porta,
              pellentesque velit tincidunt, lacinia augue. Nulla eu ipsum eu
              quam maximus ullamcorper sit amet sollicitudin risus.
            </p>
            <a className={classes.servicesBtn}>Check our services</a>
          </div>
          <div className={classes.rightSide}>
            <div className={classes.bgCircle} aria-hidden="true" />
            <img
              className={`imgContain imgFill`}
              alt="Woman holding a dog"
              src={require("../public/woman_home.png")}
            />
            <StatusCard
              src={require("../public/dogFace1.png")}
              name={"Charlie"}
              className={classes.dog1}
            />
            <AdoptionCard
              className={classes.catAdoption}
              src={require("../public/catAdoption.jpg")}
              name={"Tobias"}
            />
            <PetPortrait
              className={classes.cat1}
              src={require("../public/catFace1.png")}
            />
            <PetPortrait
              className={classes.cat2}
              src={require("../public/catFace2.jpg")}
            />
            <PetPortrait
              className={classes.dog2}
              src={require("../public/dogFace2.jpg")}
            />
          </div>
        </div>
        <Brands />
        <Testimonials />
        <BestSellers products={bestSellers} />
        <div className="container">
          <p className={classes.callUs}>
            Give us a call:{" "}
            <span className={classes.number}>+0 (000) 000-0000</span>
          </p>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export async function getStaticProps() {
  const res = await APIRequest({ endpoint: "best-sellers" });
  const bestSellers = await res.json();

  return {
    props: {
      bestSellers: bestSellers.data,
    },
  };
}

export default Home;
