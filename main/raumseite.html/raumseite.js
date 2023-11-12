// raumseite.js
document.addEventListener("DOMContentLoaded", function () {
    const chatWindow = document.getElementById("chat-window");
    const messageInput = document.getElementById("message-input");

    function sendMessage() {
        const message = messageInput.value;
        if (message.trim() !== "") {
            displayMessage("Du: " + message);
            messageInput.value = "";
        }
    }

    function displayMessage(message) {
        const messageElement = document.createElement("div");
        messageElement.textContent = message;
        chatWindow.appendChild(messageElement);
        // Scroll nach unten, um die neueste Nachricht anzuzeigen
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    // Event Listener für die Enter-Taste, um Nachrichten zu senden
    messageInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    messageInput.placeholder = "Geben Sie Ihre Nachricht ein";

    // Event Listener für den "Senden"-Button, um Nachrichten zu senden
    const sendButton = document.getElementById("send-button");
    sendButton.addEventListener("click", sendMessage);
});
