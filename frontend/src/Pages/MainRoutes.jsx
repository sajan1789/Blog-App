
import React from 'react'
import { Routes,Route } from 'react-router-dom'
import HomePage from '../Components/HomePage'
import Login from './Login'
import Signup from './SignUp'
import NewBlog from './NewBlog'
import PrivateRoute from '../Components/PrivateRoute'
import Blogs from './Blogs'
const MainRoutes = () => {
  return (
      <Routes>
           <Route path="/"  element={<HomePage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/blogs' element={ <PrivateRoute><Blogs/> </PrivateRoute>}/>
            <Route path='/newblog' element={<PrivateRoute><NewBlog/></PrivateRoute>}/>       
            <Route  path="*"  element={<h3>404 Page not found</h3>}/>     
      </Routes>
  )
}

export default MainRoutes