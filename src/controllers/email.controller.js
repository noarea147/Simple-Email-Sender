require("dotenv").config();
const nodemailer = require("nodemailer");

const replaceString = (EmailBody, name) => {
  let newEmailBody = EmailBody.replace("[[name]]", name);
  return newEmailBody;
};

exports.sendEmail = async (req, res) => {
  let sendingLogs = [];
  const data = req.body.emails;
  const configs = req.body.smtp;
  const emailData = req.body.emailData;
 console.log(emailData)
  try {
    let transporter = nodemailer.createTransport({
      host: `${configs.host}`,
      port: 25,
      secure: false, // true for 465, false for other ports
      auth: {
        user: `${configs.user}`, // generated ethereal user
        pass: `${configs.pass}` // generated ethereal password
      }
    });

    for (i = 0; i < data.length; i++) {
      await transporter.sendMail({
        from: `${emailData.senderName} <contact@avoconsulte.com>`, // sender address
        to: `${data[i].email}`, // list of receivers
        subject: `${emailData.subject}`, // Subject line
        html: `${replaceString(emailData.emailBody, data[i].name)}` // html body
      });
      sendingLogs.push("email to " + data[i].email + " is sent");
    }
    res.status(200).json({
      message: "emails sent",
      data: sendingLogs,
      status: "success"
    });
  } catch (err) {
    res.status(500).json({
      message: "Error sending emails",
      error: err
    });
  }
};
