import React from 'react'
import Layout from '../Templat/Layout'
import { NavLink } from 'react-router-dom';
const NotFound = () => {
  return (
    <Layout>
    <center><h1 className='text-center font-bold text-5xl'>
       ไม่พบหน้านี้
    </h1>
    <p className='text-center'>กรุณาลองใหม่</p>
     <NavLink to="/">กลับหน้าหลัก</NavLink></center>
  </Layout>
  )
}

export default NotFound