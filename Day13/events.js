// here we have to create the events your own
// we have to call the events

// eventEmitter

const {EventEmitter} = require("events");

const btn = new EventEmitter();

btn.on("click", (data) => {
    console.log(data);
});

btn.emit("click", "This is button click event");


class Chat extends EventEmitter{
    join(username) {
        this.emit("join", username);
    }

    leave(username) {
        this.emit("leave", username);
    }

    message(message) {
        this.emit("message", message);
    }
}

const chat = new Chat();

chat.on("join", (username) => {
    console.log(`${username} has joined the chat`);
})
chat.on("leave", (username) => {
    console.log(`${username} has leaved the chat`);
})
chat.on("message", (message) => {
    console.log(`${message}`);
})

chat.join("Sarvjyoti");
chat.message("Hello");
chat.leave("Sarvjyoti");

console.log(chat.eventNames());