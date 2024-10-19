import { Resend } from "resend";
import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  const { data, error } = await resend.emails.send({
    from: "5TqkM@example.com",
    to: "wryvj@example.com",
    subject: "Hello World",
    react: WelcomeTemplate({ name: "Subash" }),
  });

  if (error) {
    return NextResponse.json(error, { status: 500 });
  }

  NextResponse.json(data, { status: 200 });
}
