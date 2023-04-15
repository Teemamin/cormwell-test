import React from 'react'
import { Outlet } from 'react-router-dom'
import { MainNav } from '../components'
import Container from 'react-bootstrap/Container';

const SharedLayout = () => {
  return (
    <>
        <MainNav/>
        <Container>
        <Outlet/>
        </Container>
        
    </>
  )
}

export default SharedLayout