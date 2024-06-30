import { NextResponse } from 'next/server';
import config from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";


export async function POST(request: Request) {
  const payload = await getPayloadHMR({ config });
  try {
    const body = await request.json();
    const userData = {
      collection: "customers",
      where: {
        id: {
          equals: body.id,
        },
      },
      data: {emailverified: "yes" },
    };
    const updatedCustomer = await payload.update(userData);
    return NextResponse.json({ message: "Email verified successfully", updatedCustomer});
  } catch (error: any) {
    return NextResponse.json(
      { message: "Error verifying user", error: error.message },
      { status: 401 }
    );
  }
}
