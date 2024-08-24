'use client';
import Image from "next/image";
import Container from "../components/container";
import Link from "next/link";
import convertToSubcurrency from "../lib/convertToSubcurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutPage from "../components/CheckoutPage";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function OrderPage(){
  const amount = 49.99;
    return <>
          <Container pl="pl-[0px]" pr="pr-[0px]" pt="pt-[0px]" pb="pb-[0px]">
        <div className="relative">
          <div className="bg-white opacity-30">
            <Image
              src={"/images/shop.jpg"}
              width={1440}
              height={316}
              className="object-cover w-[1440px] h-[316px]"
              alt="shop-image"
              unoptimized
            />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            <h1 className="text-[48px] mb-[7px] text-black">Checkout</h1>
            <p className="flex justify-center items-center gap-[4px]">
              <Link href={"/"}>
                <span className="font-poppinsmedium">Home</span>
              </Link>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
              <span className="font-poppinslight">Checkout</span>
            </p>
          </div>
        </div>
      </Container>

      <Container pb="pb-[86px]" pt="pt-[86px]" pl="pl-[38px]" pr="pr-[38px]">
        <div className="flex justify-start items-center w-1/3 mx-auto flex-col border-[1px] border-black p-8 shadow-lg">
        <div className="flex justify-between items-center w-full mb-[15px]">
            <p className="text-[24px]">Product</p>
            <p className="text-[24px]">Subtotal</p>
          </div>

          <div className="flex justify-between items-center w-full ">
            <p className="text-[16px] text-bggray">Asgaard sofa &times; 1</p>
            <p className="text-[16px]">Rs. 250,000.00</p>
          </div>

          <div className="flex justify-between items-center w-full mt-[22px]">
            <p className="text-[16px] text-black">Subtotal</p>
            <p className="text-[16px]">Rs. 250,000.00</p>
          </div>

          <div className="flex justify-between items-center w-full mt-[22px]">
            <p className="text-[16px] text-black">Total</p>
            <p className="text-[16px]">Rs. 250,000.00</p>
          </div>

          <button className="mt-[39px] rounded-[15px] border-[1px] border-black px-[102px] py-[17px]">Place order</button>
         
        </div>
         
        </Container>
        <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">Subodh</h1>
        <h2 className="text-2xl">
          has requested
          <span className="font-bold"> ${amount}</span>
        </h2>
      </div>

      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubcurrency(amount),
          currency: "usd",
        }}
      >
        <CheckoutPage amount={amount} />
      </Elements>
    </main>

      {/* <Container></Container> */}
    </>
}