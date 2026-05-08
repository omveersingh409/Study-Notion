require('dotenv').config();
const nodemailer = require("nodemailer");

async function testMail() {
    try {
        console.log("Host:", process.env.MAIL_HOST);
        console.log("User:", process.env.MAIL_USER);
        
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        let info = await transporter.sendMail({
            from: `"StudyByte" <${process.env.MAIL_USER}>`,
            to: process.env.MAIL_USER,
            subject: "Test Email",
            text: "This is a test email.",
        });

        console.log("Nodemailer Info: ", info);
    } catch (error) {
        console.error("Nodemailer Error: ", error);
    }
}

testMail();
