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

const HomePageJudge = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} profile="Judge" />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} profile="Judge" />

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
            <div className='mb-10'>
            <div className="flex flex-column justify-between my-2">
            <div className='banner text-2 md:text-3xl text-slate-800 font-bold mb-1'>Present Cases</div>
            <Link to='/presentCases'>
            <button className='relative inline-flex text-sm sm:text-base rounded-full font-medium border-2 border-transparent transition-colors outline-transparent focus:outline-transparent disabled:opacity-50 disabled:pointer-events-none disabled:opacity-40 disabled:hover:opacity-40 disabled:cursor-not-allowed disabled:shadow-none
        text-white bg-[#4040F2] hover:bg-[#3333D1] focus:border-[#B3B3FD] focus:bg-[#4040F2] px-4 py-1 sm:py-1.5 sm:px-5'>            
        View More</button></Link>  
            </div>

            <div className="grid grid-cols-12 gap-6">
              {
                presentCases.presentCases.slice(0,3).map(item => {
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
            </div>
            <div className='mb-10'>
            <div className="flex flex-column justify-between my-2">
            <div className='banner text-2 md:text-3xl text-slate-800 font-bold mb-1'>Upcoming Cases</div>
            <Link to='/upcomingCases'>
            <button class='relative inline-flex text-sm sm:text-base rounded-full font-medium border-2 border-transparent transition-colors outline-transparent focus:outline-transparent disabled:opacity-50 disabled:pointer-events-none disabled:opacity-40 disabled:hover:opacity-40 disabled:cursor-not-allowed disabled:shadow-none
        text-white bg-[#4040F2] hover:bg-[#3333D1] focus:border-[#B3B3FD] focus:bg-[#4040F2] px-4 py-1 sm:py-1.5 sm:px-5'>            
        View More</button></Link>  
            </div>

            <div className="grid grid-cols-12 gap-6">
              {
                upcomingCases.upcomingCases.slice(0,3).map(item => {
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
            </div>
            
            <div className='mb-10'>
            <div className="flex flex-column justify-between my-2">
            <div className='banner text-2 md:text-3xl text-slate-800 font-bold mb-1'>Past Cases</div>
            <Link to='/pastCases'>
            <button class='relative inline-flex text-sm sm:text-base rounded-full font-medium border-2 border-transparent transition-colors outline-transparent focus:outline-transparent disabled:opacity-50 disabled:pointer-events-none disabled:opacity-40 disabled:hover:opacity-40 disabled:cursor-not-allowed disabled:shadow-none
        text-white bg-[#4040F2] hover:bg-[#3333D1] focus:border-[#B3B3FD] focus:bg-[#4040F2] px-4 py-1 sm:py-1.5 sm:px-5'>            
        View More</button></Link>  
            </div>

            <div className="grid grid-cols-12 gap-6">
              {
                pastCases.pastCases.slice(0,3).map(item => {
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