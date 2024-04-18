import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Experiences from './components/Experiences.jsx';
import Contact from './components/Contact.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /></>
    },
    {
      path: "/about",
      element: <><Navbar /><About /></>
    },
    {
      path: "/projects",
      element: <><Navbar /><Projects /></>
    },
    {
      path: "/experiences",
      element: <><Navbar /><Experiences /></>
    },
    {
      path: "/contact",
      element: <><Navbar /><Contact /></>
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
