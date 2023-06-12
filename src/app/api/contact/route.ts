import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

export async function POST(request: NextRequest) {
  //Read the json body from the request
  const body = await request.json();
  //Send the email
  console.log(process.env.SENDGRID_API_KEY);
  sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");
  const msg = {
    to: "vishnupasuleti1234@gmail.com",
    from: "vishnu@vishnupasuleti.com",
    subject: "Contact Form Submission",
    text: `Name: ${body.name}\nEmail: ${body.email}\nMessage: ${body.message}`,
    html: `<p>Name: ${body.name}</p><p>Email: ${body.email}</p><p>Message: ${body.message}</p>`,
  };
  try {
    await sgMail.send(msg);
    return NextResponse.json({
      message: "Success!",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "Error!",
    });
  }
}
