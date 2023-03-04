import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "./components/Banner";
import Custom from "./components/Custom";
import Detail from "./components/Detail";
import Feature from "./components/Feature";
import Figure from "./components/Figure";
import Hero from "./components/Hero";
import Report from "./components/Report";
import Services from "./components/Services";
import Works from "./components/Works";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Feature />
      <Works />
      <Figure />
      <Custom />
      <Detail />
      <Report/>
      <Banner />
      <Footer />
    </>
  );
};

export default Home;
