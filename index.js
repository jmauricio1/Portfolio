const express = require('express');
const bodyParser = require('body-parser');
const nodeMailer = require('nodemailer');
const cors = require('cors');
const { support } = require('jquery');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true});
app.use(cors());

app.get('/', () =>{
    resizeBy.send('Email Form');
})

app.post('/api/forma', (req, res) => {
    let data = req.body;
    let smtpTransport = nodeMailer.createTransport({
        service: 'Gmail',
        port: 465,
        auth: {
            user: 'joshua.mauricio1@gmail.com',
            pass: ''
        }
    });

    let mailOptions={
        from: data.email,
        to: 'joshua.mauricio1@gmail.com',
        subject: `Message from ${data.name}`,
        html:`<h3>Test Email</h3>
        <p>This is a test email just to see if the contact page is working</p>
        <p>${data.name}</p>
        <p>${data.message}</p>
        `
    }

    smtpTransport.sendMail(mailOptions, (error, response) =>{
        if(error){
            res.send(error);
        }
        else{
            res.send('Success')
        }
    })

    smtpTransport.close();
});