import React from "react";
import Layout from "../../components/Layout";
import Hero from "../../components/Pages/Hero";
import Features from "../../components/Pages/Features";
import OurServices from "../../components/Pages/OurServices";
import About from "../../components/Pages/About";
import Testimonial from "../../components/Pages/Testimonial";
import LatestNews from "../../components/Pages/LatestNews";
import GetInTouch from "../../components/Pages/GetInTouch";

export default function Index() {
  return (
    <Layout>
      <Hero />
      <Features />
      <OurServices />
      <About />
      <Testimonial />
      {/* <LatestNews /> */}
      <GetInTouch />
    </Layout>
  );
}
