require("dotenv").config();

async function sendMail(subject: any, toEmail: any, otpText: any) {
  const PASSWORD = process.env["NODEMAILER_PW "];
  const ACCOUNT = process.env["NODEMAILER_EMAIL "];

  let nodemailer = require("nodemailer");
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
    from: "aleksandartimic@gmail.com",
    to: toEmail,
    subject: subject,
    text: otpText,
  };

  transporter.sendMail(
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
export default async function (req: { body: any }, res: any) {
  try {
    // @ts-ignore
    const { method } = req;
    switch (method) {
      case "POST": {
        await sendMail(
          "TEST",
          "aleksandartimic@gmail.com",
          "THI IS A TEST FOR MY MEDIUM USERS",
        );
        res.status(200).send("Success");
        break;
      }
      default:
        res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  } catch (err) {
    res.status(400).json({
      error_code: "api_one",
      message: err.message,
    });
  }
}
