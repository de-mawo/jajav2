import nodemailer from 'nodemailer'
import sparkPostTransport from 'nodemailer-sparkpost-transport'




const sendMail = async (options: { email: string; subject: string;  html: any; }) => {
    const sparkPostApiKey = process.env.SPARKPOST_API_KEY;
    // 1) Create a transporter
    const transporter = nodemailer.createTransport(sparkPostTransport(sparkPostApiKey));
  
    // 2) Define the email options
    const mailOptions = {
        from: "Jaja App <info@app.jajaapp.co.za>",
        to: options.email,
        subject: options.subject,
        html: options.html,
    };
  
    // 3) Actually send the email
    await transporter.sendMail(mailOptions);
  };
  
  export default sendMail;