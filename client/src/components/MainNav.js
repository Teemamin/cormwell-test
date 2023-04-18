import axiosClient from '../api/axiosDefault';
import {NavLink} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import classes from '../styles/MainNav.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { userActions } from '../store';
import Logo from './Logo';

const MainNav = () => {
    const user = useSelector((state)=>state.userState.user)
    const dispatch = useDispatch()

    const handleLogout = async ()=>{
            await axiosClient.get('/logout')
            dispatch(userActions.logoutUser()) 
    }

  return (
    <>
         <Navbar expand="lg">
          <Container className={classes.list}>
            <NavLink to={'/'} className={({ isActive }) =>
                isActive ? `${classes.active} nav-link` : "nav-link"
              }>
            <Navbar.Brand className={classes['navbar-brand']}><Logo/></Navbar.Brand>
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className={classes['navbar-toggler']}/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              <NavLink to={'/'} className={({ isActive }) =>
                    isActive ? `${classes.active} nav-link` : "nav-link"
                    }>
                    Home
                </NavLink>
                {user &&
                    <NavLink to={'/landing'} className={({ isActive }) =>
                    isActive ? `${classes.active} nav-link` : "nav-link"
                    }>
                        Profile
                    </NavLink>
                }
                {user ?
                    <div>
                        <button  className= {`${classes.logoutBtn} nav-link`} onClick={handleLogout}>
                        Logout
                        </button> 
                    </div>
                    : <NavLink to={'login'} className={({ isActive }) =>
                    isActive ? `${classes.active} nav-link` : "nav-link"
                    }>
                    Login
                </NavLink>
                }
                    {!user &&
                    
                     <NavLink to={'register'} className={({ isActive }) =>
                    isActive ? `${classes.active} nav-link` : "nav-link"
                    }>
                    Register
                </NavLink>
                }
                
              </Nav>
            </Navbar.Collapse>
          </Container>
    </Navbar>
    </>
  )
}

export default MainNav