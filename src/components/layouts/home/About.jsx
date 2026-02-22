import React from "react";
import Container from "../../Container";
import about from "/src/assets/about.svg";
import PBase from "../../PBase";
import P18 from "../../P18";
import Button from "../../Button";

const About = () => {
  return (
    <>
      <section className="pt-15 md:pt-30 pb-5 md:pb-20 lg:pt-20 lg:pb-20">
        <Container>
          <div className="md:flex justify-between items-center">
            <div className="md:w-[50%] pb-3 md:pb-0">
              <picture>
                <img src={about} alt="about" className="w-full" />
              </picture>
            </div>
            <div className="md:w-[45%]">
              <h3 className="text-secondary text-[32px] md:text-4xl leading-8 lg:leading-11 font-bold lg:pr-30 text-center md:text-left">
                The Trusted Partner for Your Study Abroad Success
              </h3>
              <PBase
                text={
                  "Empowering your future with the world’s most trusted higher education specialist"
                } 
                className={
                  "pt-3 lg:pt-5 text-primary font-medium lg:pr-30 text-center md:text-left"
                }
              />
              <P18
                text={
                  "International Admission Service is a leading education consultancy firm and a trusted specialist in global study pathways. We provide expert guidance for students aspiring to pursue higher education abroad, offering services such as career counseling, profile assessment, visa assistance, and scholarship support. Backed by a team of experienced professionals, we are committed to delivering comprehensive advice and personalized solutions to help students achieve their academic and career goals."
                }
                className={"lg:pr-20 py-3 lg:py-5 text-justify"}
              />
              <div className="w-full flex justify-center md:justify-normal">
                <Button className={"font-bold"}>
                  Book Your Appointment
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;
