const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');
const creds = require('./config');

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());

const transport =  {
	host: 'smtp.office365.com',
	port: 587,
	auth: {
		user: creds.USER,
		pass: creds.PASS
	}
}

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
	if(error){
		console.log(error.message);
    throw new Error(error.message)
	} else {
		console.log('Server is ready to take messages !');
	}
})

router.post('/send', (req, res, next) => {
  const payload = {
    name: req.body.yourName,
    subject: req.body.subject,
    email: req.body.email,
    comment: req.body.comment,
  }
	const content = `Name: ${payload.name} \nSubject: ${payload.subject} \nE-mail: ${payload.email} \nComment: ${payload.comment}`;
	const mail = {
		from: payload.name,
		to: creds.USER,
		subject: 'New message from Contact Form',
		text: payload.content
	}

	transporter.sendMail(mail, (err, data) => {
		if(err){
			res.json({
				status: "Failed!"
			})
		} else {
			res.json({
				status: "Success!"
			})
		}
	})
})
app.use('/api', router);


startServer = () => {
	app.listen(PORT)
	console.log(`Server running on ${PORT}`);
}

startServer();
