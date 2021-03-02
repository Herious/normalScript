var fs = require("fs");
var CryptoJS = require("crypto-js");

var key = '0123456789abcdef';   //密钥
key = CryptoJS.enc.Utf8.parse(key);//转换成128位

//加密
var beforeEncryptImagePath = 'images/701252204607273169/701252204607273169_290375.jpg';
var afterEncryptImagePath = 'images/701252204607273169/701252204607273169_290375.jpg';

fs.readFile(beforeEncryptImagePath, 'base64', function(err, data) {
	let encrypt = CryptoJS.AES.encrypt(data, key, {
		mode: CryptoJS.mode.ECB,
		padding: CryptoJS.pad.Pkcs7
  });
	encrypt = encrypt.toString();
	fs.writeFile(afterEncryptImagePath, encrypt, function(err, res) {
		if (err) {
			console.log(err);
		} else {
			console.log("写成功");
		}
	})
})

//解密
fs.readFile(afterEncryptImagePath, 'utf8', function(err, data) {
	let decrypt = CryptoJS.AES.decrypt(data, key, {
		mode: CryptoJS.mode.ECB,
		padding: CryptoJS.pad.Pkcs7
	});
	decrypt = CryptoJS.enc.Utf8.stringify(decrypt);
	decrypt = 'data:image/jpg;base64,' + decrypt.toString("base64");
	console.log(decrypt);
});
