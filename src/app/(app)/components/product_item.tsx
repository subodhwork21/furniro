"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "../providers/Auth";
import { Toaster } from "@/components/ui/toaster";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
interface Customers {
  id: string;
  email: string;
}
import { startTransition, useEffect, useState } from "react";
import { log } from "console";
const ProductItem = ({
  id,
  image,
  name,
  description,
  prevprice,
  price,
  type,
}: {
  id: string;
  image: any;
  name: string;
  description: string;
  prevprice: string | undefined;
  price: string;
  type: string;
}) => {
  const { toast } = useToast();
  const router = useRouter();
  const { user } = useAuth();
  const [loading, setLoading] = useState<boolean | null | string>(false);
  let discount: string = type;
  if (prevprice === undefined) {
    discount = type != undefined ? type : "new";
  } else {
    discount = `${Math.round(((+prevprice - +price) / +prevprice) * 100)}`;
    if (discount === "0") {
      discount = type != undefined ? type : "new";
    } else {
      discount = "-" + discount + "%";
    }
  }

  async function addtocart(id1: string, name: string) {
    toast({
      title: "Adding an item to cart",
      description: "1 item",
    });
    setLoading(null);
    try {
      const res = await fetch("/api/addtocart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id1,
        }),
      });
      const data = await res.json();

      if (data.productExistsInCart) {
        startTransition(() => {
          toast({
            title: "1 more item " + name + " added to cart",
            description: "",
            // action: (
            //   <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            // ),
          });
          router.refresh();
          setLoading("existsAlready");
        });
      } else if (data) {
        startTransition(() => {
          toast({
            title: "1 item " + name + " added to cart",
            description: "1 item",
            // action: (
            //   <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            // ),
          });
          router.refresh();
          setLoading(true);
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (loading === true) {
      setLoading(false);
    }
  }, [loading]);

  return (
    <div className=" bg-tertiary overflow-hidden group">
      {loading === null || loading === true || <Toaster />}

      <div className="relative z-10">
        <Image
          className="mb-[16px] object-fill"
          src={image.url}
          width={image.width}
          height={image.height}
          alt="syltherine"
        />
        <div
          className={`h-[300px] absolute w-full px-[16px] z-[4] group top-0 left-0 flex justify-center items-center flex-col bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
        >
          <button
            onClick={() => addtocart(id, name)}
            className={` w-[202px] bg-white  h-[48px] z-[100] opacity-100 hover:bg-primary hover:transition-all hover:duration-500 text-primary hover:text-white font-poppinssemibold`}
          >
            {loading === true || loading === null
              ? "Adding to cart...."
              : "Add to cart"}
          </button>

          <div className="flex justify-between items-center text-white w-full mt-[24px]">
            <p className="cursor-pointer">
              <Image
                className="inline mr-[4px]"
                src={"/images/share.svg"}
                width={16}
                height={16}
                alt="share"
              />
              <span>Share</span>
            </p>
            <p className="cursor-pointer">
              <Image
                className="inline mr-[4px]"
                src={"/images/compare.png"}
                width={16}
                height={16}
                alt="compare"
              />
              <span>Share</span>
            </p>
            <p className="cursor-pointer">
              <Image
                className="invert inline mr-[4px]"
                src={"/images/heart.svg"}
                width={16}
                height={16}
                alt="heart"
              />
              <span>Share</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-left flex-col pl-[16px] pr-[20px] pt-[16px] pb-[30px]">
        <h5 className="font-poppinssemibold mb-[8px]">{name}</h5>
        <p className="font-poppinsmedium text-fontquaternary text-[16px] mb-[8px]">
          {description}
        </p>
        <div className="flex justify-between items-center ">
          <p className="text-[20px] font-poppinssemibold">Rs {price}</p>
          {prevprice != undefined ? (
            <p className="text-[16px] text-[#B0B0B0] line-through">
              Rs {prevprice}
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
      {discount != "none" ? (
        <p
          className={`w-[48px] h-[48px] rounded-full absolute top-[24px] right-[24px] ${
            discount != "new" ? "bg-bgred" : "bg-bggreen"
          } flex justify-center items-center text-white font-poppinsmedium capitalize`}
        >
          {" "}
          {discount}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProductItem;
