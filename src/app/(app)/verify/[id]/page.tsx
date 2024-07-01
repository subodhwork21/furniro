"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = ({ params }: { params: { id: string } }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const verifyEmail = async (id: string) => {
      try {
        const res = await fetch("/api/verify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: id,
          }),
        });
        const data = await res.json();
        setLoading(false);
      } catch (error) {
        console.log(error);
        router.push("/");
      }
    };
    verifyEmail(params.id);
  }, [params.id, router]);
  return loading ? (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  ) : (
    <>
      {" "}
      <div className="flex flex-col items-center justify-center h-screen w-full gap-4">
        <Image src="/images/logo.svg" width={100} height={100} alt="logo" />
        <h1 className="text-2xl font-bold">Your Email has been Verified</h1>
        <Link className="underline" href={"/login"}>
          Go to Login Page
        </Link>
      </div>
    </>
  );
};

export default Page;
