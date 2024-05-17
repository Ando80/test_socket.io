const io = require("socket.io")(3000, {
  cors: {
    origin: true, // true means to use any frontend.
  },
});

io.on("connection", (socket) => {
  socket.emit("chat-message", "bonjour le monde");
});
