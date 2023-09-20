import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/WelcomeBanner';
import Datepicker from '../components/Datepicker';
import ForumRightContent from '../partials/ForumRightContent';
import CaseInfo from '../partials/CaseInfo';

const CaseDesc = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} profile="Judge" />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} profile="Judge" subprofile="Adminstration"/>

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-6 w-full max-w-9xl mx-auto">

            <WelcomeBanner profile="Judge" />

            <div className="direction sm:flex sm:justify-between sm:items-center mb-8" >
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                <Datepicker align="right" />
              </div>
            </div>

            </div>
            <div className="xl:flex">
              <div className="md:flex flex-1">
                <div className="flex-1 md:ml-8 xl:mx-4 2xl:mx-8">
                  <div className="md:px-10">
                      <CaseInfo p='93'/>
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

export default CaseDesc;