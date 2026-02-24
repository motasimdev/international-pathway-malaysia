import { useEffect } from "react";
import { useLocation, Outlet } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Root = () => {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
