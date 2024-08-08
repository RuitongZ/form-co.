import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import Brands from './pages/Brands';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import ProductsRootLayout from './pages/ProductsRoot';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import CartRootLayout from './pages/CartRoot';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'brands', element: <Brands /> },
      {
        path: 'products',
        element: <ProductsRootLayout />,
        children: [
          { index: true, element: <Products /> },
          {
            path: ':id',
            element: <ProductDetail />,
          },
        ],
      },

      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      {
        path: 'cart',
        element: <CartRootLayout />,
        children: [
          { index: true, element: <Cart /> },
          { path: 'payment', element: <Payment /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
