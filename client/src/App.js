import "./App.css";
import "./css/style.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  HomePageJudge,
  HomePageLitigant,
  HomePageUser,
  PastCases,
  PresentCases,
  UpcomingCases,
  UserChat,
  UserCalendar,
  CaseDesc,
} from "./pages/index.js";
import AuthForm from "./SignIn/authForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthForm />} />
          <Route path="/judge" element={<HomePageJudge />} />
          <Route path="/litigant" element={<HomePageLitigant />} />
          <Route path="/litigant/chat" element={<UserChat />} />
          <Route path="/user" element={<HomePageUser />} />
          <Route path="/user/chat" element={<UserChat />} />
      
          <Route
            path="/litigant/presentCases"
            element={<PresentCases profile="Advocate" />}
          />
          <Route
            path="/litigant/pastCases"
            element={<PastCases profile="Advocate" />}
          />
          <Route
            path="/judge/upcomingCases"
            element={<UpcomingCases profile="Judge" />}
          />
          <Route
            path="/judge/presentCases"
            element={<PresentCases profile="Judge" />}
          />
          <Route
            path="/judge/pastCases"
            element={<PastCases profile="Judge" />}
          />
          <Route path="/user/calendar" element={<UserCalendar />} />
          <Route path="/judge/calendar" element={<UserCalendar />} />
          <Route path="/litigant/calendar" element={<UserCalendar />} />

          <Route path="/judge/casedesc" element={<CaseDesc />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
