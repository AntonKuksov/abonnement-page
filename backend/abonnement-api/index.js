import express from 'express'
import mongoose from 'mongoose'
import router from "./router.js";

const PORT = 8080;
const DB_URL = "mongodb+srv://antkuk123:qZqx8O2mgGlHFajY@cluster0.htev84w.mongodb.net/?retryWrites=true&w=majority";

const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()
