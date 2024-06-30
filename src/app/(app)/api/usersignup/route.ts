import { NextResponse } from 'next/server';
import config from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import { Resend } from 'resend';
import { EmailTemplate } from '../../components/email_template';


const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const bcrypt = require( 'bcrypt');

  const payload = await getPayloadHMR({ config });

  try {
    let body = await request.json();

    if (
      !body ||
      !body.email ||
      !body.password 
    ) {
      return NextResponse.json(
        { message: "Missing required fields in the request body" },
        { status: 400 }
      );
    }

    const userData = {
      collection: "customers",
      data: {...body, isactive: "yes", emailverified: "no" },
    };
    const { id } = await payload.create(userData);
    if(id){
        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: ['subodhac.work@gmail.com'],
            subject: "Verify your email",
            react: EmailTemplate({ email: body.email, id: id }) as React.ReactElement,
          });
      
          if (error) {
            return Response.json({ error }, { status: 500 });
          }
      
    
        return NextResponse.json({ message: "User created successfully",data, id});
    }
  
  } catch (error: any) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { message: "Error creating user", error: error.message },
      { status: 500 }
    );
  }
}
