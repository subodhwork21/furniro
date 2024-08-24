'use client';

import { toast } from "@/components/ui/use-toast";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { cache, startTransition, useEffect, useState } from "react";

const ShoppingCart = ({modalFunc}:any) => {
    const [cartItem, setCartItem] = useState<any>([]);
    const [total, setTotal] = useState<number>(0);
    const [changestate, setChangeState] = useState<boolean>(false);
    const router = useRouter();

    useEffect(()=>{
        const cartProducts = async() => {
            const response = await fetch("/api/getcart", {
            });
            const result = await response.json();
            setCartItem(result.productsData.docs);
            const total = result.productsData.docs.reduce((acc:any, item:any) => {
                return acc + item.quantity * item.cart_product['product price'];
            }, 0);
            setTotal(total);
            setChangeState(false);
            return result;
        }
        cartProducts();
    },[changestate])

    const deleteCartItem = async(id:any) => {
        setChangeState(true);
        const response = await fetch("/api/deletecartitem/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
            body:  JSON.stringify({
                id: id
            }),
            
        });
        // console.log(response);
        const result = await response.json();
        console.log(result);
        if(result.success){
            toast({
                title: "item deleted",
                description: "",
              });
            
            startTransition(()=>{
                router.refresh();
            })
        }
    }

    return <>
    <div className="w-[430px] fixed right-0 top-0 h-[746px] bg-white pt-[28px] pb-[28px] pl-[27px] pr-[40px] z-[100000] shadow-lg">
        <div className="flex justify-between items-center mb-[26px]">
        <h4 className="font-poppinssemibold">Shopping Cart</h4>
        <Image src="/Group.svg" width={18} height={18} alt="lock" onClick={()=>modalFunc()}/>
        </div>
        <div className="w-[287px] h-[1px] bg-fontquaternary mb-[42px]">
        </div>
        <div className="overflow-scroll flex flex-col justify-start items-center gap-[20px] h-[440px] mb-[23px]">
            {
                cartItem && cartItem.map((item: any, idx:number)=>{
                    if(item['quantity'] > 0){
                        return (<div key={idx} className="flex justify-between items-center w-full">
                            <Image src={item.cart_product['product image'].url} width={108} height={108} alt="cart image" className="h-[108px] rounded-[10px]" unoptimized/>
                            <div>
                                <p className="text-[16px] font-poppinsregular">{item.cart_product['product_name']}</p>
                                <p>{item['quantity']}   &times;    Rs. <span className="text-primary">{item.cart_product['product price']}</span></p>
                            </div>
                            <Image src={"/crossSVG.svg"} width={20} height={20} alt="cross" onClick={()=> deleteCartItem(item.id)}/>
                        </div>);
                    }
                })
            }
           
        </div>
        <div className="flex justify-center items-center gap-[101px] w-full mb-[23px]">
            <p className="font-poppinsregular text-[16px]">Subtotal</p>
            {cartItem && <p className="text-[16px] text-primary">{total}</p>}
        </div>
        <hr className="mb-[26px]"/>
        <div className="flex justify-start items-center gap-[20px]">
            <Link href="/cart" className="border-[1px] border-black px-[30px] py-[6px] rounded-[50px]" onClick={()=>modalFunc()}>Cart</Link>
            <button className="border-[1px] border-black px-[30px] py-[6px] rounded-[50px]" onClick={()=>modalFunc()}>Checkout</button>
           {changestate ? <div
  className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-black"
  role="status">
  <span
    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >Loading...</span>
</div> : <></>}
        </div>
    </div>
    </>
}

export default ShoppingCart;