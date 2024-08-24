import { NextResponse } from 'next/server';
import config from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import { cookies } from 'next/headers';

export async function GET(request: Request) {
  const payload = await getPayloadHMR({ config });
  const cookieStore = cookies();
  const userId = cookieStore.get("_id")?.value;
  try {
    const customerData:any = await payload.findByID({
        collection: 'customers',
        id: userId || "",
      });
      if(customerData === null || customerData === undefined){
        return NextResponse.json({ message: "customer not found", isLogin : false });
      }
      else{
        const data = {
           
          };
          const productsData = await payload.find({
            collection: "cart",
            where: {
              customer: {
                equals: customerData.id
              }
            }
          });
          return NextResponse.json({ message: "fetched products", productsData});
      }

  } catch (error: any) {
    return NextResponse.json(
      { message: "Error fetching products", error: error.message },
      { status: 401 }
    );
  }
}
