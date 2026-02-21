import React, { useState } from "react";
import Container from "../../Container";
import Select from "react-select";
import { RiGraduationCapFill } from "react-icons/ri";
import PBase from "../../PBase";
import grpStudy from "/src/assets/group-study.jpg";
import university from "/src/assets/university.jpg";
import APU from "/src/assets/university-logos/APU-logo.png";
import INTI from "/src/assets/university-logos/INTI-40.png";
import NILAI from "/src/assets/university-logos/logo.png";
import LINCOLN from "/src/assets/university-logos/logo.webp";
import UNIRAZAK from "/src/assets/university-logos/Official-UNIRAZAK-Logo.png";
import SEGI from "/src/assets/university-logos/SEGi-University.png";
import UOW from "/src/assets/university-logos/UOW-logoo.png";
import Psm from "../../Psm";

import Marquee from "react-fast-marquee";
import CountUp from "react-countup";

const Banner = () => {
  //counter up
  const onComplete = () => {
    console.log("Completed");
  };

  const onStart = () => {
    console.log("Started");
  };
  //counter up

  const universities = [
    { value: "um", label: "University of Malaya (UM)" },
    { value: "utm", label: "Universiti Teknologi Malaysia (UTM)" },
    { value: "upm", label: "Universiti Putra Malaysia (UPM)" },
    { value: "ukm", label: "Universiti Kebangsaan Malaysia (UKM)" },
    { value: "usm", label: "Universiti Sains Malaysia (USM)" },
    { value: "uim", label: "International Islamic University Malaysia (IIUM)" },
    { value: "monash-my", label: "Monash University Malaysia" },
    { value: "taylor", label: "Taylor’s University" },
    { value: "sunway", label: "Sunway University" },
    { value: "apu", label: "Asia Pacific University (APU)" },
  ];

  const university_logo = [
    { name: "APU", logo: APU },
    { name: "INTI", logo: INTI },
    { name: "NILAI", logo: NILAI },
    { name: "LINCOLN", logo: LINCOLN },
    { name: "UNIRAZAK", logo: UNIRAZAK },
    { name: "SEGI", logo: SEGI },
    { name: "UOW", logo: UOW },
  ];
  return (
    <>
      <section className="bg-linear-to-b from-[#d5d5ff] to-[#e6e6ec] pt-30 pb-5 md:pb-20 lg:pt-40 lg:pb-30 px-3 md:px-5 lg:px-0">
        <Container>
          <div className="md:flex justify-between items-center md:gap-x-8 lg:gap-x-0">
            <div className="md:w-[50%]">
              <h1 className="text-4xl md:text-[40px] lg:text-[54px] lg:leading-16 lg:pr-23 text-secondary font-extrabold ">
                Expert Guidance For{" "}
                <span className="text-primary">International Students</span> In
                Malaysia
              </h1>
              <p className="text-[22px] text-secondary lg:pr-26 pt-5 pb-3 lg:text-justify">
                We simplify everything, from selecting the perfect university to
                obtaining your student visa.
              </p>
              <div className="max-w-135 flex items-center z-10">
                <div className="w-full">
                  <Select
                    options={universities}
                    onMenuOpen={() => console.log("menu opened")}
                    onMenuClose={() => console.log("menu closed")}
                    placeholder="Search university"
                    onChange={(selected) => console.log(selected.value)}
                    isSearchable
                    maxMenuHeight="160px"
                  />
                </div>
              </div>
            </div>

            {/* ======================================= */}
            <div className=" md:w-[50%] mt-4 md:mt-0">
              <div className="md:flex gap-x-7">
                <div className="md:w-[45%] flex flex-col gap-y-3">
                  {/* ==============box one======== */}
                  <div className="flex justify-center py-4 md:py-5 md:px-8 bg-secondary rounded-xl">
                    <div className="size-9 md:size-14 rounded-full bg-white flex items-center justify-center">
                      <RiGraduationCapFill className="text-secondary text-2xl md:text-4xl " />
                    </div>
                    <div className="ml-5">
                      <PBase
                        text={"University"}
                        className={"text-white font-semibold"}
                      />
                      <CountUp
                        className="account-balance text-xl md:text-2xl text-white font-bold"
                        start={0}
                        end={29}
                        duration={3}
                        useEasing={false}
                        separator=","
                      />{" "}
                      <span className="text-xl md:text-2xl text-white font-bold">
                        +
                      </span>
                    </div>
                  </div>
                  {/* ==============box one======== */}

                  {/* ==============box two======== */}
                  <div className="bg-[#b5b5f8] pt-2 md:pt-2.5 px-2 md:px-4 pb-3 md:pb-5 rounded-xl flex flex-col gap-y-2 shadow-[0px_5px_8px_-2px_rgba(0,0,0,0.3)]">
                    <picture>
                      <img
                        src={grpStudy}
                        alt="group study"
                        className="w-full rounded-xl"
                      />
                    </picture>
                    <div className="bg-primary rounded-xl px-3 md:px-4 py-2 md:pt-4 md:pb-2 text-center md:text-left">
                      <p
                        className={"text-white font-medium text-xl md:text-2xl"}
                      >
                        {" "}
                        Student Visa
                      </p>
                      <Psm
                        text={"Unlock global education with a student visa!"}
                        className={"text-white py-1.5 md:py-2.5"}
                      />
                      <div className="w-fit m-auto md:m-0 md:w-30 py-1 md:py-2 px-2 md:px-2 rounded-xl border border-white text-center">
                        <PBase
                          text={"Connect Now"}
                          className={"animate-bounce text-white font-medium"}
                        />
                      </div>
                    </div>
                  </div>
                  {/* ==============box two======== */}
                </div>

                {/* ================================ */}
                <div className="md:w-[40%] flex flex-col gap-y-4">
                  <picture>
                    <img
                      src={university}
                      alt="group study"
                      className="w-full rounded-xl"
                    />
                  </picture>
                  {/* ============= */}
                  <div className="flex justify-center py-4 md:py-5 md:px-8 bg-primary rounded-xl shadow-[0px_5px_8px_-2px_rgba(0,0,0,0.3)]">
                    <div className="size-9 md:size-14 rounded-full bg-white flex items-center justify-center">
                      <RiGraduationCapFill className="text-secondary text-2xl md:text-4xl " />
                    </div>
                    <div className="ml-5">
                      <PBase
                        text={"Student visa"}
                        className={"text-white font-semibold"}
                      />
                      <CountUp
                        className="account-balance text-xl md:text-2xl text-white font-bold"
                        start={0}
                        end={200}
                        duration={3}
                        useEasing={true}
                        separator=","
                      />{" "}
                      <span className="text-xl md:text-2xl text-white font-bold">
                        +
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <div className="bg-[#e5e0d0] py-2 lg:py-6">
        <Marquee speed={80} gradient={false} pauseOnHover={true}>
          {university_logo.map((uni, index) => (
            <div key={index} className="mx-10 flex items-center justify-center">
              <img
                src={uni.logo}
                alt={uni.name}
                className={`h-12 object-contain`}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
};

export default Banner;
