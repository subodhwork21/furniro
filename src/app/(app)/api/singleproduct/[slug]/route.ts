import { NextResponse } from 'next/server';
import config from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import { cookies } from 'next/headers';

export async function GET(request: Request, { params }: any) {
  const payload = await getPayloadHMR({ config });
  const slug = params.slug;
  const cookieStore = cookies();
  const userId = cookieStore.get("_id")?.value;
  try {
    const data = await payload.find({
      collection: "products",
      where: {
        product_slug: {
          equals: slug
        },
      },
    });

    let result = null;
    if(userId){
       result = await payload.find({
        collection: 'cart',
        where: {
          "cart_product.product_slug" : 
            {
              equals: slug
            },
            "customer.id": {
              equals: userId
            }
          }
      })
    }
    else{
      return NextResponse.json({ isLogin: false, data: data});
    }

    if(result.docs.length > 0){
      return NextResponse.json({ isLogin: true, data: data, isInCart: true, quantity: result.docs[0].quantity, id: result.docs[0].id});
    }
    else{
      return NextResponse.json({ isLogin: true, data: data, isInCart: false});
    }

    // return NextResponse.json({ message: "fetched products", customers: result});


  } catch (error: any) {
    return NextResponse.json(
      { message: "Error fetching products", error: error.message },
      { status: 401 }
    );
  }
}
