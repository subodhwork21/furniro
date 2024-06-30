import Container from "../components/container";
import Image from "next/image";
import Link from "next/link";

const Header = ({
  login,
  userId,
  cartItem,
}: {
  login: string | undefined;
  userId: string | undefined;
  cartItem: any;
}) => {
  return (
    <Container
      pl={"pl-[54px]"}
      pt={"pt-[30px]"}
      pb={"pb-[30px]"}
      pr={"pr-[100px]"}
    >
      <nav className="flex justify-between items-center">
        <Image
          src={"/images/logo.svg"}
          width={185}
          height={41}
          alt="logo"
        ></Image>
        <ul className="flex text-[16px] justify-center items-center gap-x-[75px]">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/"}>Shop</Link>
          </li>
          <li>
            <Link href={"/"}>About</Link>
          </li>
          <li>
            <Link href={"/"}>Contact</Link>
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
          <div className="flex justify-center items-center relative">
            <Image
              src={"/images/cart.svg"}
              height={28}
              width={28}
              alt="cart"
            ></Image>
            <span>
              {cartItem && cartItem > 0 ? (
                <span className="absolute -top-[10px] -right-[10px] bg-primary text-white text-[12px] rounded-full w-[16px] h-[16px] flex justify-center items-center">
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
  );
};

export default Header;
