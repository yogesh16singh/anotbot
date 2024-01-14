import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css';


import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import DatePolls from './pages/DatePolls';
import Mybooking from './pages/Mybooking';
import Mycontact from './pages/Mycontact';

let router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/datepolls",
    element: <DatePolls />
  },
  {
    path: "/mybooking",
    element: <Mybooking />
  },
  {
    path: "/mycontact",
    element: <Mycontact />
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
