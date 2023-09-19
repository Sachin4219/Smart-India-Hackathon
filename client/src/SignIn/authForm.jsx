import React, { useEffect, useState } from 'react';
import './authForm.css';
import { base_url } from '../data';
import axios from "axios"

function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [profile, setProfile] = useState("");

  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [courtId, setCourtId] = useState("")
  const [advId, setAdvId] = useState("")
  const [caseId, setCaseId] = useState("")
  const [password, setPassword] = useState("")
  const [phonenumber, setPhonenumber] = useState("")


  const handleChange = ((e) => {
    setProfile(e.target.value);
    console.log(profile);
  })
  useEffect(() => {
    setProfile(profile);
  }, [profile, setProfile]);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  const clearAllStates = () => {
    setFirstname("")
    setLastname("")
    setCourtId("")
    setAdvId("")
    setCaseId("")
    setPassword("")
    setPhonenumber("")
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({
      'isSignUp': isSignUp,
      'profile': profile,
      'courtId': courtId,
      'advId': advId,
      'caseId': caseId,
      'password': password
    })
    if (isSignUp) {
      const response = await axios.post(base_url + '/auth/register', {
        firstName: firstname,
        lastName: lastname,
        caseId: caseId,
        phoneNumber: phonenumber,
        password: password,
      })
      if (!response.statusText || response.statusText === "OK") {
        console.log(response)
        setIsSignUp(false);
        clearAllStates();
      }
      else {
        alert("Some error occured")
      }
    }
    else {
      const response = await axios.post(base_url + '/auth/login', {
        caseId: caseId,
        phoneNumber: phonenumber,
        password: password,
      })
      if (!response.statusText || response.statusText === "OK") {
        console.log(response)
        window.location = "/user";
      }
      else {
        alert("Some error occured")
      }
    }
  };

  return (
    <div className="formcenter form-container">
      <div className={`container ${isSignUp ? 'right-panel-active' : ''}`}>
        {/* Sign Up */}
        <div className="container__form container--signup">
          <form action="#" className={`form ${(profile === 'User') ? 'form-user' : ''}`} id="form1" onSubmit={handleSubmit} >

            <h2 className="form__title">Sign Up {profile ? `as ${profile}` : ""}</h2>
            <select value={profile} onChange={handleChange} className='input'>
              <option value="">Select Profile</option>
              <option value="Judge">Judge</option>
              <option value="Advocate">Advocate</option>
              <option value="User">User</option>
            </select>

            {(profile === 'Judge') ? (
              <div>
                <div style={{ display: 'flex' }}>
                  <input type="text" placeholder="First Name" className="input" style={{ marginRight: 10 }} onChange={(e) => setFirstname(e.target.value)} value={firstname} />
                  <input type="text" placeholder="Last Name" className="input" style={{}} onChange={(e) => setLastname(e.target.value)} value={lastname} />
                </div>
                <input type="text" placeholder="CourtId" className="input" onChange={(e) => setCourtId(e.target.value)} value={courtId} />
                <input type="text" placeholder="Password" className="input" onChange={(e) => setPassword(e.target.value)} value={password} />
              </div>
            ) : (profile === 'Advocate') ? (
              <div>
                <div style={{ display: 'flex' }}>
                  <input type="text" placeholder="First Name" className="input" style={{ marginRight: 10 }} onChange={(e) => setFirstname(e.target.value)} value={firstname} />
                  <input type="text" placeholder="Last Name" className="input" style={{}} onChange={(e) => setLastname(e.target.value)} value={lastname} />
                </div>
                <input type="text" placeholder="AdvId" className="input" onChange={(e) => setAdvId(e.target.value)} value={advId} />
                <input type="text" placeholder="Password" className="input" onChange={(e) => setPassword(e.target.value)} value={password} />
              </div>
            ) : (profile === 'User') ? (
              <div>
                <div style={{ display: 'flex' }}>
                  <input type="text" placeholder="First Name" className="input" style={{ marginRight: 10 }} onChange={(e) => setFirstname(e.target.value)} value={firstname} />
                  <input type="text" placeholder="Last Name" className="input" style={{}} onChange={(e) => setLastname(e.target.value)} value={lastname} />
                </div>
                <input type="text" placeholder="CaseId" className="input" onChange={(e) => setCaseId(e.target.value)} value={caseId} />
                <input type="text" placeholder="Phone Number" className="input" onChange={(e) => setPhonenumber(e.target.value)} value={phonenumber} />
                <input type="text" placeholder="Password" className="input" onChange={(e) => setPassword(e.target.value)} value={password} />
              </div>
            ) : <></>}
            <button className="btn" type="submit">
              Sign Up
            </button>
          </form>
        </div>

        {/* Sign In */}
        <div className="container__form container--signin">
          <form action="#" className="form" id="form2" onSubmit={handleSubmit}>
            <h2 className="form__title">Sign In {profile ? `as ${profile}` : ""}</h2>
            <select value={profile} onChange={handleChange} className='input'>
              <option value="">Select Profile</option>
              <option value="Judge">Judge</option>
              <option value="Advocate">Advocate</option>
              <option value="User">User</option>
            </select>
            {(profile === 'Judge') ? <input type="text" placeholder="CourtID" className="input" onChange={(e) => setCourtId(e.target.value)} value={courtId} />
              : (profile === 'Advocate') ? <input type="text" placeholder="AdvID" className="input" onChange={(e) => setAdvId(e.target.value)} value={advId} />
                : (profile === 'User') ? (
                  <div>
                    <input type="text" placeholder="CaseId" className="input" onChange={(e) => setCaseId(e.target.value)} value={caseId} />
                    <input type="text" placeholder="Phone Number" className="input" onChange={(e) => setPhonenumber(e.target.value)} value={phonenumber} />
                  </div>
                )
                  : <></>}
            <input type="password" placeholder="Password" className="input" onChange={(e) => setPassword(e.target.value)} value={password} />
            {/* <a href="#" className="link">
            Forgot your password?
          </a> */}
            <button className="btn" type="submit" >
              Sign In
            </button>
          </form>
        </div>

        {/* Overlay */}
        <div className="container__overlay">
          <div className="overlay">
            <div className={`overlay__panel overlay--left ${isSignUp ? 'hidden' : ''}`}>
              <button className="btn" onClick={toggleForm} id="signIn">
                Sign In
              </button>
            </div>
            <div className={`overlay__panel overlay--right ${isSignUp ? '' : 'hidden'}`}>
              <button className="btn" onClick={toggleForm} id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
