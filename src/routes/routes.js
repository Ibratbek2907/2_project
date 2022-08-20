import React from 'react';
import { Navigate } from 'react-router-dom';
import Users from '../views/Users/List';
import Home from '../containers/Home';
import About from '../components/Abaut'
import Servis from '../components/Servis'
import Blog from '../components/Blog'
import AparmetsRooms from '../components/AparmetsRooms';
export const routes = [
  {
    // element: <Home />,
    children: [
      { index: true, element: <Home /> },
      { path: '/About', element: <About/> },
      { path: '/Blog', element: <Blog/> },
      { path: '/Servis', element: <Servis/> },
      { path: '/AparmetsRooms', element: <AparmetsRooms/> },
      { path: '*', element: <Navigate to='/' /> },
    ],
  },
];
