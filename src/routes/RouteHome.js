import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPages from '../containers/LoginContainer'
import RegisterContainer from '../containers/RegisterContainer';
import HomeContainer from '../containers/HomeContainer';
import NavbarComponent from '../components/Navbar';

function RouteHome() {
    return (
        <div>
            <BrowserRouter>
                <NavbarComponent />
                <Routes>
                    <Route exact path='/login' element={< LoginPages />}></Route>
                    <Route exact path='/register' element={< RegisterContainer />}></Route>
                    <Route exact path='/' element={< HomeContainer />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default RouteHome