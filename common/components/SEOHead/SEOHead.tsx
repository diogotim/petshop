import React from "react";
import Head from "next/head";

interface Props {
  title: string;
}
const SEOHead: React.FunctionComponent<Props> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="This is a demo app made for my portfolio"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEOHead;
