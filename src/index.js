import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/errorPage';
import Auth from './pages/auth';
import Home from './pages';

const router =  createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<ErrorPage/>,
    children:[
      {
        index:true ,
        element: <Home/>
      },
      {
        path:'/login',
        element: <Auth signUp={false}/>
      },
      {
        path:'/register',
        element: <Auth signUp={true}/>
      }
    ]
  }
]);





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

