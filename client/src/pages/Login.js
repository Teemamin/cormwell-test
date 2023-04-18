import React,{useEffect} from 'react'
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux'
import { LoginForm } from '../components/LoginForm'


const Login = () => {
  const user = useSelector((state)=>state.userState.user)
  const navigate = useNavigate()

  useEffect(()=>{
    if(user){
      navigate('/')
    }
  },[user,navigate])

  return (
    <>
      <LoginForm/>
    </>
  )
}

export default Login