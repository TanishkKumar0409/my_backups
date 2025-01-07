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
      host: "smtp-relay.brevo.com",
      port: 2525,
      auth: {
        user: "8224fa001@smtp-brevo.com",
        pass: "yYcAgGKSVm19Nw34",
      },
    });

    const MailSchema = {
      from: "tanishkk60@gmail.com",
      to: email,
      subject: "Verifier",
      text: "You Got Email With File Download Link",
      html: "<h1>Verify</h1>",
    };

    const info = await transport.sendMail(MailSchema);
    console.log(info.response);
  } catch (error) {
    console.log(error.message);
  }
};

export default VerifyMail;
