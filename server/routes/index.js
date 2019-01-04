var express = require('express');
var router = express.Router();
// var connect = require('../database.connect')
/* GET home page. */



/** 
 * admin 接口
 * @Fuyf 2019/01/03
 * */ 

// 用户登录
router.post('/admin/user/login', require('./admin/user/login').login)









/** 
 * applets 接口
 * @Fuyf 2019/01/03
 * */ 

// 获取小程序openid 和解码信息
router.post('/applets/getMyOpenid', function (req, res, next) {
	// 接收前端发送code  获取小程序 openid  &&  数据签名解密
	const Ut = require("../common/utils.js");
	try {
		let appId = "wx38e9f9835b60acec";
		let secret = "078870fc1288cc4ac0ffe7a4ec468347";

		let {js_code, encryptedData, iv, rawData, signature} = req.body;

		let opts = {
			url: `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${secret}&js_code=${js_code}&grant_type=authorization_code`
		}
		// let r1 = await Ut.promiseReq(opts);
		let r1 = Ut.promiseReq(opts);
		// r1 = JSON.parse(r1);

		r1.then(data => {
			data = JSON.parse(data);
			let session_key = data.session_key;
			// 数据签名解密
			let WXBizDataCrypt = require('../common/WXBizDataCrypt')
			const sha1 = require("sha1");

			// 数据签名校验
			let signature2 = sha1(rawData + session_key);
			if (signature != signature2) {
				return res.send({
					"data": "",
					"type": "error",
					"code": 2000,
					"message": "数据解密失败",
				})
			} 

			// 解密
			let pc = new WXBizDataCrypt(appId, session_key)

			// 解密后的数据 返回前端小程序
			let keyData = pc.decryptData(encryptedData, iv)

			res.send({
				"data": keyData,
				"type": "success",
				"code": 2000,
				"message": "数据解密成功",
			})
		})
	}
	catch (e) {
		console.log("error: ", e);
		res.send({
			"data": "",
			"type": "error",
			"code": 2001,
			"message": "意外的错误",
		})
	}
})


/* 路由重定向 */
router.get('/*', function (req, res, next) {
	res.render('index', {});
});

module.exports = router;
