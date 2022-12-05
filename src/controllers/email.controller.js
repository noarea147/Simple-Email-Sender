require("dotenv").config();
const nodemailer = require("nodemailer");

exports.sendEmail = async (req, res) => {
  const data = req.body.emails;
  const configs = req.body.smtp;
  const emailData = req.body.emailData;

  try {
    let transporter = nodemailer.createTransport({
      host: "vps87356.inmotionhosting.com",
      port: 25,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "smtp@westchasemarket.com", // generated ethereal user
        pass: "oj?z_hpJLvny" // generated ethereal password
      }
    });

      await transporter.sendMail({
        from: `${emailData.senderName} <${configs.user}>`, // sender address
        to: `${data.email}`, // list of receivers
        subject: `${emailData.subject}`, // Subject line
        html: `${emailData.emailBody}` // html body
      });
    
    res.status(200).json({
      message: "emails sent",
      data: data.email,
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
  res.send("you are in the right place")
};
