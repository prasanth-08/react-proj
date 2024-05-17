import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home'
import Tour from './Components/Tour'
import Login from './Components/Login'
import Register from './Components/Register';

const Routing = () => {
    return (
        <div>
            <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/Tour' element={<Tour />} />
                <Route path='Login' element={<Login />} />
                <Route path='Register' element={<Register />} />
            </Routes>
        </div>
    );
}

export default Routing;