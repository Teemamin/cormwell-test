import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Login,Register,Home,Landing,SharedLayout } from './pages';
import { ErrorHandler } from './components';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <SharedLayout/>,
      errorElement: <ErrorHandler/>,
      children:[
        {
          path: 'home',
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
          element: <Landing/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
