const axios = require('axios').default;
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });

const db = require('./db/connection');

db.authenticate()
	.then(() => console.log('Database connected...'))
	.catch(err => console.log('Error: ' + err))

const URL = 'https://www.aliexpress.com/item/32953067218.html?spm=a2g01.12617084.fdpcl001.4.721cXo04Xo04dY&gps-id=5547572&scm=1007.19201.130907.0&scm_id=1007.19201.130907.0&scm-url=1007.19201.130907.0&pvid=f2fec853-bcff-45cf-86a9-be4185f8b38c';

async function getProduct() {
	try {
		const response = await axios.get(URL);
		const test = document.implementation.createHTMLDocument();
		test.append(response);
		/*const { data } = response;
		const price = data.split('\n').filter(elem => elem.includes('totalValue'))[0].split(':')[1];
		const title = data.split('\n').filter(elem => elem.includes('<title>'))[0];
		console.log(title);
		console.log(price); */bin
		const va = test.getElementsByTagName('title');
		console.log(va);
	} catch (error) {
		console.error(error);
	}
}

getProduct();
