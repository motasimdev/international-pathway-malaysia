import React from "react";
import Container from "../../Container";
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import slideOne from "/src/assets/asia-pacific-university.webp";
import slideTwo from "/src/assets/cyberjaya-university.webp";
import slideThree from "/src/assets/inti-university.webp";
import slideFour from "/src/assets/lincoln-university.webp";
import slideFive from "/src/assets/nilai-university.jpg";
import slideSix from "/src/assets/segi-university.webp";
import slideSeven from "/src/assets/Taylors-University.webp";
import slideEight from "/src/assets/unirazak-university.jpg";
import slideNine from "/src/assets/wollongong-university.jpg";
import { Link } from "react-router";
import { FaAnglesRight, FaAnglesLeft } from "react-icons/fa6";
import CardPartnerU from "../../CardPartnerU";

const OurPartnersU = () => {
  return (
    <>
      <section className="py-11 lg:py-20">
        <Container>
          <div className="text-center pb-9">
            <h3 className="text-3xl lg:text-[40px] font-semibold bg-secondary inline text-white">
              Our Partners
            </h3>
          </div>
          <div className="w-full overflow-visible relative">
            <Swiper
              observer={true}
              observeParents={true}
              slidesPerView={1}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <CardPartnerU
                  image={slideOne}
                  alt={""}
                  heading={"Study in Asia Pacific University"}
                  description={
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse explicabo recusandae consequuntur reiciendis aut, ipsa sapiente reprehenderit fugit facilis rem nesciunt ad optio ratione et quod repudiandae perferendis qui. Quam eligendi minima atque alias harum eveniet inventore accusamus? Inventore itaque libero voluptas tenetur?"
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardPartnerU
                  image={slideTwo}
                  alt={""}
                  heading={"Study in Cyberjaya University"}
                  description={
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse explicabo recusandae consequuntur reiciendis aut, ipsa sapiente reprehenderit fugit facilis rem nesciunt ad optio ratione et quod repudiandae perferendis qui. Quam eligendi minima atque alias harum eveniet inventore accusamus? Inventore itaque libero voluptas tenetur?"
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardPartnerU
                  image={slideThree}
                  alt={""}
                  heading={"Study in INTI University"}
                  description={
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse explicabo recusandae consequuntur reiciendis aut, ipsa sapiente reprehenderit fugit facilis rem nesciunt ad optio ratione et quod repudiandae perferendis qui. Quam eligendi minima atque alias harum eveniet inventore accusamus? Inventore itaque libero voluptas tenetur?"
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardPartnerU
                  image={slideFour}
                  alt={""}
                  heading={"Study in Linkcoln University"}
                  description={
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse explicabo recusandae consequuntur reiciendis aut, ipsa sapiente reprehenderit fugit facilis rem nesciunt ad optio ratione et quod repudiandae perferendis qui. Quam eligendi minima atque alias harum eveniet inventore accusamus? Inventore itaque libero voluptas tenetur?"
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardPartnerU
                  image={slideFive}
                  alt={""}
                  heading={"Study in Nilai University"}
                  description={
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse explicabo recusandae consequuntur reiciendis aut, ipsa sapiente reprehenderit fugit facilis rem nesciunt ad optio ratione et quod repudiandae perferendis qui. Quam eligendi minima atque alias harum eveniet inventore accusamus? Inventore itaque libero voluptas tenetur?"
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardPartnerU
                  image={slideSix}
                  alt={""}
                  heading={"Study in Segi University"}
                  description={
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse explicabo recusandae consequuntur reiciendis aut, ipsa sapiente reprehenderit fugit facilis rem nesciunt ad optio ratione et quod repudiandae perferendis qui. Quam eligendi minima atque alias harum eveniet inventore accusamus? Inventore itaque libero voluptas tenetur?"
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardPartnerU
                  image={slideSeven}
                  alt={""}
                  heading={"Study in Taylors University"}
                  description={
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse explicabo recusandae consequuntur reiciendis aut, ipsa sapiente reprehenderit fugit facilis rem nesciunt ad optio ratione et quod repudiandae perferendis qui. Quam eligendi minima atque alias harum eveniet inventore accusamus? Inventore itaque libero voluptas tenetur?"
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardPartnerU
                  image={slideEight}
                  alt={""}
                  heading={"Study in Unirazak University"}
                  description={
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse explicabo recusandae consequuntur reiciendis aut, ipsa sapiente reprehenderit fugit facilis rem nesciunt ad optio ratione et quod repudiandae perferendis qui. Quam eligendi minima atque alias harum eveniet inventore accusamus? Inventore itaque libero voluptas tenetur?"
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardPartnerU
                  image={slideNine}
                  alt={""}
                  heading={"Study in Wollongong University"}
                  description={
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse explicabo recusandae consequuntur reiciendis aut, ipsa sapiente reprehenderit fugit facilis rem nesciunt ad optio ratione et quod repudiandae perferendis qui. Quam eligendi minima atque alias harum eveniet inventore accusamus? Inventore itaque libero voluptas tenetur?"
                  }
                />
              </SwiperSlide>
            </Swiper>

            {/* ================================ */}
            <button className="custom-next hidden md:block absolute top-1/2 -right-5 -translate-y-1/2 z-10 cursor-pointer">
              <FaAnglesRight className="text-4xl text-secondary" />
            </button>
            <button className="custom-prev hidden md:block absolute top-1/2 -left-5 -translate-y-1/2 z-10 cursor-pointer">
              <FaAnglesLeft className="text-4xl text-secondary" />
            </button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default OurPartnersU;
