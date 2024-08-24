"use client";


import { toast } from "@/components/ui/use-toast";
import Image from "next/image"
import { useRouter } from "next/navigation";
import { startTransition, useState } from "react";

export default function CartItem({id, pname, pprice, pquant, image}: {id: number, pname:string, pprice:number, pquant:number, image:string}) {
    const [changestate, setChangeState] = useState(false);
    const router = useRouter();
    const deleteItem = async(id: number) =>{
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
            setChangeState(false);
        }
    }
    return <>
         <tr className="bg-white" >
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <Image src={image} width={105} height={105} alt="product" className="h-[105px]"/>
            </th>
            <td className="px-6 py-4">
            {pname}
            </td>
            <td className="px-6 py-4">
            Rs. {pprice}
            </td>
            <td className="px-6 py-4">
            {pquant}
            </td>
            <td>
                Rs. {pprice * pquant}
            </td>
            <td>
                {changestate ? <div
  className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-black"
  role="status">
  <span
    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >Loading...</span>

</div> : <div onClick={()=>deleteItem(id)}><Image src={"/delete.svg"} width={28} height={28} alt="deletebtn" /></div>
}
</td>
        </tr>
    </>
}