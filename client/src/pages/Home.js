import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import img from '../assests/images/mainImage.svg'
import classes from '../styles/Home.module.css'
import { Logo } from '../components';

const Home = () => {
  return (
    <Container>
      <nav>
        <Logo/>
      </nav>
      <main className={classes.mainWrapper}>
      <Row>
        <Col className='col-md-6 '>
          <h1>Cromwell <span>user</span> app</h1>
          <p>I'm baby hell of dreamcatcher meh irony pabst hashtag. Hell of vibecession VHS la croix. Fixie enamel pin tonx venmo bitters celiac vegan taiyaki master cleanse vaporware.</p>
          <Link to='/register' className='btn btn-hero'>
              Login/Register
            </Link>
        </Col>
        <Col className=' d-none d-md-block col-md-6'>
          <img src={img} alt='logo'/>
        </Col>
      </Row>
      </main>

    </Container>
  )
}

export default Home