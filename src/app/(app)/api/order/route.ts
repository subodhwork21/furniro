import { NextResponse } from 'next/server';
import config from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import { cookies } from "next/headers";



export async function POST(request: Request) {

  const payload = await getPayloadHMR({ config });
  const cookieStore = cookies();
  const userId = cookieStore.get("_id")?.value;

  try {
    let body = await request.json();

    if (!body || !body.amount) {
      return NextResponse.json(
        { message: "Missing required fields in the request body" },
        { status: 400 }
      );
    }
    const cartData:any = await payload.find({
        collection: 'cart',
        where: {
          customer: {
            equals: userId
          },
        },
      });
      cartData.docs.forEach(async (item: any)=>{
        const result = await payload.create({
            collection: 'orders',
            data: {
                order_product: item.cart_product.id,
                order_quantity: item.quantity,
                order_user: userId,
                order_status: "pending",
                order_date: new Date(),
            },
          });
      })
      const deleteCart = await payload.delete({
        collection: 'cart',
        where: {
          customer: {
            equals: userId
          },
        },
      });
      return NextResponse.json({ message: "Order placed successfully", success: true });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Error creating user", error: error.message },
      { status: 500 }
    );
  }
}