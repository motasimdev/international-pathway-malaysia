import React from "react";
import Container from "../../Container";
import journeyOne from "/src/assets/your-journey01.svg";
import journeyTwo from "/src/assets/your-journey02.svg";
import journeyThree from "/src/assets/your-journey03.svg";
import Button from "../../Button";
import P18 from "../../P18";

const YourJuorney = () => {
  return (
    <>
      <section className="py-15 lg:py-30 bg-secondary">
        <Container>
          <h4 className="text-lg lg:text-[32px] font-semibold text-white">
            Your path into global universities -
          </h4>
          <p className="lg:text-2xl text-white font-semibold">
            We’ve helped 50,000+ international students get into university.
          </p>
          {/* ========================== */}
          <div className="relative mt-8 overflow-hidden pb-60 md:pb-30">
            <div className="absolute lg:-top-37 lg:left-116 rounded-full lg:rounded-none py-47 md:py-70 lg:py-135 px-8.5 md:px-20 lg:px-29.5 lg:-rotate-60 bg-linear-to-b from-[#d5d5ff7a] to-[#d5d5ff] z-0"></div>
            <div className="relative w-17 h-17 md:w-40 md:h-40 lg:w-60 lg:h-60 rounded-full bg-yellow-100 z-10">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src={journeyOne}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="z-10 max-w-120 absolute top-0 left-20 md:left-50 lg:left-90">
              <p className="text-2xl lg:text-[32px] font-semibold text-white">Step 1</p>
              <h3 className="text-4xl md:text-5xl lg:text-6xl text-primary font-extrabold pr-5">
                Choose your pathway
              </h3>
              <P18
                text={
                  "Study an NCUK pathway programme in more than 40 countries worldwide. Start your journey locally or study abroad straight away."
                }
                className={"text-white pr-5 py-4"}
              />
              <Button className={"bg-blue-200! lg:bg-secondary"}>Our Programmes</Button>
            </div>
            <div className="relative my-60 lg:my-78 flex lg:justify-end">
              <div className="z-10 max-w-120 absolute top-0 left-20 md:left-50 lg:left-0">
                <p className="text-2xl lg:text-[32px] font-semibold text-white">
                  Step 2
                </p>
                <h3 className="text-4xl md:text-5xl lg:text-6xl text-primary font-extrabold lg:pr-19">
                  Support with every step
                </h3>
                <P18
                  text={
                    "Our expert student support teams will guide you through every step of your journey and help find the best university and course for you."
                  }
                  className={"text-white lg:pr-21 py-4"}
                />
                <Button className={"bg-blue-200!"}>How we support you</Button>
              </div>
              <div className="relative w-17 h-17 md:w-40 md:h-40 lg:w-60 lg:h-60 rounded-full bg-yellow-100 z-10">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img src={journeyTwo} alt="" />
                </div>
              </div>
            </div>
            {/* ================================= */}
            <div className="relative">
              <div className="absolute bottom-0 lg:-bottom-34 lg:left-121 rounded-full lg:rounded-none py-47 md:py-70 lg:py-134 px-8.5 md:px-20 lg:px-29.5 lg:rotate-60 bg-linear-to-b from-[#d5d5ff7a] to-[#d5d5ff] z-0"></div>
              <div className="relative w-17 h-17 md:w-40 md:h-40 lg:w-60 lg:h-60 rounded-full bg-yellow-100 z-10">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src={journeyThree}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="z-10 max-w-121 absolute top-0 left-20 md:left-50 lg:left-90 ">
                <p className="text-2xl lg:text-[32px] font-semibold text-white">
                  Step 3
                </p>
                <h3 className="text-4xl md:text-5xl lg:text-6xl text-primary font-extrabold">
                  Gain entry to your dream university
                </h3>
                <P18
                  text={
                    "Progress to one of 70+ universities – including 10 in the QS World Top 100 – across the most popular study destinations."
                  }
                  className={"text-white pr-5 py-4"}
                />
                <Button className={"bg-blue-200!"}>Explore universities</Button>
              </div>
            </div>
          </div>
          
        </Container>
      </section>
    </>
  );
};

export default YourJuorney;
