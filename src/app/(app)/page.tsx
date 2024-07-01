import Image from "next/image";
import Container from "./components/container";
import HeroSection from "./modules/hero_section";
import Products from "./modules/products";
import SliderInspiration from "./modules/slider_inspiration";
import ImageGrid from "./modules/image_grid";
import payload from "payload";
import { CollectionAfterChangeHook } from "payload";
import config from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";

export default async function Home() {
  const payload = await getPayloadHMR({ config });

  const productItems = await payload.find({
    collection: "products",
  });

  const categoryItems = await payload.find({
    collection: "category",
  });

  const inspirationItems = await payload.find({
    collection: "inspiration",
  });

  const imageGridItems = await payload.find({
    collection: "gridimages",
  });

  return (
    <>
      <HeroSection />
      <Products productData={productItems} categoryItems={categoryItems} />
      {/* <SliderInspiration sliderImages={inspirationItems} /> */}
      <ImageGrid imageGridItems={imageGridItems} />
    </>
  );
}
