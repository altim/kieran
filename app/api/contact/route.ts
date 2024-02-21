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

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error: any, success: unknown) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        resolve(success);
      }
    });
  });

  const mailOptions = {
    from: ACCOUNT,
    // to: ACCOUNT,
    to: "kieranhurley@me.com",
    subject: subject,
    text: otpText,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err: any, info: unknown) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        resolve(info);
      }
    });
  });
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
