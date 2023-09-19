import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/WelcomeBanner';
import Datepicker from '../components/Datepicker';
import DashboardCard10 from '../partials/UpdatesCard';
import CampaignsCard from '../partials/CampaignsCard';
import ChatLobby from '../components/ChatLobby.jsx'
import ChatRoom from '../components/ChatRoom.jsx';

const UserChat = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    
  const [isActive, setIsActive] = React.useState("false");
  const activateChatRoom = JSON.parse(localStorage.getItem("activeChat"));

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} profile="User" subprofile="Victim" />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <WelcomeBanner profile="User" />
            <div className="direction sm:flex sm:justify-between sm:items-center mb-8" >
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
             
                <Datepicker align="right" />
              </div>

            </div>
            <div>
               {activateChatRoom ? <ChatRoom/> : <ChatLobby/>}
            </div>
          </div>
        </main>

      </div>

    </div>
  );
}

export default UserChat;