# FileUpload & Email with NODE.js
## The Packages that are required are **Express**, **Body-Parser**, **Dotenv**, **Multer**, **NodeMailer**, **Nodemon**, **EJS**, **Formidable**

All The Files are self-sufficient All you need is to pass the environmetal variables and change some vairable that are defined the in the code 

### The Env That You have to pass 
- USER: The Username for the SMTP server
- PASS: The Password for the SMTP server 
- HOST: Hostname for the SMTP server
- TO: Reciever's Email Address
- FROM: Sender's Email Address

These variables are used in the email.js

email.js can be used independently by calling the function and passing the following parameters 
- text: The Text message that You Want tp send
- filename: This will set the filename for the uploading file, If you wished to send only message then youy have to make changes in email.js 
- path: It's kind of hardcoded but you can change it in thee email.js file It carry the name of the file that you want to upload

## Things You need to take care of in upload.js file 

`router.post('/upload',upload.single('myFile'), (req, res, next) => { `
the `upload.single('myFile')` You have to make sure that `myFile` is the name for the uploading form input type you can check the `index.ejs` for ref.


### Uploading The File 
When You are using the uploading feature then this will create a folder with name `upload` in the same directory You can change it in `upload.js`
