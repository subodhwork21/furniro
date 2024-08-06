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
        <div className="flex justify-start items-start gap-[105.81px]">
          <div className="flex justify-center items-center gap-[32px]">
            <div className="bg-[#F9F1E7] w-[419px] h-[500px] flex justify-center align-items-center" >
              <Image
                src="/images/sofa.png"
                width="419"
                height="500"
                alt="sofa"
              ></Image>
            </div>
           
          </div>
          <div className="flex justify-start items-start flex-col">
            <h3 className="text-[42px] font-poppinsregular">Asgaard sofa</h3>
            <p className="text-[24px] text-bggray">Rs. 250,000.00</p>
            <div>
              <div>
                <div><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
</svg>
</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Page;
