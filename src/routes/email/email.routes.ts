import { Router } from "express"

import sendEmailController from "../../controllers/sendEmail.controller"


const routes = Router()

const emailRoutes = () => {

    routes.post("", sendEmailController)

    return routes
}

export default emailRoutes
