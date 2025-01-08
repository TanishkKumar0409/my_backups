import nodemailer from "nodemailer";
import Users from "../../Modals/Users.js";
import jwt from "jsonwebtoken";

const VerifyMail = async ({ username, email, emailType }) => {
  try {
    const verifyOTP = Math.floor(Math.random() * 9000 + 1000);

    if (emailType === "VERIFY") {
      await Users.findOneAndUpdate(
        { username },
        {
          $set: {
            verifyOTP: verifyOTP,
            verifyOtpExpiry: Date.now() + 3600000,
          },
        },
        { new: true }
      );
    }

    const transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "tanishkk60@gmail.com",
        pass: " ntij pdqd jzcn hycy",
      },
    });

    const verifyLink = `http://localhost:3000/verify/${username}`;

    const MailSchema = {
      from: "tanishkk60@gmail.com",
      to: email,
      subject: "Verifier",
      text: "You Got Email With File Download Link",
      html: `
      otp:${verifyOTP}
      <a href='${verifyLink}'>Verify</a>`,
    };

    const info = await transport.sendMail(MailSchema);
    console.log(info.response);
  } catch (error) {
    console.log(error.message);
  }
};

export default VerifyMail;
