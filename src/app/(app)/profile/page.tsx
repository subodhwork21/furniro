"use client";

import { useRouter } from "next/navigation";
import { startTransition, useEffect, useState } from "react";

const Page = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean | null>(false);
  const logoutUser = async () => {
    setLoading(null);
    try {
      const res = await fetch("/api/userlogout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (data) {
        startTransition(() => {
          router.refresh();
          setLoading(true);
        });
      }
    } catch (error) {
      setLoading(false);

      console.log(error);
    }
  };
  useEffect(() => {
    if (loading === true)
      setTimeout(() => {
        router.push("/");
      }, 0);
  }, [loading, router]);
  return (
    <div className="flex justify-center items-center h-[100px]">
      <button
        onClick={() => {
          logoutUser();
        }}
        className={` w-[150px] bg-primary h-[60px] z-[100] opacity-100 hover:bg-primary hover:transition-all hover:duration-500 text-white hover:text-white font-poppinssemibold`}
      >
        {loading === true || loading === null ? (
          <div className="flex flex-row gap-4 items-center justify-center">
            Signing off
            <div
              className="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          </div>
        ) : (
          "Logout"
        )}
      </button>
    </div>
  );
};

export default Page;
