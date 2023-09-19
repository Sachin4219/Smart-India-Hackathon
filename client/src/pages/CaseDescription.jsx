import React, { useState } from 'react';
import upcomingCases from './upcomingCases.json';
import presentCases from './presentCases.json';
import pastCases from './pastCases.json'
import { Link } from 'react-router-dom';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/WelcomeBanner';
import Datepicker from '../components/Datepicker';
import DashboardCard10 from '../partials/UpdatesCard';
import CampaignsCard from '../partials/CampaignsCard';

const CaseDescription = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} profile="Judge" />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} profile="Judge" subprofile="Adminstration"/>

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Welcome banner */}
            <WelcomeBanner profile="Judge" />

            {/* Dashboard actions */}
            <div className="direction sm:flex sm:justify-between sm:items-center mb-8" >

              {/* Left: Avatars */}
              {/* <DashboardAvatars /> */}

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                <Datepicker align="right" />
              </div>
            </div>
          
          </div>
        </main>

      </div>

    </div>
  );
}

export default CaseDescription;