import Head from "next/head";
import React from "react";
import Hero from "../components/Hero";
import Work from "../components/Work";

const portfolio = () => {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Hero
        heading="Portfolio"
        message="This is some of my recent work traveling the world."
      />
      <Work />
    </div>
  );
};

export default portfolio;
