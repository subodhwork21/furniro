'use client';
import Container from "../components/container";
import Image from "next/image";
import Link from "next/link";
import ShoppingCart from "./shopping_cart";
import { useState } from "react";

const Header = ({
  login,
  userId,
  cartItem,
}: {
  login: string | undefined;
  userId: string | undefined;
  cartItem: any;
}) => {
  const [cartModalOpen, setCartModalOpen] = useState<any>(false);
  const cartModal = (e: any) => {
    setCartModalOpen(true);
  };
  return (
    <>
    <Container
      pl={"pl-[54px]"}
      pt={"pt-[30px]"}
      pb={"pb-[30px]"}
      pr={"pr-[100px]"}
    >
      {cartModalOpen ? <ShoppingCart modalFunc = {()=>setCartModalOpen(false)}/> : ""}
      <nav className="flex justify-between items-center">
        <Image
          src={"/images/logo.svg"}
          width={185}
          height={41}
          alt="logo"
        ></Image>
        <ul className="flex text-[16px] justify-center items-center gap-x-[75px] md">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/shop"}>Shop</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
        <div className="flex justify-center items-center gap-x-[47.33px]">
          {login ? (
            <Link href={"/profile"}>
              <div className="w-10 h-10 rounded-full flex justify-center items-center border-[1px] border-primary">
                <Image
                  src={"/images/profile.png"}
                  height={28}
                  width={28}
                  alt="user"
                ></Image>{" "}
              </div>
            </Link>
          ) : (
            <Link href={"/login"}>
              {" "}
              <Image
                src={"/images/user.svg"}
                height={28}
                width={28}
                alt="user"
              ></Image>
            </Link>
          )}

          <Image
            src={"/images/search.svg"}
            height={28}
            width={28}
            alt="search"
          ></Image>
          <Image
            src={"/images/heart.svg"}
            height={28}
            width={28}
            alt="heart"
          ></Image>
          <div className="flex justify-center items-center relative z-[1000]" onClick={(e)=> cartModal(e)}>
            <Image
              src={"/images/cart.svg"}
              height={28}
              width={28}
              alt="cart"
            ></Image>
            <span>
              {cartItem && cartItem > 0 ? (
                <span className="absolute -top-[10px] -right-[10px] p-[10px] bg-primary text-white text-[12px] rounded-full w-[16px] h-[16px] flex justify-center items-center">
                  {cartItem}
                </span>
              ) : (
                ""
              )}
            </span>
          </div>
        </div>
      </nav>
    </Container>
    </>
  );
};

export default Header;
