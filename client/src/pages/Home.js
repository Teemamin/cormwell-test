import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from '../assests/images/mainImage.svg';
import classes from '../styles/Home.module.css'

const Home = () => {
  return (
    <Container className={classes.homecontainer}>
      <Row>
        <Col className='col-md-6 '>
          <h1>Cromwell <span className={classes.spanText}>user</span> app</h1>
          <p>Hi there, welcome to our user registration app, login to resume enjoying your app perks! Don't have an account with us yet? click the register button above and unlock a world of possibilities!</p>
        </Col>
        <Col className=' d-none d-md-block col-md-6'>
          <img src={img} alt='logo' className={classes.mainImg}/>
        </Col>
      </Row>
     

    </Container>
  )
}

export default Home