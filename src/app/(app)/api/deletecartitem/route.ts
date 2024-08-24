import { NextResponse } from 'next/server';
import config from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import { cookies } from 'next/headers';


export async function POST(request: Request) {
  const payload = await getPayloadHMR({ config });
  const body = await request.json();
  const cookieStore = cookies();
  const userId = cookieStore.get("_id")?.value;
  try {
    const data = {
      collection: "cart",
        where: {
            id: {
                equals: body.id
            }
        }
    };
    const productsData = await payload.delete(data);
    const getCart = await payload.find({
        collection: 'cart',
        where: {
          customer: {
            equals: userId
          },
        },
      });
      let totalQuantity = 0;
      getCart.docs.forEach((item:any) => {
        totalQuantity += item.quantity;
      });
  
      cookies().set("cart", `${totalQuantity}`, { path: "/" }); 
    return NextResponse.json({ message: "deleted caritem", success: true});
  } catch (error: any) {
    return NextResponse.json(
      { message: "Error fetching products", error: error.message },
      { status: 401 }
    );
  }
}
