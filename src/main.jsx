import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Onboarding2 from './Onboarding2.jsx';
import Onboarding3 from './Onboarding3.jsx';
import Onboarding3part1 from './Onboarding3child1.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import LoginChild1 from './Loginchild1.jsx';
import LoginCompleted from './LoginSuccessFully.jsx';
import Tracking from './Tracking.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/onboarding2",
    element: <Onboarding2 />,
  },
  {
    path: "/Register",
    element: <Register />
  },
  {
    path: "/onboarding3",
    element: <Onboarding3 />,
    children: [
      {
        path: "/onboarding3",
        element: <Onboarding3part1 />,
      },
      {
        path: "/onboarding3/Login",
        element: <Login />,
        children: [
          {
            path: "/onboarding3/Login",
            element: <LoginChild1/>,
          },
          {
            path: "/onboarding3/Login/Register",
            element: <Register/>
          }
        ]
      }
    ]
  },
  {
    path: "/Login",
    element: <Login/>,
    children: [
      {
        path: "/Login",
        element: <LoginChild1/>,
      }
    ]
  },
  {
    path: "/Register",
    element: <Register/>,
  },
  {
    path: "/valid",
    element: <LoginCompleted/>
  },
  {
    path: "/tracking",
    element: <Tracking/>
  }
]);

root.render(
  <RouterProvider router={appRouter}/>
)
