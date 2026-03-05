import Banner from "../layouts/home/Banner";
import About from "../layouts/home/About";
import YourJuorney from "../layouts/home/YourJuorney";
import OurPartnersU from "../layouts/home/OurPartnersU";
import BecomeAPartner from "../layouts/home/BecomeAPartner";
import Loader from "./Loader";
import { useEffect, useState } from "react";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <YourJuorney />
      <OurPartnersU />
      <BecomeAPartner />
    </>
  );
};

export default Home;
