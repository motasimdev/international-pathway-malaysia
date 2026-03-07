import { useEffect, useState } from "react";
import { useLocation, Outlet } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";
import whatsapp from "/src/assets/whatsapp.svg";
import { FaChevronCircleUp } from "react-icons/fa";
const Root = () => {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  // ==========================

  //==== Back-to-top button
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
        <div className="relative">
          <div className="fixed w-12 md:w-10 h-12 md:h-10 bottom-5 right-5 z-50 bg-green-600 rounded-full">
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
        {show && (
          <button onClick={scrollTop} className="back-to-top fixed bottom-20 right-5 z-50 cursor-pointer text-secondary text-2xl">
           <FaChevronCircleUp/>

          </button>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Root;
