import React, { useRef, useState } from 'react';
import "./ChatComponent.css"
import { useNavigate } from 'react-router-dom';

function ChatLobby() {
    const  navigator = useNavigate();

    const userName = useRef();
    const channelName = useRef();

    function submitHandler(e) {

        e.preventDefault();

        const  chatRoom = {
          userName: userName.current.value,
          channelName : channelName.current.value
        }
        userName.current.value = '';
        channelName.current.value = '';
        console.log(chatRoom)

        localStorage.setItem("activeChat", JSON.stringify(chatRoom));
        window.location.href = "/user";
      }

    return (
        <div className='chatBody'>
        <div className="join-container">
        <header className="join-header">
          <h1>Arbitration Portal </h1>
        </header>
        <main className="join-main">
          <form  onSubmit={(e) => submitHandler(e)}>
            <div className="form-control">
              <label htmlFor="username">Full name</label>
              <input
                type="text"
                name="userId"
                id="username"
                placeholder="Enter username..."
                required
                ref = {userName}
              />
            </div>
            <div className="form-control">
              <label htmlFor="room">Case ID</label>
              <input id="room" name="roomId" type="text" ref={channelName} required />
            </div>
            <button type="submit" className="btn">Join Chat</button>
          </form>
        </main>
      </div>
      </div>
    )
}

export default ChatLobby;