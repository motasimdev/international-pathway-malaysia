import React from "react";
import Container from "../../Container";
import about from "/src/assets/about.svg";
import PBase from "../../PBase";
import P18 from "../../P18";

const About = () => {
  return (
    <>
      <section className="pt-30 pb-5 md:pb-20 lg:pt-20 lg:pb-20 px-3 md:px-5 lg:px-0">
        <Container>
          <div className="flex justify-between">
            <div className="md:w-[50%]">
              <picture>
                <img src={about} alt="about" className="w-full" />
              </picture>
            </div>
            <div className="md:w-[40%]">
              <h3 className="text-secondary text-4xl font-bold lg:pr-30">
                The Trusted Partner for Your Study Abroad Success
              </h3>
              <PBase
                text={
                  "Empowering your future with the world’s most trusted higher education specialist"
                }
                className={"text-blue-500 font-medium lg:pr-30"}
              />
              <P18
                text={
                  "International Admission Service is a leading education consultancy firm and a trusted specialist in global study pathways. We provide expert guidance for students aspiring to pursue higher education abroad, offering services such as career counseling, profile assessment, visa assistance, and scholarship support. Backed by a team of experienced professionals, we are committed to delivering comprehensive advice and personalized solutions to help students achieve their academic and career goals."
                }
                className={"lg:pr-20 lg:text-justify"}
              />
              
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;
