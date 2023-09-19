
import './App.css';
import "./css/style.css"
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  HomePageJudge,
  HomePageLitigant,
  HomePageUser,
  PastCases,
  PresentCases,
  UpcomingCases
} from './pages/index.js';
import AuthForm from './SignIn/authForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' exact element={<SelectProfile />} /> */}
          <Route path='/' element={<AuthForm />} />
          <Route path='/judge' element={<HomePageJudge />} />
          <Route path='/litigant' element={<HomePageLitigant />} />
          <Route path='/user' element={<HomePageUser />} />
          <Route path='/litigant/presentCases' element={<PresentCases profile="Advocate" />} />
          <Route path='/litigant/pastCases' element={<PastCases profile="Advocate" />} />
          <Route path='/judge/upcomingCases' element={<UpcomingCases profile="Judge" />} />
          <Route path='/judge/presentCases' element={<PresentCases profile="Judge" />} />
          <Route path='/judge/pastCases' element={<PastCases profile="Judge" />} />
          {/* <Route path="/user/chat/:roomId/:userId" element={<HomePageUser />} /> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
