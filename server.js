const sgMail = require('@sendgrid/mail')
const express = require('express');
const router = express.Router();
const cors = require('cors');
const creds = require('./config');

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());

router.post('/send', (req, res, next) => {
	const payload = {
	  name: req.body.yourName,
	  subject: req.body.subject,
	  email: req.body.email,
	  comment: req.body.comment,
	}
	const content = `Name: ${payload.name} \nSubject: ${payload.subject} \nE-mail: ${payload.email} \nComment: ${payload.comment}`;
	sgMail.setApiKey(creds.PASS)
	const msg = {
		from: creds.USER,
		to: creds.USER,
		subject: 'New message from Contact Form',
		text: content,
	}
	sgMail
		.send(msg)
		.then(() => {
			console.log('Email sent')
		})
		.catch((error) => {
			console.error(error)
		})
})
app.use('/api', router);

startServer = () => {
	app.listen(PORT)
	console.log(`Server running on ${PORT}`);
}

startServer();
