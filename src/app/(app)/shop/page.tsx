"use client";
import Container from "../components/container";
import Image from "next/image";
import Link from "next/link";
import ProductItem from "../components/product_item";
import { useEffect } from "react";
import { useState } from "react";

const Page = () => {
  const [products, setProducts] = useState<any>([]);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number | string>("4");
  const [pagination, setPagination] = useState<any>({
    page: 0,
    limit: 0,
    nextPage: false,
    prevPage: false,
    totalDocs: 0,
  });
  useEffect(() => {
    const getProductsAll = async () => {
      try {
        const response = await fetch("/api/products/" + page + "/" + limit);
        const data = await response.json();
        setProducts(data.productsData);
        setPagination({
          page: data.productsData.page,
          limit: data.productsData.limit,
          nextPage: data.productsData.nextPage,
          prevPage: data.productsData.prevPage,
          totalDocs: data.productsData.totalDocs,
        });
      } catch (err) {
        console.log(err);
      }
    };
    getProductsAll();
  }, [page, limit]);
  return (
    <>
      <Container pl="pl-[0px]" pr="pr-[0px]" pt="pt-[0px]" pb="pb-[0px]">
        <div className="relative">
          <div className="bg-white opacity-30">
            <Image
              src={"/images/shop.jpg"}
              width={1440}
              height={316}
              className="object-cover w-[1440px] h-[316px]"
              alt="shop-image"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            <h1 className="text-[48px] mb-[7px] text-black">Shop</h1>
            <p className="flex justify-center items-center gap-[4px]">
              <Link href={"/"}>
                <span className="font-poppinsmedium">Home</span>
              </Link>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
              <span className="font-poppinslight">Shop</span>
            </p>
          </div>
        </div>
      </Container>
      <section className="pl-[100px] pr-[100px] pt-[23px] pb-[23px] flex justify-center items-center gap-[348px] bg-[#F9F1E7] font-poppinsregular">
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center gap-[15px] mr-[24px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
            <span className="text-[20px] font-poppinsregular">Filter</span>
          </div>
          <div className="flex justify-center items-center mr-[30px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
              />
            </svg>
          </div>
          <div className="flex justify-center items-center mr-[31.5px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"
              />
            </svg>
          </div>
          <p className="pl-[34px] border-l-[1px] border-black">
            <span className="font-poppinsregular">
              Showing 1–{page * Number(limit)} of {pagination.totalDocs} results
            </span>
          </p>
        </div>
        <div className="flex justify-center items-center gap-[29px]">
          <div className="flex justify-center items-center gap-[17px] ">
            <p>Show</p>
            <input
              className="bg-white  pt-[12px] pb-[12px] px-[18px] text-bggray w-[55px] h-[55px]"
              value={limit}
              onChange={(e) => setLimit(e.target.value)}
              placeholder="12"
              type="text"
            />
          </div>
          <div className="flex justify-center items-center gap-[17px]">
            <p>Sort by</p>
            <p className="bg-white  pt-[12px] pb-[12px] px-[18px] text-bggray">
              Default
            </p>
          </div>
        </div>
      </section>
      <Container pl="pl-[99px]" pr="pr-[105px]" pt="pt-[64px]" pb="pb-[85px]">
        <div className="flex justify-center items-center flex-col">
          <div className="grid grid-cols-4 gap-[32px] mb-[70px] place-content-center">
            {products?.docs &&
              products.docs.map((product: any, id: number) => (
                <ProductItem
                  key={id}
                  id={product.id}
                  image={product["product image"]}
                  name={product["product name"]}
                  description={product["product description"]}
                  price={product["product price"]}
                  prevprice={product["product price before discount"]}
                  type={product["product type"]}
                />
              ))}
          </div>
          {pagination.page > 0 ? (
            <div className="flex justify-center items-center gap-[38px]">
              {pagination.prevPage ? (
                <p
                  className="px-[27px] py-[15px] bg-[#F9F1E7] rounded-[10px] cursor-pointer"
                  onClick={() => setPage(pagination.page - 1)}
                >
                  Prev
                </p>
              ) : (
                ""
              )}
              {pagination.prevPage ? (
                <p
                  className="px-[27px] py-[15px] bg-[#F9F1E7] rounded-[10px] cursor-pointer"
                  onClick={() => setPage(pagination.prevPage)}
                >
                  {pagination.prevPage}
                </p>
              ) : (
                <></>
              )}
              <p className="px-[27px] py-[15px] bg-primary rounded-[10px] cursor-pointer text-white">
                {pagination.page}
              </p>
              {pagination.nextPage ? (
                <p
                  className="px-[27px] py-[15px] bg-[#F9F1E7] rounded-[10px] cursor-pointer"
                  onClick={() => setPage(pagination.nextPage)}
                >
                  {pagination.nextPage}
                </p>
              ) : (
                <></>
              )}

              {pagination.nextPage ? (
                <p
                  className="px-[27px] py-[15px] bg-[#F9F1E7] rounded-[10px] cursor-pointer"
                  onClick={() => setPage(pagination.page + 1)}
                >
                  Next
                </p>
              ) : (
                ""
              )}
            </div>
          ) : (
            <></>
          )}
        </div>
      </Container>
      <div className="bg-[#FAF3EA]">
        <Container
          pl="pl-[53px]"
          pr="pr-[53px]"
          pt="pt-[100px]"
          pb="pb-[100px]"
        >
          <div className="flex justify-between items-center flex-row">
            <div className="flex justify-center items-center gap-[13.61px]">
              <Image
                src={"/images/trophy.svg"}
                width={60}
                height={60}
                alt="trophy"
              />{" "}
              <div>
                <p className="text-[25px] font-poppinssemibold text-[#242424]">
                  High Quality
                </p>
                <p className="text-[20px] font-poppinsmedium text-[#898989]">
                  crafted from top materials
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-[13.61px]">
              <Image
                src={"/images/guarantee.svg"}
                width={60}
                height={60}
                alt="trophy"
              />{" "}
              <div>
                <p className="text-[25px] font-poppinssemibold text-[#242424]">
                  Warranty Protection
                </p>
                <p className="text-[20px] font-poppinsmedium text-[#898989]">
                  Over 2 years
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-[13.61px]">
              <Image
                src={"/images/shipping.svg"}
                width={60}
                height={60}
                alt="trophy"
              />{" "}
              <div>
                <p className="text-[25px] font-poppinssemibold text-[#242424]">
                  Free Shipping
                </p>
                <p className="text-[20px] font-poppinsmedium text-[#898989]">
                  Order over 150 $
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-[13.61px]">
              <Image
                src={"/images/customersupport.svg"}
                width={60}
                height={60}
                alt="trophy"
              />{" "}
              <div>
                <p className="text-[25px] font-poppinssemibold text-[#242424]">
                  24 / 7 Support
                </p>
                <p className="text-[20px] font-poppinsmedium text-[#898989]">
                  Dedicated support
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Page;
