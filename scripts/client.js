const Server = require('ws').Server;
const moment = require('moment');
// 定义websocket服务器实例
const wsServer = new Server({ port: 8085 });
  
// 监听服务器端连接
wsServer.on('connection', socket => {
    console.log('服务端建立连接');
    socket.on('message', function (message) {
        console.log('服务端接受到的消息', message);
 
        setInterval(() => {
            const time = moment(new Date()).format('YYYY-MM-DD hh:mm:ss');
            socket.send(time);
        }, 1000);
    })
});
