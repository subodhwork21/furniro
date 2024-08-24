import { NextResponse } from 'next/server';
import config from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";


export async function GET(request: Request) {
  const payload = await getPayloadHMR({ config });
  
  try {
  
    const data = {
      collection: "products",
     
    };
    const productsData = await payload.find(data);
    return NextResponse.json({ message: "fetched products", productsData});
  } catch (error: any) {
    return NextResponse.json(
      { message: "Error fetching products", error: error.message },
      { status: 401 }
    );
  }
}
