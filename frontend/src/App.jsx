import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import PlaceOrder from './pages/Home/Cart/PlaceOrder/PlaceOrder'
import Cart from './pages/Home/Cart/Cart'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'


const App = () => {

  const navigate = useNavigate();

  const [ShowLogin,setShowLogin] = useState(false)

  return (
    <>
    {ShowLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route  path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/verify' element={<Verify/>} />
          <Route path='/myorders' element={<MyOrders/>} />
         
          


        </Routes>


      </div>
      <Footer />
    </>
  )
}

export default App