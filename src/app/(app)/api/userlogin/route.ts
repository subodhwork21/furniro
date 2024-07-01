import { NextResponse } from 'next/server';
import config from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import { cookies } from "next/headers";



export async function POST(request: Request) {

  const payload = await getPayloadHMR({ config });

  try {
    let body = await request.json();

    if (!body || !body.email || !body.password) {
      return NextResponse.json(
        { message: "Missing required fields in the request body" },
        { status: 400 }
      );
    }
    const userData = {
      collection: "customers",
      data: body,
      where: { emailverified: "yes" },
    };
  
    const { token, user } = await payload.login(userData);
    let totalQuantity:any = 0;
    user.Cart.Cart_products.forEach((item: any)=>{
      totalQuantity += item.cart_quantity;
    })
    totalQuantity = `${totalQuantity}`
    if (token) {
     
      cookies().set("login", token, { path: "/" });
      cookies().set("_id",user.id.toString(), { path: "/" });
      cookies().set("cart", user && user.Cart ?  totalQuantity: 0, { path: "/" });
    }

    return NextResponse.json({ message: "User logged in successfully", token, email:body.email });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Error creating user", error: error.message },
      { status: 500 }
    );
  }
}