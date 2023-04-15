import React,{useEffect} from 'react'
import { AuthForm } from '../components'
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
      <AuthForm/>
    </>
  )
}

export default Login