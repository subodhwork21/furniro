import { NextResponse } from 'next/server';
import config from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";


export async function GET(request: Request) {
  const payload = await getPayloadHMR({ config });
  try {
    const url = new URL(request.url);
    const docsParam = url.pathname.split('/').pop();
    const pageParam = url.pathname.split('/')[3];
    const currentPage = pageParam;
    const data = {
      collection: "products",
      page: parseInt(currentPage || "1"),
      limit: parseInt(docsParam || "4"),
      pagination: true, 
     
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
