import Image from "next/image";
import Container from "../components/container";
const Footer = () => {
  return (
    <>
      <hr />
      <Container pl="pl-[100px]" pr="pr-[100px]" pt="pt-[48px]" pb="pb-[38px]">
        <div className="flex justify-between items-start border-b-[1px] border-black pb-[48px] mb-[35px]">
          <div>
            <Image
              className="mb-[50px]"
              src={"/images/funiro.svg"}
              width={85}
              height={36}
              alt="logo"
            ></Image>
            <p className="w-[285px] text-bggray">
              400 University Drive Suite 200 Coral Gables,
              <br /> FL 33134 USA
            </p>
          </div>
          <div className="flex flex-col gap-[45px] font-poppinsmedium text-[16px]">
            <p className="mb-[10px] text-bggray">Links</p>
            <p>Home</p>
            <p>Shop</p>
            <p>About</p>
            <p>Contact</p>
          </div>
          <div className="flex flex-col gap-[45px] font-poppinsmedium text-[16px]">
            <p className="mb-[10px] text-bggray">Help</p>
            <p>Payment Options</p>
            <p>Returns</p>
            <p>Privacy Policies</p>
          </div>
          <div>
            <p className="mb-[53px] text-bggray">Newsletter</p>
            <div className="text-[14px]">
              <input
                type="text"
                placeholder="Enter Your Email Address"
                className="outline-none border-b-[1px] border-black"
              />
              <span className="inline uppercase border-b-[1px] border-black ml-[48px]">
                Subscribe
              </span>
            </div>
          </div>
        </div>
        <p className="font-poppinsregular">2023 furino. All rights reverved</p>
      </Container>
    </>
  );
};

export default Footer;
