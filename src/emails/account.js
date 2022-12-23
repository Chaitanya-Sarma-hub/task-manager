const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeMail = function (email, name) {
  sgMail.send({
    to: email,
    from: "iamsarma030@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
  });
};

const sendExitMail = function (email, name) {
  sgMail.send({
    to: email,
    from: "iamsarma030@gmail.com",
    subject: "Good Byes are tough",
    text: `We are sad to see you go ${name}. please spare a moment and let us know where we can improve. We hope to see u back sometime soon.`,
  });
};

module.exports = {
  sendWelcomeMail,
  sendExitMail,
};
