const WebSocket = require('ws');
require('dotenv').config({path:'./dev.env'})
console.log("hit found1")

const PORT=process.env.PORT || 80
console.log("hit found2")
const wss = new WebSocket.Server( { port: 8082 });
console.log("hit found13")


wss.on("connection" , ws => {
    ws.on('message', function(message) {
        wss.clients.forEach(function (client) {
            if (client !== ws){
                client.send(message);
            }
        });
    });
    console.log("hit found41")

    ws.on("close", () => {
        console.log("client disconnected");
    });
    console.log("one more client connected");
});
