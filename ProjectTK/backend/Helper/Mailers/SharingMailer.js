import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";
import { fileURLToPath } from "url";


const SharingMailer = async ({ email, downloadLink }) => {
    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);

        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "5832f6caafc9bd",
                pass: "1ec06c5bff684d"
            }
        });

        const templatePath = path.join(__dirname, "../../Templates/EmailTemplate.ejs");
        const htmlContent = await ejs.renderFile(templatePath, { downloadLink });

        const MailSchema = {
            from: 'tanishkk60@gmail.com',
            to: email,
            subject: "Shared Files Email",
            text: "You Got Email With File Download Link",
            html: htmlContent,
        }

        const info = await transport.sendMail(MailSchema);
        console.log(info.response)
    } catch (error) {
        console.error("Error sending verification email: ", error.message);
    }
}

export default SharingMailer