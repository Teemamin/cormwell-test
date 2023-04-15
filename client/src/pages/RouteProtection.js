import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const RouteProtection = ({children}) => {
    const user = useSelector((state)=>state.userState.user)
    console.log(user)
    if(!user){
        return <Navigate to='/'/>
    }

  return children
  
}

export default RouteProtection