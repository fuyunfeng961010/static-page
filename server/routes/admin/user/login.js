// var connection = require('../../mysqlConnect')

// 用户登录
exports.login = function login(req, res, next) {
    let reqData = req.body;

    connection.sqlQuery('SELECT * FROM user where userName=' + '"' + reqData.userName + '"', (sqldata) => {
        if (sqldata.length > 0) {
            if (reqData.password == sqldata[0].password) {
                res.send({
                    "type": "success",
                    "code": 2000,
                    "message": "登陆成功",
                })
            } else {
                res.send({
                    "type": "error",
                    "code": 2001,
                    "message": "密码错误",
                })
            }
        } else {
            res.send({
                "type": "error",
                "code": 2001,
                "message": "用户不存在",
            })
        }
    })
}   