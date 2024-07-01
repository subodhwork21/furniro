import { NextResponse } from 'next/server';
import config from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import { cookies } from 'next/headers';
import { relationship } from 'payload/shared';

export async function POST(request: Request) {
  const payload = await getPayloadHMR({ config });
  const cookieStore = cookies();
  const userId = cookieStore.get("_id")?.value;
  try {
    const body = await request.json();
    if (!body.id || !userId) {
      return NextResponse.json(
        { message: "Not a valid user or product" },
        { status: 400 }
      );
    }
    const result:any = await payload.findByID({
      collection: 'customers',
      id: userId || '', // Ensure userId is a string
    })
    const productsIdFromCollection = (result.Cart && result.Cart.Cart_products) ? result.Cart.Cart_products.map((item: any) => ({ cart_product: item.cart_product.id, cart_quantity: item.cart_quantity })) : [];  
    let productAlreadyInCart: boolean = productsIdFromCollection.some((item: any) => item.cart_product === body.id);
    let productsIdFromCollectionAfterRemoved = productsIdFromCollection.filter((item: any) => item.cart_product!== body.id);
    let productRemoved = productsIdFromCollection.filter((item: any) => item.cart_product === body.id);
    const userData = {
      collection: "customers",
      data: {
        Cart: {
          Cart_products: !productAlreadyInCart ? [...productsIdFromCollection,  {
            cart_product:body.id,
            cart_quantity: 1
          }] : [...productsIdFromCollectionAfterRemoved, {
            cart_product:body.id,
            cart_quantity: productRemoved[0].cart_quantity + 1

          }]
        
      }},
      where: {
        id: {
          equals: userId
        },
      },
    };
    const user:any = await payload.update(userData);
    let totalQuantity:any = 0;
    user.docs[0].Cart.Cart_products.forEach((item: any)=>{
      totalQuantity += item.cart_quantity;
    })
    totalQuantity = `${totalQuantity}`
    cookies().set("cart", user.docs && user.docs[0].Cart ?  totalQuantity: 0, { path: "/" });
    return NextResponse.json({ message: "Product added to cart successfully", user, productExistsInCart:  productAlreadyInCart});

  } catch (error: any) {
    console.error("Error adding to cart:", error);
    return NextResponse.json(
      { message: "Error adding to cart", error: error.message },
      { status: 401 }
    );
  }
}
