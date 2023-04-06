const express = require('express');
const router = express.Router();
const cors = require('cors');
const creds = require('./config');
const nodemailer = require('nodemailer');
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());

const transport =  {
	host: 'smtp.sendgrid.net',
	port: 465,
	auth: {
		user: 'apikey',
		pass: creds.APIKEY
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
	  name: req.body.name,
	  subject: req.body.subject,
	  email: req.body.email,
	  message: req.body.message,
	}
	const content = `Name: ${payload.name} \nSubject: ${payload.subject} \nE-mail: ${payload.email} \nComment: ${payload.message}`;
	const mail = {
		from: creds.USER,
		to: creds.USER,
		subject: 'New message from Contact Form',
		text: content,
	}
	transporter.sendMail(mail, (err, data) => {
		if(err){
			console.log('Something went wrong!', err.message);
			res.json({
				status: 'Failed!',
				err: err
			})
		} else {
			console.log('Sent successfully')
			res.json({
				status: 'Success!',
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
