import React, { useState } from "react";
import Container from "../../Container";
import Select from "react-select";
import { RiGraduationCapFill } from "react-icons/ri";
import PBase from "../../PBase";
import grpStudy from "/src/assets/group-study.jpg";
import university from "/src/assets/university.jpg";
import Psm from "../../Psm";

const About = () => {
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
  return (
    <>
      <section className="bg-linear-to-b from-[#d5d5ff] to-[#e6e6ec] py-30 lg:pt-55 lg:pb-40 px-3 md:px-5 lg:px-0">
        <Container>
          <div className="md:flex items-center md:gap-x-8 lg:gap-x-0">
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
              <div className="max-w-135">
                <Select
                  options={universities}
                  onMenuOpen={() => console.log("menu opened")}
                  onMenuClose={() => console.log("menu closed")}
                  placeholder="Search university"
                  onChange={(selected) => console.log(selected.value)}
                  isSearchable
                />
              </div>
            </div>

            {/* ======================================= */}
            <div className=" md:w-[50%] mt-4 md:mt-0">
              <div className="md:flex gap-x-7">
                <div className="md:w-[50%] flex flex-col gap-y-3">
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
                      <p className="text-xl md:text-2xl text-white font-bold">
                        29 +
                      </p>
                    </div>
                  </div>
                  {/* ==============box one======== */}

                  {/* ==============box two======== */}
                  <div className="bg-[#b5b5f8] pt-2 md:pt-2.5 px-2 md:px-4 pb-3 md:pb-5 rounded-xl flex flex-col gap-y-2 shadow-[0px_4px_16px_rgba(17,17,26,0.1),0px_8px_24px_rgba(17,17,26,0.1),0px_16px_56px_rgba(17,17,26,0.1)]">
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
                      <div className="w-fit m-auto md:m-0 md:w-30 py-1 md:py-2 px-2 md:px-2 rounded-xl border border-white">
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
                <div className="md:w-[50%] flex flex-col gap-y-4">
                  <picture>
                    <img
                      src={university}
                      alt="group study"
                      className="w-full rounded-xl"
                    />
                  </picture>
                  {/* ============= */}
                  <div className="flex justify-center py-4 md:py-5 md:px-8 bg-primary rounded-xl">
                    <div className="size-9 md:size-14 rounded-full bg-white flex items-center justify-center">
                      <RiGraduationCapFill className="text-secondary text-2xl md:text-4xl " />
                    </div>
                    <div className="ml-5">
                      <PBase
                        text={"Student visa"}
                        className={"text-white font-semibold"}
                      />
                      <p className="text-xl md:text-2xl text-white font-bold">
                        200 +
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;
