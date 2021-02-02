const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();

exports.email  = function (text, filename, path) {
// Sending the Mail request
    var transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: 587,
    secure: false,

    auth: {
          user: process.env.USER,
          pass: process.env.PASS
    },
    tls:{
        rejectUnauthorized:false
    }
    });

    const message = {
    from: process.env.FROM,
    to: process.env.TO,
    subject: 'test2',
    html: `<h1>This is the Test Mail!</h1><br> ${text}`,
    text: text,
    attachments: [{
        //Use the Url as an attachment
        filename: filename,       // We have to pass the filename 
        path: `./uploads/${path}`                  // Whe Hve to enter the file name in path here as THE PATH 
        }
    ]
    
    };
    
    transporter.sendMail(message, function (err, info) {
    if (err) console.log(err)
    else console.log(info); 
    });

};

