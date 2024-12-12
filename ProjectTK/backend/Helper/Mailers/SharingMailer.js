import nodemailer from "nodemailer"

const SharingMailer = async ({ SharingId, email }) => {
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
            html: `<a href='http://localhost:5000/api/share/download/${SharingId}'>Download</a>`,
        }

        const info = await transport.sendMail(MailSchema);
    } catch (error) {
        console.error("Error sending verification email: ", error.message);
    }
}

export default SharingMailer