import React from 'react'
import './index.css'
import Querypage from './components/Querypage/Querypage'
import { Route, Routes } from 'react-router-dom'
import Firstpage from './components/Firstpage/Firstpage'
import Cheffi from './pages/Cheffi/Cheffi'
import Community from './pages/Community/Community'
import Tiffin from './pages/Tiffin/Tiffin'
import Inbox from './pages/Inbox/Inbox'
import Blogs from './pages/Blogs/Blogs'
import Courses from './pages/Courses/Courses'
import Shopping from './pages/Shopping/Shopping'
import Footer from './pages/Footer/Footer'
import Profile from './pages/Profile/Profile'
import Setting from './pages/Setting/Setting'
import Help from './pages/Help/Help'
import Report from './pages/Report/Report'
import Blocked from './pages/Blocked/Blocked'
import Login from './components/Login/Login'
import HomePage from './components/HomePage/HomePage'
import SignUpNew from './pages/SignUpNew/SignUpNew'
import LoginNew from './pages/LoginNew/LoginNew'

const App = () => {
  return (
    <div>

      <Routes>

        <Route path = "/login" element= {<Login/>} />
        <Route path = "/home" element= {<HomePage/>} />
        <Route path = "/query" element= {<Querypage/>} />
        <Route path = "/cheffi" element= {<Cheffi/>} />
        <Route path = "/community" element= {<Community/>} />
        <Route path = "/tiffin" element= {<Tiffin/>} />
        <Route path = "/inbox" element= {<Inbox/>} />
        <Route path = "/blogs" element= {<Blogs/>} />
        <Route path = "/courses" element= {<Courses/>} />
        <Route path = "/shopping" element= {<Shopping/>} />
        <Route path= '/myprofile' element= {<Profile/>} />
        <Route path= '/setting' element= {<Setting/>} />
        <Route path= '/help' element= {<Help/>} />
        <Route path= '/report' element= {<Report/>} />
        <Route path= '/blocked' element= {<Blocked/>} />
        <Route path= '/footer' element= {<Footer/>} />
        <Route path= '/SignUpNew' element= {<SignUpNew/>} />
        <Route path="/LoginNew" element={<LoginNew/>} />




      </Routes>

    
    </div>
  )
}

export default App