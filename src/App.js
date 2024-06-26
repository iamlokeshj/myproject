/*

  

*/  

import React from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
//import Login from './components/Login'
import Logout from './components/Logout'
import Profile from './components/Profile'
import Contactinfo from './components/Contactinfo'

//import Menu1 from './components/Menu1'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Loginvalidate from './components/loginvalidate'
import Activities from './components/Activities'
import Tracking from './components/Tracking'
import Attendance from './components/Attendance'
import Login from './components/Login'

const App = () => {
  return (
    <div>
          <Router>        
            <Routes>
              <Route path="/"  element={<Login/>} exact />
              <Route path="/home"  element={<Home/>} exact />
              <Route path="/dashboard"  element={<Dashboard />} exact/>
              <Route path="/about" element={<About />} exact/>
              <Route path="/logout" element={<Logout/>} exact />
              <Route path="/profile/:uname" element={<Profile/>} exact />
              <Route path="/contactinfo/:index" element={<Contactinfo/>} exact />
              <Route path="/loginvalidate" element={<Loginvalidate />} exact />
              <Route path="/activities" element={<Activities />} exact />
              <Route path="/tracking" element={<Tracking />} exact />
              <Route path="/attendance" element={<Attendance />} exact />
            </Routes>
          </Router>
    </div>
  )
}

export default App
