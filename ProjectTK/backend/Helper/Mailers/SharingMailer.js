import nodemailer from "nodemailer"

const SharingMailer = async ({ email, downloadLink }) => {
    try {
        var transport = nodemailer.createTransport({
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
            subject: "Shared Files Email",
            text: "You Got Email With File Download Link",
            html: `<a href=${downloadLink}>Download</a>`,
        }

        const info = await transport.sendMail(MailSchema);
        console.log(info)
    } catch (error) {
        console.error("Error sending verification email: ", error.message);
    }
}

export default SharingMailer