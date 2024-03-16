import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../pages/client/components/home/Home";
import Tours from "../pages/client/components/tour/Tours";
import Login from "../pages/login/Login";
import Banks from "../pages/client/components/bank/Banks";
import Monuments from "../pages/client/components/historical/Monuments";
import Hotels from "../pages/client/components/hotel/Hotels";
import Hospital from "../pages/client/components/medical/Hospital";
import Restaurants from "../pages/client/components/restaurant/Restaurants";
import Shops from "../pages/client/components/shop/Shops";
import Transports from "../pages/client/components/transport/Transports";
import About from "../pages/client/components/about/About";
import Contact from "../pages/client/components/contact/Contact";

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/home'/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/tours' element={<Tours/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/banks' element={<Banks/>} />
            <Route path='/monuments' element={<Monuments/>} />
            <Route path='/hotels' element={<Hotels/>} />
            <Route path='/hospitals' element={<Hospital/>} />
            <Route path='/restaurants' element={<Restaurants/>} />
            <Route path='/shops' element={<Shops/>} />
            <Route path='/transports' element={<Transports/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
        </Routes>
    )
}

export default Routers