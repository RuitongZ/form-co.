import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import Designers from './pages/Designers';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/Designers', element: <Designers /> },
  { path: '/Products', element: <Products /> },
  { path: '/About', element: <About /> },
  { path: '/Contact', element: <Contact /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
