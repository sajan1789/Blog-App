import React from 'react'
import '../Styles/NoBlog.css'
import { Link } from 'react-router-dom'
const NoBlogs = () => {
  return (

    <div className='noBlog'>
     
     <h1>You Have Not Created Any Blog Yet</h1>
    <div>
    <Link to='/newblog'><button className='btn'>Create Blog</button></Link>
    </div>
    </div>
  )
}

export default NoBlogs