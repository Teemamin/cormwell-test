import {NavLink} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import classes from '../styles/MainNav.module.css'

const MainNav = () => {


  return (
    <>
         <Navbar expand="lg">
          <Container className={classes.list}>
            <NavLink to={'/'} className={({ isActive }) =>
                isActive ? `${classes.active} nav-link` : "nav-link"
              }>
            <Navbar.Brand className={classes['navbar-brand']}>CM User App</Navbar.Brand>
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className={classes['navbar-toggler']}/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink to={'/'} className={({ isActive }) =>
                isActive ? `${classes.active} nav-link` : "nav-link"
              }>
                    Home
                </NavLink>
               <NavLink to={'login'} className={({ isActive }) =>
                  isActive ? `${classes.active} nav-link` : "nav-link"
                }>
                      Login
                  </NavLink>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
    </Navbar>
    </>
  )
}

export default MainNav