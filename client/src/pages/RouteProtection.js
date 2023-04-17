import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Loading } from '../components'

const RouteProtection = ({children}) => {
    const user = useSelector((state)=>state.userState.user)
    const userLoading = useSelector((state)=>state.userState.userLoading)


    if(userLoading) return <Loading/>
    if(!user){
        return <Navigate to='/'/>
    }

  return children
  
}

export default RouteProtection