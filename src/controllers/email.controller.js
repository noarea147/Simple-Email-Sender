require("dotenv").config();
const nodemailer = require("nodemailer");

exports.sendEmail = async (req, res) => {
  const email = req.body.email;
  const configs = req.body.smtp;
  const emailData = req.body.emailData;

  try {
    let transporter = nodemailer.createTransport({
      host: "contact@gazpromneft-oil.tn",
      port: 25,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "smtp@westchasemarket.com", // generated ethereal user
        pass: "QYpsq+a5!&e~" // generated ethereal password
      }
    });

    res.send("just saying hi");

    await transporter.sendMail({
      from: `${emailData.senderName} <smtp@westchasemarket.com>`, // sender address
      to: `${email}`, // list of receivers
      subject: `${emailData.subject}`, // Subject line
      html: `${emailData.emailBody}` // html body
    });

    res.status(200).json({
      message: "emails sent",
      data: [email],
      status: "success"
    });
  } catch (err) {
    res.status(500).json({
      message: "Error sending emails",
      error: err
    });
  }
};
exports.home = async (req, res) => {
  res.send("you are in the right place");
};
