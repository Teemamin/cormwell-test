import axiosClient from './api/axiosDefault';
import React,{useEffect} from 'react'
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Login,Register,Home,Landing,SharedLayout,RouteProtection } from './pages';
import { ErrorHandler } from './components';
import { useDispatch } from 'react-redux';
import { userActions } from './store';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <SharedLayout/>,
      errorElement: <ErrorHandler/>,
      children:[
        {
          path: '',
          element: <Home/>
        },
        {
          path: 'login',
          element: <Login/>
        },
        {
          path: 'register',
          element: <Register/>
        },
        {
          path: 'landing',
          element:  <RouteProtection><Landing/></RouteProtection>
        }
      ]
    },
    
  ])
    

  // Add a response interceptor
  axiosClient.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
  if (error.response.status === 401) {
      dispatch(userActions.logoutUser())
  }
    return Promise.reject(error);
  });

  
  const dispatch = useDispatch()

  const getCurrentUser = async ()=>{
    try {
     const {data} = await axiosClient.get('/get-current-user')
     dispatch(userActions.setCurrentUser(data))
     
    } catch (error) {
      if (error.response.status === 401) return;
    }            
  }

  useEffect(()=>{
    getCurrentUser()
  },[])

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
