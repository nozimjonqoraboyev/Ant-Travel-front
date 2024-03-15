import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../pages/client/components/home/Home";
import Tours from "../assets/data/tours";
import Login from "../pages/login/Login";
import Banks from "../pages/client/components/bank/Banks";
import HistoricalPlaces from "../pages/client/components/historical/HistoricalPlaces";
import Hotels from "../pages/client/components/hotel/Hotels";
import Medicals from "../pages/client/components/medical/Medicals";
import Restaurants from "../pages/client/components/restaurant/Restaurants";
import Shops from "../pages/client/components/shop/Shops";
import Transports from "../pages/client/components/transport/Transports";

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/home'/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/tours' element={<Tours/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/banks' element={<Banks/>} />
            <Route path='/historical' element={<HistoricalPlaces/>} />
            <Route path='/hotel' element={<Hotels/>} />
            <Route path='/medical' element={<Medicals/>} />
            <Route path='/restaurant' element={<Restaurants/>} />
            <Route path='/shop' element={<Shops/>} />
            <Route path='/transports' element={<Transports/>} />
        </Routes>
    )
}

export default Routers