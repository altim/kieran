import { NextRequest, NextResponse } from "next/server";

async function sendMail(subject: any, otpText: any) {
  require("dotenv").config();
  const nodemailer = require("nodemailer");

  const PASSWORD = process.env["NODEMAILER_PW"];
  const ACCOUNT = process.env["NODEMAILER_EMAIL"];

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: ACCOUNT,
      pass: PASSWORD,
    },
    secure: true,
  });

  const mailOptions = {
    from: ACCOUNT,
    to: "ACCOUNT",
    // to: "kieranhurley@me.com",
    subject: subject,
    text: otpText,
  };

  transporter?.sendMail(
    mailOptions,
    function (error: string | undefined, info: any) {
      if (error) {
        throw new Error(error);
      } else {
        console.log("Email Sent");
        return true;
      }
    },
  );
}
export async function POST(request: NextRequest) {
  const formData = await request.json();

  try {
    await sendMail(
      `Contact form - personal website`,
      `Name: ${formData?.name}\nEmail: ${formData?.email}\n\n${formData?.message}`,
    );

    return NextResponse.json({ message: "OK" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "ERROR" }, { status: 500 });
  }
}
