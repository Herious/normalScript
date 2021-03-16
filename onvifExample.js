const onvif = require('onvif')
const Cam = require('onvif').Cam;


getCam('172.18.228.140','admin','FeiShiZhiRen').then(camera=>{

	camera.getSystemDateAndTime((err, data)=>{
		console.log(getFormatDate(data));
	})

	// camera.getProfiles((err, data)=>{
	// 	console.log(data);
	// })

	camera.getOSDs((err, data)=>{
		console.log(data.getOSDsResponse.OSDs);
	})

	// for(key in camera) {
	// 	if (typeof camera[key] == 'function') {
	// 		console.log(key);
	// 	}
	// }

}).catch(err=>{
  console.log(err);
})

function getFormatDate(formatDate) {
	var date = new Date(formatDate);
	var year = date.getFullYear();
	var month = prefixZero2(date.getMonth() + 1);
	var strDate = prefixZero2(date.getDate());
	var hours = prefixZero2(date.getHours());
	var minutes = prefixZero2(date.getMinutes());
	var seconds = prefixZero2(date.getSeconds());
	var currentDate = year + "-" + month + "-" + strDate + " " + hours + ":" + minutes + ":" + seconds;
	return currentDate;
}

function prefixZero(num, n) {
	return (Array(n).join(0) + num).slice(-n);
}


function prefixZero2(num) {
	return prefixZero(num, 2)
}


function getCam(ip, user, pass){
	var t = ip.indexOf(':');
	var port, host;
	if(ip.indexOf(':') != -1){
		port = parseInt(ip.slice(ip.indexOf(':') + 1) ) ;
		host = ip.slice(0, ip.indexOf(':'));
	}else{
		port = 80;
		host = ip;
	}
	return new Promise((resolve,reject)=>{
		new Cam({ hostname: host, username: user, password: pass, port }, function(err) {
			if (err) {
				reject(err)
			}
			var camera = this;
			resolve(camera)
		})
	})
}