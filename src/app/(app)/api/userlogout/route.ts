import { NextResponse } from 'next/server';
import config from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import { cookies } from "next/headers";


export async function POST(request: Request) {
  const payload = await getPayloadHMR({ config });

  try {


    cookies().set("login", "", { path: "/" });
    cookies().set("_id", "", { path: "/" });
    cookies().set("cart", "", { path: "/" });


    return NextResponse.json({ message: "User logged out successfully" });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Error creating user", error: error.message },
      { status: 500 }
    );
  }
}
