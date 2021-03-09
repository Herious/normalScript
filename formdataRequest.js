//nodejs 发送form-data格式的请求
const request = require('request');
const fs = require('fs');

function sendMultipart(filePath) {
	const formData = {
		image: fs.createReadStream(filePath),
		name: 'test',
		time: '11:42:00'
	};
	let options = {
		method : 'POST',
		url : 'http://172.18.228.125:3000/attend/record',
		headers : { 'Content-Type' : 'multipart/form-data' },
		formData : formData
	};
	return new Promise((resolve, reject) => {
		request(options, (error, response, body) => {
			if (!error) {
				resolve(body);	
			} else {
				reject(error);
			}
		});
	});
}


sendMultipart('./1.jpg')
.then(data => {
	console.log(data);
})
.catch(error => {
	console.log(error);
})
