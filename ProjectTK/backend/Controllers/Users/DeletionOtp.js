import Users from "../../Modals/Users.js";
import bcryptjs from "bcryptjs";
import nodemailer from "nodemailer";

const DeletionOtp = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await Users.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ error: "User not found" });
    }

    if (existingUser.status === "BLOCKED") {
      return res
        .status(403)
        .json({ error: `Sorry ${existingUser.username}, You are Blocked` });
    }

    const isMatch = await bcryptjs.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Incorrect Password" });
    }

    const otp = Math.floor(1000 + Math.random() * 9000);

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
      subject: "Your Deletion OTP",
      text: `Your OTP is: ${otp}`,
      html: `<h1>OTP: ${otp}</h1>`,
    };

    const info = await transport.sendMail(MailSchema);
    console.log(info.response);

    if (info.accepted.length > 0) {
      const updatedUser = await Users.findOneAndUpdate(
        { email },
        {
          $set: {
            deletionOtp: otp,
            otpExpiry: new Date(Date.now() + 600000),
          },
        },
        { new: true }
      );

      if (!updatedUser) {
        return res
          .status(500)
          .json({ error: "Failed to update user with OTP" });
      }

      return res.status(200).json({ message: "OTP sent successfully" });
    } else {
      return res.status(500).json({ error: "Failed to send OTP email" });
    }
  } catch (error) {
    console.error("Error in DeletionOtp:", error);
    return res.status(500).json({ error: error.message });
  }
};

export default DeletionOtp;
