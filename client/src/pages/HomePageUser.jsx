import React from 'react'
import ChatLobby from '../components/ChatLobby.jsx'
import ChatRoom from '../components/ChatRoom.jsx';

const HomePageUser = () => {
  const [isActive, setIsActive] = React.useState("false");
  const activateChatRoom = JSON.parse(localStorage.getItem("activeChat"));
  return (
    <div>
      {activateChatRoom ? <ChatRoom/> : <ChatLobby/>}
    </div>
  )
}

export default HomePageUser