
import Banner from "../layouts/home/Banner";
import About from "../layouts/home/About";
import YourJuorney from "../layouts/home/YourJuorney";
import OurPartnersU from "../layouts/home/OurPartnersU";
import BecomeAPartner from "../layouts/home/BecomeAPartner";
import Loader from "./Loader";
import { useEffect, useState } from "react";

const Home = () => {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    // check if loader shown already
    const loaderShown = sessionStorage.getItem("loaderShown");
    if (!loaderShown) {
      setShowLoader(true);
      const timer = setTimeout(() => {
        setShowLoader(false);
        sessionStorage.setItem("loaderShown", "true");
      }, 1000); // 1 sec
      return () => clearTimeout(timer);
    }
  }, []);

  if (showLoader) return <Loader />;
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
