import React from 'react'
import Nav from './Components/NavBar/Nav'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
   <>
    <Nav/>
    <Outlet/>
    <Footer/>
   </>
  )
}

export default Layout