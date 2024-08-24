import Link from "next/link";
import Container from "../components/container";
import Image from "next/image";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import { cookies } from 'next/headers';
import config from "@payload-config";
import CartItem from "./cartItem";


async function getCart(){
    const cookieStore = cookies();
    const payload = await getPayloadHMR({ config });
    const userId = cookieStore.get("_id")?.value;
    const productsData = await payload.find({
        collection: "cart",
        where: {
          customer: {
            equals: userId
          }
        }
      });
      return productsData
}

export default async function Cart(){
    const data: any = await getCart();
    const total = data.docs.reduce((acc:any, item:any) => {
        return acc + item.quantity * item.cart_product['product price'];
    }, 0);
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
            <h1 className="text-[48px] mb-[7px] text-black">Cart</h1>
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
              <span className="font-poppinslight">Cart</span>
            </p>
          </div>
        </div>
      </Container>
      <Container pl="pl-[100px]" pr="pr-[100px]" pt="pt-[72px]" pb="pb-[63px]">
        <div className="flex justify-start items-start gap-6">
       

        <div className="relative overflow-x-auto w-[60%] ">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-[#F9F1E7]">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            
                        </th>
                        <th scope="col" className="px-6 py-3">
                        Product
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Quantity
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Subtotal
                        </th>
                        <th>

                        </th>
                    </tr>
                </thead>
                <tbody>
                    {


                        data.docs.map((item: any, idx: number)=>{
                            if(item['quantity'] > 0){
                                return (
                                    <CartItem key={idx} id={item.id} pname={item.cart_product['product_name']} pprice={item.cart_product['product price']} pquant={item.quantity} image={item.cart_product['product image'].url}/>
                            );
                            }

                        })
                        
                    }
                    
                </tbody>
            </table>
           
        </div>
        <div className="pt-[15px] pr-[75px] pb-[80px] pl-[75px] flex flex-col justify-center items-center bg-[#F9F1E7] w-[40%]">
                <h4 className="text-[32px] font-poppinssemibold mb-[61px]">Cart Totals</h4>
                <div className="flex justify-between items-center w-full mb-[31px]">
                    <p>Subtotal</p>
                    <p>Rs. {total}</p>
                </div>
                <div className="flex justify-between items-center w-full mb-[48px]">
                    <p>Total</p>
                    <p>Rs. {total}</p>
                </div>
                <Link href={total > 0 ? "/orderpage": "/login"} className="border-[2px] border-black px-[59px] py-[14px] rounded-[15px]">Check Out</Link>
            </div>  

        </div>
      </Container>
       <div className="bg-[#FAF3EA]">
        <Container
          pl="pl-[53px]"
          pr="pr-[53px]"
          pt="pt-[100px]"
          pb="pb-[100px]"
          bgcolor="bg-[#FAF3EA]"
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
}