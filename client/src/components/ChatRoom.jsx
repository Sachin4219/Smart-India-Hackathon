import React, { useEffect, useRef } from 'react';
import "./ChatComponent.css"
import { useParams } from 'react-router-dom';
import {createClient, createChannel} from "agora-rtm-react"
function ChatRoom() {
    const activeChat = JSON.parse(localStorage.getItem("activeChat"));
    console.log(activeChat);
    const [users, setUsers] = React.useState([]);

    const messageRef = useRef();

    const useClient = createClient('464529792cef4caebaf11147a252398d');
    const useChannel = createChannel(activeChat.channelName);
    const client = useClient();
    const currentChannel = useChannel(client);
    
    const login = async () => {
      await client.login({ uid: activeChat.userName })
      await currentChannel.join()
    }

    useEffect (() => {
        async function doSomething() {
            // await login()
            // currentChannel.getMembers().then(members => {
            //   setUsers(members)
            // })
            setUsers([...users, activeChat.userName])
            renderChannelData(currentChannel);
          } 
          doSomething()
          window.addEventListener('close', handleBeforeUnload);
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('close', handleBeforeUnload);
        };
    }, [])

    const handleBeforeUnload = async () => {
      await currentChannel.leave()
      localStorage.clear();
      }

    client.on("MeberJoined", (member) => {
      console.log(member)
    })



    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(messageRef.current.value);
        const message = client.createMessage({ text: messageRef.current.value, messageType: 'TEXT'})

        // currentChannel.sendMessage(message, senderId).then(() => {
        //   console.log("Message Sent: ", messageRef.current.value);
        //   messageRef.current.value = ''
        //   console.log(message)
          renderMessage({...message, senderId: activeChat.userName})
        // }).catch(error => { 
        //   console.log(error)
        // });
    } 

    function renderChannelData(channel) {
      console.log(channel)
      const { channelId} = channel
      console.log(channelId)
      document.querySelector('#room-name').textContent = channelId
      //add current username to user list
      const userList = document.querySelector('#users')
    }

    function renderMessageList() {
    
      // const messageList = currentChannel.messageList
      // messageList.forEach(message => {
      //   renderMessage(message)
      // })
    }

    function renderMessage(message) {
      const { messageType, text, senderId } = message
      const messageEl = document.createElement('div')
      messageEl.classList.add('message')
      if (messageType === 'TEXT') {
        messageEl.innerHTML = `
          <p class="meta">${senderId} <span>9:12pm</span></p>
          <p class="text">
            ${text}
          </p>
        `
      }
      document.querySelector('.chat-messages').appendChild(messageEl)
    }


    // currentChannel.on('ChannelMessage', (message, senderId) => {
    //   // const message = client.createMessage({ messageType, text, senderId })
    //   console.log(message)
    //   const { messageType, text} = message
    //   renderMessage({ messageType, text, senderId})
    // })

    const handleLeaveRoom = async () => {
      // await currentChannel.leave()
      localStorage.clear();
      window.location.href = "/user";
    }

    return (
    <div className='chatBody'>
    <div className="chat-container">
      <header className="chat-header">
        <h1><i className="fas fa-smile"></i> Chaton</h1>
        <a href="/user" className="btn" onClick = {() => handleLeaveRoom()}>Leave Room</a>
      </header>
      <main className="chat-main">
        <div className="chat-sidebar">
          <h3><i className="fas fa-comments"></i> Case ID:</h3>
          <h2 id="room-name"></h2>
          <h3><i className="fas fa-users"></i> Complainant / Respondent</h3>
          <ul id="users">
            {
              users.map((user, index) => {
                return (
                  <li key={index}>{user}</li>
                )
              })
            }
          </ul>
        </div>
        <div className="chat-messages"></div>
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