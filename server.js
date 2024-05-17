const io = require("socket.io")(3000, {
  cors: {
    origin: true,
  },
});

io.on("connection", (socket) => {
  console.log("new user");
  socket.on("send-chat-message", (message) => {
    socket.broadcast.emit("chat-message", message);
  });
});
