import React from 'react'
import { Outlet } from 'react-router-dom'

const SharedLayout = () => {
  return (
    <>
        <h1>Nav Placeholder</h1>
        <main>
        <Outlet/>
        </main>
        
    </>
  )
}

export default SharedLayout