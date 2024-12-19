import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";
import { fileURLToPath } from "url";


const SharingMailer = async ({ email, downloadLink }) => {
    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);

        const transport = nodemailer.createTransport({
            host: "smtp-relay.brevo.com",
            port: 2525,
            auth: {
                user: "8224fa001@smtp-brevo.com",
                pass: "yYcAgGKSVm19Nw34"
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