import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/WelcomeBanner';
import Datepicker from '../components/Datepicker';
import ForumRightContent from '../partials/ForumRightContent';
import CaseInfo from '../partials/CaseInfo';

const HomePageUser = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      {/* <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} profile="User" subprofile="Victim" />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <WelcomeBanner profile="User" />
            <div className="direction sm:flex sm:justify-between sm:items-center mb-8" >

              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                  <span className="hidden xs:block ml-2">Group Conversation</span>
                </button>  
                <Datepicker align="right" />
              </div>
              <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">CASE INFORMATION</h1>
            </div>


          </div>
            {/* <div className="grid grid-cols-2">
              <CaseInfo/>
              <ForumRightContent />   
             
            </div> */}

         
            <div className="xl:flex">
              <div className="md:flex flex-1">
                <div className="flex-1 md:ml-8 xl:mx-4 2xl:mx-8">
                  <div className="md:px-10">
                      <CaseInfo/>
                  </div>
                </div>                
              </div>
              <div className="md:px-10">
                <ForumRightContent />          
              </div>
            </div>
        </main>

      </div>

    </div>
  );
}

export default HomePageUser;