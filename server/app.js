var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// 数据库连接
// require('./database.connect')

var ejs=require('ejs');

var indexRouter = require('./routes/index');

var app = express();

// 解决跨域问题
// app.all('*',function (req, res, next) {
//   console.log("req.method", req.method)
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
//   res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
 
//   if (req.method == 'OPTIONS') {
//     res.send(200); /让options请求快速返回/
//   }
//   else {
//     next();
//   }
// });

// var httpServer = require('http').Server(app);

// var io = require('socket.io')(httpServer);

// httpServer.listen(9091);

// 服务端监听连接状态：io的connection事件表示客户端与服务端成功建立连接，它接收一个回调函数，回调函数会接收一个socket参数。
// io.on('connection',  (socket)=>{
  // console.log('client connect server, ok!');

  // io.emit()方法用于向服务端发送消息，参数1表示自定义的数据名，参数2表示需要配合事件传入的参数
  // io.emit('server message', {msg:'client connect server success'});

  // // socket.broadcast.emmit()表示向除了自己以外的客户端发送消息
  // socket.broadcast.emit('server message', {msg:'broadcast'});

  // // 监听断开连接状态：socket的disconnect事件表示客户端与服务端断开连接
  // socket.on('disconnect', ()=>{
  //   console.log('connect disconnect');
  // });
  
  // // 与客户端对应的接收指定的消息
  // socket.on('client message', (data)=>{
  //   console.log(data);// hi server
  // });

  // socket.disconnect();
// });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html',ejs.__express);//ejs能够识别后缀为’.html’的文件
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'views')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
