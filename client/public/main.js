// let App_id = "464529792cef4caebaf11147a252398d";
// let token = null;
// let uid = String(Math.floor(Math.random() * 10000));
// var uidmapper = {};
// let activeUsers = {};
// // Initialize Agora RTM

// const client = AgoraRTM.createInstance(App_id);
// let queryString = window.location.search;
// let channel;
// let urlParams = new URLSearchParams(queryString);
// let roomId = urlParams.get("roomId");
// let userId = urlParams.get("userId");

// // const { userId, roomId } = Qs.parse(location.search, {
// //   ignoreQueryPrefix: true,
// // });

// const chatform = document.getElementById("chat-form");
// const chatMessages = document.querySelector(".chat-messages");
// const roomName = document.querySelector("#room-name");
// const usersList = document.querySelector("#users");

// function outputRoomName(room) {
//   roomName.innerText = room.room;
// }

// function outputUsers(users) {
//   usersList.innerHTML = `
//           ${users.map((user) => `<li>${user.username}</li>`).join("")}
//       `;
// }

// // Log in to Agora RTM with a unique user ID
// function init() {
//   client
//     .login({ uid, token })
//     .then(() => {
//       // Create a channel for messaging
//       channel = client.createChannel(roomId);
//       activeUsers[`${roomId}`] = [];
//       // Join the channel
//       return channel.join();
//     })
//     .then(() => {
//       // Send a text message
//       activeUsers[`${roomId}`].push({ username: userId });
//       outputRoomName({ room: roomId });
//       outputUsers(activeUsers[`${roomId}`]);
//       const message = "Hello i am " + userId;
//       channel.sendMessage({ text: message }, userId);

//       // Receive text messages
//       channel.on("ChannelMessage", ({ text }, senderId) => {
//         // Handle incoming messages
//         console.log(senderId);
//         if (text.includes("Hello i am ")) {
//           uidmapper[senderId] = text.slice(11);
//         }

//         displayMessage({
//           text,
//           username: uidmapper[senderId], // Use senderId as the username
//           time: Date.now(),
//         });
//       });
//     })
//     .catch((error) => {
//       console.error("Agora RTM error:", error);
//     });
// }

// function displayMessage(message) {
//   const div = document.createElement("div");
//   div.classList.add("message");
//   div.innerHTML = `
//                           <p class="meta">${message.username} <span> ${message.time}</span></p>
//                           <p class="text">
//                               ${message.text}
//                           </p>
//                       `;
//   document.querySelector(".chat-messages").appendChild(div);
// }

// chatform.addEventListener("submit", (e) => {
//   e.preventDefault();

//   //get message text
//   const message = e.target.elements.msg.value;
//   e.target.elements.msg.value = "";

//   //emiting a message to server
//   channel.sendMessage({ text: message }, userId);
//   displayMessage({
//     text: message,
//     username: userId,
//     time: Date.now(),
//   });
// });
