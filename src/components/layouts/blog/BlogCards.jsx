import React from "react";
import Container from "../../Container";
import CardBlog from "../../CardBlog";
import blogs from "../../../data/blog";

const BlogCards = () => {
  return (
    <>
      <section className="py-11 lg:py-20 ">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 md:justify-between lg:grid-cols-3 gap-y-10">
            {blogs?.map((item) => (
              <CardBlog
                key={item.id}
                id={item.id}
                slug={item.slug}
                title={item.title}
                description={item.description}
                src={item.image}
                miniLogo={item.miniLogo}
                date={item.date}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default BlogCards;
