import Link from "next/link";
import Container from "../../components/container";
import Image from "next/image";

const Page = () => {
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
                stroke-width="3"
                stroke="currentColor"
                className="size-4 text-black"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
                stroke-width="3"
                stroke="currentColor"
                className="size-4 text-black"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          </p>
          <p className="p-[7px] border-l-[2px] border-bggray text-right pl-[34px] ">
            Asgaard sofa
          </p>
        </div>
      </Container>
      <Container pl="pl-[99px]" pr="pr-[100px]" pb="pb-[66px]" pt="pt-[35px]">
        <div className="flex justify-center items-center gap-[105px]">
          <div className="flex justify-center items-center gap-[32px]">
            <div>
              <Image
                src="/images/sofa.png"
                width="76"
                height="80"
                alt="sofa"
              ></Image>
            </div>
            <div></div>
          </div>
          <div></div>
        </div>
      </Container>
    </>
  );
};

export default Page;
