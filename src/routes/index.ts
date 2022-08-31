import { Express } from "express"

import emailRoutes from "./email/email.routes"


const appRoutes = (app: Express) => {

    app.use("/email", emailRoutes())
}

export default appRoutes
