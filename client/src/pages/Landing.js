import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import classes from '../styles/Landing.module.css'


//page to display when user is logged in
const Landing = () => {
  const user = useSelector((state)=>state.userState.user)
  console.log(user)
  const navigate = useNavigate()

  // useEffect(()=>{
  //   if(!user){
  //     navigate('/')
  //   }
  // },[user,navigate])
  return (
   <Container>
      <Row>
        <Col className={`col col-md-6 card mb-4  mt-3   ${classes.top}`}>
            <Card.Body >
            <Card.Text>
             Hello {user.username}, welcome to your awesome home page!
            </Card.Text>
            <hr/>
            <span>Registered email: {user.email}</span>
            </Card.Body>
          </Col>
      </Row>
   </Container>
  )
}

export default Landing