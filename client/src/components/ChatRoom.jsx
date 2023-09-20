import React, { useEffect, useRef, useState } from 'react';
import "./ChatComponent.css"
import { useParams } from 'react-router-dom';
import {createClient, createChannel} from "agora-rtm-react"
import io from "socket.io-client";
function ChatRoom() {
    //create message ref

    const [users, setUsers] = useState([]);
    const [messages, setMessages] = useState([]);
    const [roomName, setRoomName] = useState("");
    const [userName, setUserName] = useState("");

    // const socket = io("https://nodesocket4219.onrender.com");
    const socket = io("http://localhost:4000")

    const activeChat = JSON.parse(localStorage.getItem("activeChat"));
    console.log(activeChat);

    const messageRef = useRef();

    useEffect(() => {
      setRoomName(activeChat.caseId)
      setUserName(activeChat.userName)
      socket.emit("joinRoom", { username:activeChat.userName, room:activeChat.caseId });
    }, []);

    const submitHandler = (e) => {
      e.preventDefault();
      const message = messageRef.current.value;
      socket.emit("chatMessage",{username:activeChat.userName, message, room:activeChat.caseId});
      messageRef.current.value = "";
    };

    socket.on("roomUsers", (room, users) => {
      setUsers(room.users);
    });

    socket.on("message", (message) => {
      console.log(message.text, message.username, message.time);
      setMessages((state) => [
        ...state,
       message,
      ]);
      // console.log("New arer",newArr)
    });

    const handleLeaveRoom = () => {
      localStorage.clear()
      socket.emit("disconnect", activeChat.userName, activeChat.caseId);
      window.location.href = "/user/chat"
    }
    // console.log("Messages",messages)
    return (
    <div className='chatBody'>
    <div className="chat-container">
      <header className="chat-header">
        <h1>Arbitration portal</h1>
        <a href="/user" className="btn" onClick = {() => handleLeaveRoom()}>Leave Room</a>
      </header>
      <main className="chat-main">
        <div className="chat-sidebar">
          <h3><i className="fas fa-comments"></i> Case ID:</h3>
          <h2 id="room-name">{
            roomName.length > 0 ? roomName : activeChat.caseId
          }</h2>
          <h3><i className="fas fa-users"></i> Complainant / Respondent</h3>
          <ul id="users">
            {
              users.map((user, index) => {
                return (
                  <li key={index}>{user.username}</li>
                )
              })
            }
          </ul>
        </div>
        <div className="chat-messages">
          {
            messages.map((message, index) => {
              return (
                <div key={index} className="message">
                  <p className="meta">{message.username} <span>{message.time}</span></p>
                  <p className="text">
                    {message.text}
                  </p>
                  </div>
              )
            })
          }
        </div>
      </main>
      <div className="chat-form-container">
        <form id="chat-form" onSubmit={(e) => submitHandler(e)}>
          <input
            id="msg"
            type="text"
            placeholder="Enter Message"
            required
            autoComplete="off"
            ref={messageRef}
          />
          <button className="btn"><i className="fas fa-paper-plane"></i> Send</button>
        </form>
      </div>
    </div>
      </div>
    )
}

export default ChatRoom;