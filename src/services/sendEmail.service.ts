import { createTransport } from "nodemailer"
import { IEmailRequest } from "../interfaces"
import "dotenv/config"


const sendEmailService = async ({ subject, text, to }: IEmailRequest) => {

    const transporter = createTransport({
        host: "smtp-mail.outlook.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    })

    await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: to,
        subject: subject,
        text: text
    })
    .then(() => console.log("Email send with success"))
    .catch(err => {
        console.log(err)
        
        throw new Error("Error sending email, try again later")
    })
}

export default sendEmailService
