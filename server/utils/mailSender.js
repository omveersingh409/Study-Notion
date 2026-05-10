const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      connectionTimeout: 10000, // fail after 10 seconds instead of hanging
    });

    let info = await transporter.sendMail({
      from: `"StudyByte" <${process.env.MAIL_USER}>`,
      to: `${email}`,
      subject: `${title}`,
      html: `${body}`,
    });

    console.log("Nodemailer Info: ", info);
    return info; // This must be returned for OTP.js to see it
  } catch (error) {
    console.error("Nodemailer Error: ", error.message);
    return null; // Return null so the calling function knows it failed
  }
};

module.exports = mailSender;
