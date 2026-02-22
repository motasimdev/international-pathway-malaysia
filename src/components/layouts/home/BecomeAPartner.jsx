import React from "react";
import Container from "../../Container";
import Button from "../../Button";
import { FaLongArrowAltRight } from "react-icons/fa";
import round from "/src/assets/roundblur.svg";
import { Link } from "react-router";

const BecomeAPartner = () => {
  return (
    <>
      <section>
        <Container>
          <div className="py-5 md:py-16 px-8 md:px-22 bg-primary rounded-2xl md:flex justify-between">
            <p className="text-white font-extrabold text-3xl">
              Become A Partner
            </p>
            <div className="relative mt-5 md:mt-0 flex justify-center md:flex-none">
              <div
                className="absolute md:-right-6 -top-5 md:-top-11 animate-spin"
                style={{ animationDuration: "6s" }}
              >
                <img src={round} alt="" className="size-20 md:size-33" />
              </div>
              <Link>
                <Button className={"relative z-10"}>
                  <div className="flex items-center">
                    <p className="font-bold tracking-widest">Apply Now </p>
                    <FaLongArrowAltRight />
                  </div>
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default BecomeAPartner;
