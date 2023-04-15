import React,{useEffect} from 'react'
import { SignInForm } from '../components'
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux'

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
      <SignInForm/>
    </>
  )
}

export default Login