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

        const isMatch = await bcryptjs.compare(password, existingUser.password);
        if (!isMatch) {
            return res.status(401).json({ error: "Incorrect Password" });
        }

        const otp = Math.floor(1000 + Math.random() * 9000);

        const transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "5832f6caafc9bd",
                pass: "1ec06c5bff684d"
            }
        });

        const MailSchema = {
            from: 'tanishkk60@gmail.com',
            to: email,
            subject: "Your Deletion OTP",
            text: `Your OTP is: ${otp}`,
            html: `<h1>OTP: ${otp}</h1>`,
        };

        const info = await transport.sendMail(MailSchema);
        console.log(info.response)

        if (info.accepted.length > 0) {
            const updatedUser = await Users.findOneAndUpdate(
                { email },
                {
                    $set: {
                        deletionOtp: otp,
                        otpExpiry: new Date(Date.now() + 60000),
                    }
                },
                { new: true }
            );

            if (!updatedUser) {
                return res.status(500).json({ error: "Failed to update user with OTP" });
            }

            return res.status(200).json({ message: "OTP sent successfully" });
        } else {
            return res.status(500).json({ error: "Failed to send OTP email" });
        }
    } catch (error) {
        console.error("Error in DeletionOtp:", error);
        return res.status(500).json({ error: "Something went wrong" });
    }
};

export default DeletionOtp;
