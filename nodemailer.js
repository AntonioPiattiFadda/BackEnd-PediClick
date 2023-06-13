const nodemailer = require('nodemailer');
const { config } = require('./config/config');
async function sendMail() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing

  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    // ACA DICE EL SERVICIO DE MAIL QUE VA A USAR. OsEA COMO VA A SER EL TRANSPORTE
    host: 'smtp.gmail.com',
    port: 465,
    // PODEMOS CAMBIAR EL PUERTO
    secure: true, // true for 465, false for other ports
    auth: {
      user: config.nodeMailUser,
      pass: config.nodeMailPassword,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: config.nodeMailUser, // sender address
    to: config.nodeMailUser, // list of receivers
    subject: 'Holisssss desde la nueva cuenta', // Subject line
    text: 'Hello worlsdfd?', // plain text body
    html: '<b>Hello worlsdfd?</b>', // html body
  });

  console.log('Message sent: %s', info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

sendMail().catch(console.error);
