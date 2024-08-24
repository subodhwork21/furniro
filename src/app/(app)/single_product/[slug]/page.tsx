'use client'
import { cache, startTransition, useEffect, useState } from "react";
import Link from "next/link";
import Container from "../../components/container";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Page = ({ params }: any) => {
  const [singleProduct, setSingleProduct] = useState<any>([]);
  const [isInCart, setIsInCart] = useState<any>(false);
  const [quantity, setQuantity] = useState<any>(1);
  const [isLogin, setIsLogin] = useState<any>(false);
  const router = useRouter();

  useEffect(()=>{
    const getSingleProduct = async()=>{
      try {
        const response = await fetch(
          "/api/singleproduct/" + params.slug, 
        );
        const result = await response.json();
        // console.log(result);
        setSingleProduct(result.data.docs[0]);
        setIsInCart(result.isInCart);
        setQuantity(result.isLogin && result.isInCart ? result.quantity : 1);
      } catch (err) {
        // console.log(err);
      }
    }
    getSingleProduct();
  },[]);


  const addToCart = (e: any) => {
    e.preventDefault();
    const addToCarts = async()=>{
      try {
        const response = await fetch(
          "/api/addtocart",
          {
            method: "POST",
            body: JSON.stringify({
              product_slug: singleProduct.product_slug,
              quantity: quantity,
            }),
          }
        );
        const result = await response.json();
        setIsInCart(result.isInCart);
        setQuantity(result.isLogin && result.isInCart ? result.quantity : 1);
        if(result.isInCart){
          startTransition(() => {
            router.refresh();
          })
        }
      } catch (err) {
        // console.log(err);
      }
    }
    addToCarts();

  }


  return (
    <>
      <Container
        pl="pl-[99px]"
        pr="pr-[0px]"
        pt="pt-[32px]"
        pb="pb-[32px]"
        bgcolor="bg-[#F9F1E7]"
      >
        <div className="flex justify-start items-center gap-[25px]">
          <p className="flex justify-center items-center gap-[14px] text-bggray">
            <Link href={"/"}>Home</Link>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="3"
                stroke="currentColor"
                className="size-4 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          </p>
          <p className="flex justify-center items-center gap-[14px] text-bggray ">
            <Link href={"/shop"}>Shop</Link>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="3"
                stroke="currentColor"
                className="size-4 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          </p>
          <p className="p-[7px] border-l-[2px] border-bggray text-right pl-[34px] ">
            {singleProduct && singleProduct['product_name']}
          </p>
        </div>
      </Container>
      <Container pl="pl-[99px]" pr="pr-[100px]" pb="pb-[66px]" pt="pt-[35px]">
        <div className="flex justify-start items-start gap-[105.81px] mb-[58px]">
          <div className="flex justify-center items-center gap-[32px]">
            <div className="bg-[#F9F1E7] w-[419px] h-[500px] flex justify-center align-items-center" >
              <Image
                src={(singleProduct && singleProduct['product image'] && singleProduct['product image']['url']) || ""}
                width="419"
                height="500"
                alt="sofa"
              ></Image>
            </div>
           
          </div>
          <div className="flex justify-start items-start flex-col">
            <h3 className="text-[42px] font-poppinsregular">{singleProduct && singleProduct['product_name']}</h3>
            <p className="text-[24px] text-bggray mb-[16px]">Rs. {singleProduct && singleProduct['product price']}</p>
            <div className="flex justify-center items-center gap-[22px] mb-[13px]">
              <div className="flex justify-start items-center gap-[7px] ">
                  <Image src={"/starrating.svg"} width={20} height={20} alt="starrating"></Image>
                  <Image src={"/starrating.svg"} width={20} height={20} alt="starrating"></Image>
                  <Image src={"/starrating.svg"} width={20} height={20} alt="starrating"></Image>
                  <Image src={"/starrating.svg"} width={20} height={20} alt="starrating"></Image>
                  <Image src={"/halfstarrating.svg"} width={20} height={20} alt="halfstarrating"></Image>

              </div>
              <div className="h-[30px] w-[2px] bg-bggray">

              </div>
              <p className="text-bggray text-[13px] font-poppinsregular">
              5 Customer Review
              </p>
            </div>
            <p className="w-[424px] text-[13px] mb-[32px]">Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.

            </p>
            <div className="flex justify-start items-center gap-[18px] mb-[60px]">
              <input type="number" className="w-[123px] h-[64px] text-[20px] border-black border-[1px] rounded-[15px] pl-[30px]" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
              <button type="button" className="w-[215px] h-[64px] text-[20px] border-black border-[2px] rounded-[15px]" onClick={(e)=>addToCart(e)}>Add To Cart</button>
            </div>
            <div className="w-[605px] h-[2px] bg-[#D9D9D9] mb-[41px]"></div>
            <div>
              <div className="text-[#9F9F9F] flex justify-start items-center gap-[61px] mb-[12px]">
                <span>Category</span>
                <div className="flex justify-start items-center gap-[12px]">
                  <span>:</span>
                  <span>Sofas</span>
                </div>
              </div>
              <div className="text-[#9F9F9F] flex justify-start items-center gap-[61px]">
                <span>Share</span>
                <div className="flex justify-start items-center gap-[12px]">
                  <span>:</span>
                  <div className="flex justify-start items-center gap-[25px]">
                    <Image src={"/fb.svg"} width={20} height={20} alt="fb"></Image>
                    <Image src={"/linkedin.svg"} width={20} height={20} alt="linkedin"></Image>
                    <Image src={"/twitter.svg"} width={20} height={20} alt="twitter"></Image>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="pt-[48px] px-[100px]">
          <div className="w-full flex justify-center items-center gap-[52px] mb-[37px]">
            <h3 className="text-[24px] font-poppinsMedium">Description</h3>
            <h3 className="text-[24px] font-poppinsMedium text-bggray">Reviews</h3>
          </div>
          <div className="text-bggray text-[16px] font-poppinsregular">
            <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>

            <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
          </div>
        </section>
      </Container>

      <Container pt="pt-[55px]" pb="pb-[104px]" pl="pl-[100px]" pr="pr-[100px]">
          <h4 className="text-[36px] text-center font-poppinsmedium">Related Products</h4>
      </Container>
    </>
  );
};

export default Page;
