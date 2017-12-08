// http 模块
const http = require('http');

//http.Agent类
http.get(options, (res) => {
    // 处理事情
}).on('socket', (socket) => {
    socket.emit('agentRemove');
});