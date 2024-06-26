import express from "express";
import bodyParser from "body-parser";
import slackrouter from './routes/slack.route.js'
import nodemailerroute from './routes/nodemailer.router.js'
import discordrouter from './routes/discord.route.js'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(bodyParser())
app.use('/' , slackrouter )
app.use('/', nodemailerroute)
app.use('/', discordrouter)
app.get('/', (req, res) => {
  res.json({ message: "Server running on port 5000" })
})

app.post('/send-email', (req , res)=>{
  
});




app.listen(5000, () => {
  console.log("server is running in 5000")
})