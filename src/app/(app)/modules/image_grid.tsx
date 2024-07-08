"use client";
import Image from "next/image";
import { ImageGallery } from "react-image-grid-gallery";

const ImageGrid = ({ imageGridItems }: { imageGridItems: any }) => {
  const imagesArray = imageGridItems.docs[0]["Grid Images Slides"].map(
    (image: any, id: number) => {
      return {
        alt: image.image.alt,
        caption: image.caption,
        src: image.image.url,
      };
    }
  );
  return (
    <section className="max-w-[1440px] mx-auto pt-[67px] pb-[50px]">
      <div className="flex justify-between items-center flex-col w-full mb-[32px]">
        <p className="text-[20px] font-poppinssemibold text-bgdark mb-[8px]">
          Share your setup with
        </p>
        <h3 className="font-poppinsbold">#FuniroFurniture</h3>
      </div>
      <ImageGallery
        imagesInfoArray={imagesArray}
        columnCount={"auto"}
        columnWidth={230}
        gapSize={24}
      />
    </section>
  );
};

export default ImageGrid;
