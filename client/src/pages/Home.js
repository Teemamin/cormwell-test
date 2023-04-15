import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from '../assests/images/mainImage.svg';
import { Logo } from '../components';

const Home = () => {
  return (
    <Container>
      <nav>
        <Logo/>
      </nav>
   
      <Row>
        <Col className='col-md-6 '>
          <h1>Cromwell <span>user</span> app</h1>
          <p>I'm baby hell of dreamcatcher meh irony pabst hashtag. Hell of vibecession VHS la croix. Fixie enamel pin tonx venmo bitters celiac vegan taiyaki master cleanse vaporware.</p>
          {/* <Link to='/register' className='btn btn-hero'>
              Register
            </Link> */}
        </Col>
        <Col className=' d-none d-md-block col-md-6'>
          <img src={img} alt='logo'/>
        </Col>
      </Row>
     

    </Container>
  )
}

export default Home