import axiosClient from '../api/axiosDefault';
import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {  useNavigate } from 'react-router-dom';
import classes from '../styles/AuthForm.module.css'
import Alert from 'react-bootstrap/Alert';
import { useSelector, useDispatch } from 'react-redux';
import { userActions } from '../store';

const SignInForm = () => {
    const navigate = useNavigate();
    const user = useSelector((state)=>state.userState.user)
    const dispatch = useDispatch()
    const [userData,setUserData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [error, setError] = useState({
        email: '',
        password: '',
        confirmPassword: ''
      })

    const [apiError, setApiError] = useState('')
     
    

    const handleChange = (event)=>{
        setUserData({...userData,[event.target.name]:event.target.value})
        setTimeout(()=>validateUserInput(event),3000) //consider using debaunce to improve this
        
    }

    const validatePassword = (password)=>{
        var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return re.test(password);
    }
  
         
    const validateUserInput = (event) => {
        let { name, value } = event.target;
        setError(prev => {
          const stateObj = { ...prev, [name]: "" };
     
          switch (name) {
            case "email":
            if (!value) {
                stateObj[name] = "Please enter Email.";
            }else if(!value.includes("@") || !value.includes(".")){
                stateObj[name] = "Please enter a valid Email including @ and .";
            }
            break;
     
            case "password":
              if (!value) {
                stateObj[name] = "Please enter Password.";
              } else if (userData.confirmPassword && value !== userData.confirmPassword) {
                stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
              } else if(!validatePassword(value)){
                stateObj[name] = "Password must be min 8 letters, with at least a symbol, upper and lower case letters and a number";
              }
              else {
                stateObj["confirmPassword"] = userData.confirmPassword ? "" : error.confirmPassword;
              }
              break;
     
            case "confirmPassword":
              if (!value) {
                stateObj[name] = "Please enter Confirm Password.";
              } else if (userData.password && value !== userData.password) {
                stateObj[name] = "Password and Confirm Password does not match.";
              }
              break;
     
            default:
              break;
          }
     
          return stateObj;
        });
      }
     

    const handleSubmit = async (event)=>{
        event.preventDefault()
        if(!Object.keys(error).length === 0){
            return
        }
        try {
            const {data} = await axiosClient.post('/login', userData)
            dispatch(userActions.setCurrentUser(data))
            navigate('/landing')

        } catch (error) {
            setApiError(error.response.data.msg)
        }
    }
  return (
    <>
        <Form className={classes.formWrapper} onSubmit={handleSubmit}>
            {apiError &&  <Alert variant="warning">
                {apiError}
              </Alert>}
            <Form.Group className="" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email"  name='email' placeholder="Enter email" value={userData.email}
                 onChange={handleChange} onBlur={validateUserInput} required
                />
                {error.email && <span className={classes.error}>{error.email}</span>}
            </Form.Group>
            <Form.Group className="" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" value={userData.password}
                onChange={handleChange} onBlur={validateUserInput} required
                />
                {error.password && <span className={classes.error}>{error.password}</span>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" name='confirmPassword' placeholder="Confirm Password" value={userData.confirmPassword}
                onChange={handleChange}onBlur={validateUserInput} required
                />
                {error.confirmPassword && <span className={classes.error}>{error.confirmPassword}</span>}
            </Form.Group>
           
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </>
  )
}

export default SignInForm