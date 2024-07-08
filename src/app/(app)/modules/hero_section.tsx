import React from "react";
import Container from "../components/container";
import Image from "next/image";
import { Button1 } from "../components/buttons";
import Link from "next/link";

const HeroSection = () => {
  return (
    <Container
      pl="pl-[0px]"
      pr="pr-[0px]"
      pt="pt-[0px]"
      pb="pb-[0px]"
      pos="relative"
    >
      <Container
        pl={"pl-[739px]"}
        pr={"pr-[58px]"}
        pt={"pt-[153px]"}
        pb={"pb-[116.53px]"}
      >
        <div className="rounded-[10px] w-[643px] pt-[62px] pl-[39px] pr-[43px] pb-[37px] bg-secondary flex justify-center items-start flex-col relative z-20">
          <p className="text-[16px] font-poppinssemibold tracking-[3px] mb-[4px]">
            New Arrival
          </p>
          <h1 className="leading-tight font-poppinsbold">
            Discover Our New Collection
          </h1>
          <p className="mt-[17px] text-[18px] font-poppinsmedium mb-[46px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <Link href="/shop">
            <Button1
              width="w-[222px]"
              height="h-[74px]"
              bg="bg-primary"
              text="text-white"
              name="Buy Now"
            />
          </Link>
        </div>
      </Container>
      <Image
        className="absolute top-[0px] left-[0px] z-10"
        src={"/images/heroimg.png"}
        width={1440}
        height={717}
        alt="hero-image"
      ></Image>
    </Container>
  );
};

export default HeroSection;
