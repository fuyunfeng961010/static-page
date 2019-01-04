// 数据库连接
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '120.79.220.248',
    user: 'root',
    password: 'Fuyf961010',
    database: 'aly'
});

connection.connect((error, connection) => {
    if (error) {
        console.log("databases connect error",error)
    } else {
        console.log("databases connect success")
    }
});

// sql查询
exports.sqlQuery = function sqlQuery(sql,callBack) {
    connection.query(sql, function (error, result, fields) {
        if(error) throw error;
        callBack(result)
    });
}
