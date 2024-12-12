import nodemailer from "nodemailer"
import bcryptjs from "bcryptjs"

const SharingMailer = async () => {
    try {
        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "5832f6caafc9bd",
                pass: "1ec06c5bff684d"
            }
        });
    } catch (error) {
        console.error("Error sending verification email: ", error.message);
    }
}

export default SharingMailer