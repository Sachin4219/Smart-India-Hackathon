import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/WelcomeBanner';
import Datepicker from '../components/Datepicker';
import DashboardCard10 from '../partials/UpdatesCard';
import CampaignsCard from '../partials/CampaignsCard';

const HomePageJudge = () => {

  const items = [
    {
      id: 0,
      category: '1',
      members: [
        {
          name: 'User 01',
          link: '#0'
        },
        {
          name: 'User 02',
          link: '#0'
        },
        {
          name: 'User 03',
          link: '#0'
        },
      ],
      title: 'Monitor progress in Real Time Value',
      link: '#0',
      content: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.',
      dates: {
        from: 'Jan 20',
        to: 'Jan 27'
      },
      type: 'One-Time'
    },
    {
      id: 1,
      category: '2',
      members: [
        {
          name: 'User 04',
          link: '#0'
        },
        {
          name: 'User 05',
          link: '#0'
        },
      ],
      title: 'Monitor progress in Real Time Value',
      link: '#0',
      content: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.',
      dates: {
        from: 'Jan 20',
        to: 'Jan 27'
      },
      type: 'Off-Track'
    },
    {
      id: 3,
      category: '3',
      members: [
        {
          name: 'User 07',
          link: '#0'
        },
        {
          name: 'User 08',
          link: '#0'
        },
        {
          name: 'User 09',
          link: '#0'
        },
      ],
      title: 'Monitor progress in Real Time Value',
      link: '#0',
      content: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.',
      dates: {
        from: 'Jan 20',
        to: 'Jan 27'
      },
      type: 'At Risk'
    },
    {
      id: 4,
      category: '1',
      members: [
        {
          name: 'User 10',
          link: '#0'
        },
      ],
      title: 'Monitor progress in Real Time Value',
      link: '#0',
      content: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.',
      dates: {
        from: 'Jan 20',
        to: 'Jan 27'
      },
      type: 'At Risk'
    },
    {
      id: 5,
      category: '4',
      members: [
        {
          name: 'User 11',
          link: '#0'
        },
        {
          name: 'User 05',
          link: '#0'
        },
        {
          name: 'User 12',
          link: '#0'
        },
      ],
      title: 'Monitor progress in Real Time Value',
      link: '#0',
      content: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.',
      dates: {
        from: 'Jan 20',
        to: 'Jan 27'
      },
      type: 'One-Time'
    },
    {
      id: 6,
      category: '2',
      members: [
        {
          name: 'User 07',
          link: '#0'
        },
        {
          name: 'User 04',
          link: '#0'
        },
        {
          name: 'User 11',
          link: '#0'
        },
      ],
      title: 'Monitor progress in Real Time Value',
      link: '#0',
      content: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.',
      dates: {
        from: 'Jan 20',
        to: 'Jan 27'
      },
      type: 'At Risk'
    },
    {
      id: 7,
      category: '4',
      members: [
        {
          name: 'User 01',
          link: '#0'
        },
        {
          name: 'User 02',
          link: '#0'
        },
        {
          name: 'User',
          link: '#0'
        },
      ],
      title: 'Monitor progress in Real Time Value',
      link: '#0',
      content: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.',
      dates: {
        from: 'Jan 20',
        to: 'Jan 27'
      },
      type: 'One-Time'
    },
    {
      id: 8,
      category: '1',
      members: [
        {
          name: 'User 09',
          link: '#0'
        },
        {
          name: 'User 01',
          link: '#0'
        },
      ],
      title: 'Monitor progress in Real Time Value',
      link: '#0',
      content: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.',
      dates: {
        from: 'Jan 20',
        to: 'Jan 27'
      },
      type: 'Off-Track'
    },
    {
      id: 9,
      category: '3',
      members: [
        {
          name: 'User 07',
          link: '#0'
        },
        {
          name: 'User 08',
          link: '#0'
        },
        {
          name: 'User 09',
          link: '#0'
        },
        {
          name: 'User 06',
          link: '#0'
        },
      ],
      title: 'Monitor progress in Real Time Value',
      link: '#0',
      content: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.',
      dates: {
        from: 'Jan 20',
        to: 'Jan 27'
      },
      type: 'One-Time'
    },
  ];
  
  


    const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

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
                {/* Filter button */}
                {/* <FilterButton align="right" /> */}
                {/* Datepicker built with flatpickr */}
                <Datepicker align="right" />
                {/* Add view button */}
                {/* <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                  <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span className="hidden xs:block ml-2">Add View</span>
                </button>                 */}
              </div>

            </div>

            <div className="grid grid-cols-12 gap-6">
              {
                items.map(item => {
                  return (
                    <CampaignsCard
                      key={item.id}
                      id={item.id}
                      category={item.category}
                      // members={item.members}
                      title={item.title}
                      link={item.link}
                      content={item.content}
                      dates={item.dates}
                      type={item.type}
                    />
                  )
                })
              }
            </div>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">
                <DashboardCard10 />
             
            </div>

          </div>
        </main>

      </div>

    </div>
  );
}

export default HomePageJudge;