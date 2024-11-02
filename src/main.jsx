import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About.jsx'
import Header from './components/Header/Header.jsx'
import Contact from './components/Contact/Contact.jsx'
import Users from './components/Users/Users.jsx'
import Details from './components/Details/Details.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: 'header',
        element: <Header></Header>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contact',
        element: <Contact></Contact>
      },
      {
        path:'/users',
        loader:()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      {
        path:'/user/:userId',
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<Details></Details>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
