"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Container from "../components/container";
import { Button2 } from "../components/buttons";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const SliderInspiration = ({ sliderImages }: { sliderImages: any }) => {
  return (
    <>
      <section className="bg-bgprimary pl-[100px] pr-[0px] pt-[44px] pb-[44px] max-w-[1440px] mx-auto w-full flex justify-between items-center gap-[42px]">
        <div className="w-[422px]">
          <h3 className="mb-[7px] font-poppinsbold">
            50+ Beautiful rooms inspiration
          </h3>
          <p className="mb-[25px]">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <Button2
            width="w-[176px]"
            height="h-[48px]"
            bg="bg-primary"
            text="text-white"
            name="Explore More"
          />
        </div>
        <Swiper
          slidesPerView={2}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper h-[582px] w-[900px]"
        >
          {sliderImages.docs[0] &&
            sliderImages.docs[0]["furniture slides"].map(
              (image: any, idx: number) => {
                return (
                  <SwiperSlide key={idx} className="w-[404px] relative">
                    <Image
                      src={image.image.url}
                      width={image.image.width}
                      height={image.image.height}
                      alt="innerpeace"
                    />
                    <div className="absolute bottom-[24px] left-[24px] py-[32px] pl-[32px] pr-[17px] bg-white">
                      <p className="text-[16px] text-bgdark">{image.title}</p>
                      <p className="text-[28px]">{image.caption}</p>
                    </div>
                  </SwiperSlide>
                );
              }
            )}
        </Swiper>
      </section>
    </>
  );
};

export default SliderInspiration;
