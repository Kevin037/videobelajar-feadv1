import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import LoginPage from './components/Pages/login.jsx'
import RegisterPage from './components/Pages/register.jsx'
import HomePage from './components/Pages/home.jsx'
import ProductPage from './components/Pages/product.jsx'
import CheckoutPage from './components/Pages/checkout.jsx'
import PaymentPage from './components/Pages/payment.jsx'
import ChangePaymentPage from './components/Pages/change_payment.jsx'
import SuccessPaymentPage from './components/Pages/success_payment.jsx'
import OrderPage from './components/Pages/orders.jsx'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage/>
  },
  {
    path: '/register',
    element: <RegisterPage/>
  },
  {
    path: '/',
    element: <HomePage/>
  },
  {
    path: '/product',
    element: <ProductPage/>
  },
  {
    path: '/checkout',
    element: <CheckoutPage/>
  },
  {
    path: '/payment',
    element: <PaymentPage/>
  },
  {
    path: '/change_payment',
    element: <ChangePaymentPage/>
  },
  {
    path: '/success_payment',
    element: <SuccessPaymentPage/>
  },
  {
    path: '/orders',
    element: <OrderPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
