import type { NextPage } from "next";
import Head from "next/head";
import Menu from "../src/components/common/Menu/Menu";
import Contact from "../src/components/Contact/Contact";
import About from "../src/components/About/About";
import Home from "../src/components/Home/Home";
import Work from "../src/components/Work/Work";
import Services from "../src/components/Services/Services";
import Teams from "../src/components/Team/Team";
import Footer from "../src/components/Footer/Footer";
import Intro from "../src/components/Intro/Intro";
import React, { useState, useEffect } from "react";

const HomePage = ({}) => {
  const [checkOpenedIntro, setCheckOpenedIntro] = useState<string | null>(null);
  // check sessionStorage key intro-opened rendering intro or page
  useEffect(() => {
    const opened =
      typeof window !== "undefined" &&
      window.localStorage.getItem("intro-opened")
        ? window.localStorage.getItem("intro-opened")
        : "";
    setCheckOpenedIntro(opened);
  }, [checkOpenedIntro]);

  if (checkOpenedIntro === "opened") {
    return (
      <div className="app">
        <Head>
          <title>HOME | neliSoftwares</title>
          <meta
            name="description"
            content="
      ​We build  software solutions that set new industry standards. At lightning speed. Making the impossible possible. 
      ​Founded in 2017 by Kévin Perard, neliSoftwares originally was a start-up technology company based in Montreal, Canada. 
      After people noticed the quality of the software development, the company decided to focus on it to provide others enterprises the same great services and support.
      ​"
          />
        </Head>
        <Menu />
        <Home />
        <Work />
        <Services />
        <About />
        <Teams />
        <Contact />
        <Footer />
      </div>
    );
  } else if (checkOpenedIntro === "") {
    return <Intro />;
  }
};

export default HomePage;
