const mailer = require("./mailer");

mailer.sendMail(
  {
    from: "youcefboutrig92@outlook.fr",
    to: "desaresta5@gmail.com",
    subject: "Challenge",
    text: "Challenge",
    html: "<p>This was my challenge</em></p>",
  },
  (err, info) => {
    if (err) console.log(err);
    else console.log(info);
  }
);
