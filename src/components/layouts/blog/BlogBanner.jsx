import React from "react";
import Container from "../../Container";
import Heading from "../../Heading";
import P18 from "../../P18";
import blogImage from "/src/assets/blog1.svg";

const BlogBanner = () => {
  return (
    <>
      <section className="py-11 lg:pt-20 bg-secondary">
        <Container>
          <div className="flex items-center">
            <div className="md:w-[50%]">
              <Heading
                text={"Our Latest Study Abroad Blogs"}
                className={"text-white"}
              />
              <P18
                text={
                  "Our study abroad blogs offer the greatest information, guidance & suggestions."
                }
                className={"text-white font-semibold lg:py-5"}
              />
              <P18
                text={
                  "We are the best education consultancy firm in Bangladesh, offering the most comprehensive and diligently curated blog posts covering diverse facets of studying abroad. Our blog posts reflect the latest trends and developments in the global education landscape."
                }
                className={"text-white"}
              />
            </div>
            <div className="md:w-[50%] overflow-hidden">
              <img src={blogImage} alt="Blog" className="w-full h-full"/>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default BlogBanner;
