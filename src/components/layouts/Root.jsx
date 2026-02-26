import { useEffect } from "react";
import { useLocation, Outlet } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";
import whatsapp from "/src/assets/whatsapp.svg";

const Root = () => {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
        <div className="relative">
          <div className="fixed w-12 md:w-14 h-12 md:h-14 bottom-5 right-5 z-50 bg-green-600 rounded-full">
            <a
              href="https://wa.me/1234567890" //
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={whatsapp}
                alt="WhatsApp"
                className=" hover:scale-110 transition-transform"
              />
            </a>
            <div
              className="size-8 md:size-9 bg-green-600 absolute top-1/2 left-1/2 transform -translate-[50%] rounded-full -z-1 animate-ping"
              style={{ animationDuration: "1.5s" }}
            ></div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Root;
