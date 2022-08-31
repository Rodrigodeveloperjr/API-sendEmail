import { Request, Response } from "express"
import { IEmailRequest } from "../interfaces"
import sendEmailService from "../services/sendEmail.service"


const sendEmailController = async (req: Request, res: Response) => {

    try {

        const { subject, text, to }: IEmailRequest = req.body
    
        await sendEmailService({ subject, text, to })

        return res.status(200).json({ message: "Email sended with success!" })
    
    } catch(err) {

        if(err instanceof Error) {

            return res.status(400).json({ message: err.message })
        }
    }
}

export default sendEmailController
