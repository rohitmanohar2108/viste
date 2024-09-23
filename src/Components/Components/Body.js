import React from 'react';
import Login from './Login';
import Browse from './Browse';
import Signup from './Signup';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/browse',
      element: <Browse />,
    },
    {
      path: '/sign-up', // Changed to lowercase
      element: <Signup />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
