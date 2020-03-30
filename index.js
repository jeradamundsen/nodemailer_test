const express = require('express')
const bodyParser = require( 'body-parser')
const nodemailer = require('nodemailer')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.post('/api/form', (req,res)=>{
  console.log(req.body)
  nodemailer.createTestAccount((err,account)=>{
    const htmlEmail=`
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    `
    let transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'carter.rau11@ethereal.email',
        pass: 'tjF6Kge9zyKrusQQ87'
      }
    })
    let mailOptions = {
      from: 'test@testaccountWetPussy.com',
      to: 'carter.rau11@ethereal.email',
      replyTo: 'test@testaccountWetPussy.com',
      subject: 'nodemailer testing',
      text: req.body.message,
      html: htmlEmail
    }
    transporter.sendMail(mailOptions, (eff, info)=>{
      if(err){
        return console.log(err)
      }
      console.log('message sent: %s', info.message)
      console.log('MessageUrl: %s', nodemailer.getTestMessageUrl(info))
    })
  })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, ()=>{
  console.log(`YO Coronavirus is fake server listening on port ${PORT} `)
})
