import React from 'react'
import Querypage from './components/Querypage/Querypage'
import { Route, Routes } from 'react-router-dom'
import Firstpage from './components/Firstpage/Firstpage'
import Landingpage from './components/Landingpage/Landingpage'
import Cheffi from './pages/Cheffi/Cheffi'
import Community from './pages/Community/Community'
import Tiffin from './pages/Tiffin/Tiffin'
import Inbox from './pages/Inbox/Inbox'
import Blogs from './pages/Blogs/Blogs'
import Courses from './pages/Courses/Courses'
import Shopping from './pages/Shopping/Shopping'


const App = () => {
  return (
    <div>

      <Routes>

        <Route path = "/" element= {<Firstpage/>} />
        <Route path = "/query" element= {<Querypage/>} />
        <Route path = "/home" element= {<Landingpage/>} />
        <Route path = "/submit" element= {<Landingpage/>} />
        <Route path = "/cheffi" element= {<Cheffi/>} />
        <Route path = "/community" element= {<Community/>} />
        <Route path = "/tiffin" element= {<Tiffin/>} />
        <Route path = "/inbox" element= {<Inbox/>} />
        <Route path = "/blogs" element= {<Blogs/>} />
        <Route path = "/courses" element= {<Courses/>} />
        <Route path = "/shopping" element= {<Shopping/>} />

      </Routes>
    </div>
  )
}

export default App
