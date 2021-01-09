require('dotenv').config();
const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

io.on('connection', (socket) => {
    console.log('Connected');
    socket.on('message', (msg) => {
        console.log(msg);
        io.emit("message", msg);
    })
})