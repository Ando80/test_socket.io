const socket = io("http://localhost:3000");
const messageContainer = document.getElementById("message-container");
const messageForm = document.getElementById("send-container");
const messageInput = document.getElementById("message-input");

const name = prompt("what is your name?");
appendMessage("you joined");
socket.emit("new-user", name);

socket.on("chat-message", (data) => {
  appendMessage(data);
});

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = messageInput.value;
  socket.emit("send-chat-message", message);
  messageInput.value = "";
});

function appendMessage(message) {
  const messageElememt = document.createElement("div");
  messageElememt.innerText = message;
  messageContainer.append(messageElememt);
}
