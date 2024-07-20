import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Loginpage from './Component/Loginpage'
import RegisterPage from './Component/RegisterPage.jsx'
import HomePage from './Component/HomePage.jsx'


const router = createBrowserRouter([{
  path: '/',
  element:<Loginpage />,
  errorElement:<div>404 Not Found</div>
},
{
    path:'/RegisterPage',
    element:<RegisterPage/>,
},
{
  path:'/Home',
  element:<HomePage/>
}

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
