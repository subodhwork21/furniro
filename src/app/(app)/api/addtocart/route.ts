import { NextResponse } from 'next/server';
import config from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const payload = await getPayloadHMR({ config });
  const cookieStore = cookies();
  const userId = cookieStore.get("_id")?.value;
  try {
    const body = await request.json();
    if(body.product_slug && userId){
      const product:any = await payload.find({
        collection: 'products',
        where: {
          product_slug: {
            equals: body.product_slug,
          },
        },
      });
      const customer:any = await payload.findByID({
        collection: 'customers',
        id: userId || "",
      });

      const cart:any = await payload.find({
        collection: 'cart',
        where: {
          customer: {
            equals: customer.id,
          },
          cart_product: {
            equals: product.docs[0].id
          }
        },
      });
      let quantity = body.quantity;
      let productQuantity = product.docs[0].quantity;
      if(productQuantity < quantity){
        quantity = productQuantity;
        return NextResponse.json({ message: "Not enough quantity", isInCart: false, quantity: quantity, isLogin: true});
      }
      else{
        const getCart = await payload.find({
          collection: 'cart',
          where: {
            customer: {
              equals: customer.id,
            },
          },
        });
        let totalQuantity = 0;
        getCart.docs.forEach((item:any) => {
          totalQuantity += item.quantity;
        });
       
        if(cart.docs.length > 0){
          const cartId = cart.docs[0].id;
          const cartUpdate = await payload.update({
            collection: 'cart',
            id: cartId,
            data: {
              quantity: quantity,
            },
          });
          cookies().set("cart", `${Number(totalQuantity) - Number(cart.docs[0].quantity) + Number(quantity)}`, { path: "/" }); 
          return NextResponse.json({ message: "Cart updated", isInCart: true, quantity: quantity, isLogin: true});
        }
        else{
          console.log(customer.id, product.docs[0].id, quantity);
          const cartCreate = await payload.create({
            collection: 'cart',
            data: {
              customer: userId,
             
              cart_product: product.docs[0].id,
              quantity: quantity,
            },
          });
          cookies().set("cart", `${Number(totalQuantity)  + Number(quantity)}`, { path: "/" }); 
          return NextResponse.json({ message: "Cart created", isInCart: true, quantity: quantity, isLogin: true});
        }
      }
  


    }
    if (!body.id || !userId) {
      return NextResponse.json(
        { message: "Not a valid user or product" },
        { status: 500 }
      );
    }

    const customer:any = await payload.findByID({
      collection: 'customers',
      id: userId || '', // Ensure userId is a string
    })

    const product:any = await payload.findByID({
      collection: 'products',
      id: body.id,
    });

    const cart:any = await payload.find({
      collection: 'cart',
      where: {
        customer: {
          equals: customer.id,
        },
        cart_product: {
          equals: product.id,
        }
      },
    });


    let exceeded = false;
    let productExistsInCart = false;
    let quantity:any = 1;
    if(cart.docs.length > 0) {
      productExistsInCart = true;
      quantity = cart.docs[0].quantity + 1;
      
      if(product.quantity < quantity) {
      
        exceeded = true;
      }
    }

    if(exceeded) {
      
      return NextResponse.json(
        { message: "Product quantity is more than original quantity", error: true },
        { status: 200 }
      );
    }

    
   

    const cartItem = {
      customer: customer.id,
      cart_product: product.id,
      quantity: quantity,
    };

    if(productExistsInCart && !exceeded) {
      const result = await payload.update({
        collection: 'cart',
        id: cart.docs[0].id,
        data: cartItem,
      });

      const getCart = await payload.find({
        collection: 'cart',
        where: {
          customer: {
            equals: customer.id,
          },
        },
      });
      let totalQuantity = 0;
      getCart.docs.forEach((item:any) => {
        totalQuantity += item.quantity;
      });
  
      cookies().set("cart", `${totalQuantity}`, { path: "/" }); 
  
      
      return NextResponse.json({
        message: "Product added to cart successfully",
        success: true,
        product: product,
        productExistsInCart: productExistsInCart,
        result: result,
      });
    }

    const result = await payload.create({
      collection: 'cart',
      data: cartItem,
    });

    const getCart = await payload.find({
      collection: 'cart',
      where: {
        customer: {
          equals: customer.id,
        },
      },
    });
    let totalQuantity = 0;
    getCart.docs.forEach((item:any) => {
      totalQuantity += item.quantity;
    });

    cookies().set("cart", `${totalQuantity}`, { path: "/" }); 

    
    return NextResponse.json({
      message: "Product added to cart successfully",
      success: true,
      product: product,
      productExistsInCart: productExistsInCart,
      result: result,
    });

    // return NextResponse.json({
    //   message: "Product added to cart successfully",
    //   product: product,
    // });

    // const productsIdFromCollection = (result.Cart && result.Cart.Cart_products) ? result.Cart.Cart_products.map((item: any) => ({ cart_product: item.cart_product.id, original_quantity: item.cart_product.quantity, cart_quantity: item?.cart_quantity })) : [];  
    // let productAlreadyInCart: boolean = productsIdFromCollection.some((item: any) => item.cart_product === body.id);
    // let productsIdFromCollectionAfterRemoved = productsIdFromCollection.filter((item: any) => item.cart_product!== body.id);
    // let productRemoved = productsIdFromCollection.filter((item: any) => item.cart_product === body.id);

    // if(productRemoved.length === 1 && (productRemoved[0].cart_quantity+1 > productRemoved[0].original_quantity)){
    //   return NextResponse.json(
    //     { message: "Product quantity is more than original quantity" },
    //     { status: 500 }
    //   );
    // }

    // const userData = {
    //   collection: "customers",
    //   data: {
    //     Cart: {
    //       Cart_products: !productAlreadyInCart ? [...productsIdFromCollection,  {
    //         cart_product: body.id,
    //         cart_quantity: 1
    //       }] : [...productsIdFromCollectionAfterRemoved, {
    //         cart_product:body.id,
    //         cart_quantity: productRemoved[0].cart_quantity + 1
    //       }]
    //   }},
    //   where: {
    //     id: {
    //       equals: userId
    //     },
    //   },
    // };

    // const user:any = await payload.update(userData);
    // let totalQuantity:any = 0;
    // user.docs[0].Cart.Cart_products.forEach((item: any)=>{
    //   totalQuantity += item.cart_quantity;
    // })
    
    // totalQuantity = `${totalQuantity}`
    // cookies().set("cart", user.docs && user.docs[0].Cart ?  totalQuantity: 0, { path: "/" }); 
    // return NextResponse.json({ message: "Product added to cart successfully", user, productExistsInCart:  productAlreadyInCart});

  } catch (error: any) {
    console.error("Error adding to cart:", error);
    return NextResponse.json(
      { message: "Error adding to cart", error: error.message },
      { status: 401 }
    );
  }
}