const axios = require("axios");

const mailSender = async (email, title, body) => {
  try {
    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "StudyNotion",
          email: process.env.MAIL_USER, // Your sender email
        },
        to: [
          {
            email: email,
          },
        ],
        subject: title,
        htmlContent: body,
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Brevo Email Info: ", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Brevo Email Error: ",
      error.response ? error.response.data : error.message
    );
    return null;
  }
};

module.exports = mailSender;
