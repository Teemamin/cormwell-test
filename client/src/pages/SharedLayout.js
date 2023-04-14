import React from 'react'
import { Outlet } from 'react-router-dom'
import { MainNav } from '../components'

const SharedLayout = () => {
  return (
    <>
        <MainNav/>
        <main>
        <Outlet/>
        </main>
        
    </>
  )
}

export default SharedLayout