const { Server } = require("socket.io");

let io;

const initializeSocket = (server) => {
    io = new Server(server,{
        cors: {
            origin: "*"
        }
    });

    io.on("connection", (socket) => {
        socket.emit("socker:ready", {
            message: "WebSocket connection established."
        })
    })

    return io;
}

const emitTaskCreated = (task) => {
    if(!io){
        return;
    }

    io.emit("task:created", {
        message: "A new task was created.",
        data: { task }
    });
}

module.exports = { initializeSocket,  emitTaskCreated};