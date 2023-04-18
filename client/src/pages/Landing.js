import { useSelector } from 'react-redux'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import classes from '../styles/Landing.module.css'


const Landing = () => {
  const user = useSelector((state)=>state.userState.user)

 
  return (
   <Container>
      <Row>
        <Col className={`col col-md-6 card mb-4  mt-3   ${classes.top}`}>
            <Card.Body >
            <Card.Text>
             Hello <span data-testid="username" className={classes.userDetail}>{user.username}</span> , welcome to your awesome home page!
            </Card.Text>
            <hr/>
            <p>Registered email: <span data-testid="email" className={classes.userDetail}>{user.email}</span></p>
            </Card.Body>
          </Col>
      </Row>
   </Container>
  )
}

export default Landing