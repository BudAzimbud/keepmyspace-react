import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomeContainer from '../containers/HomeContainer';
import NavbarComponent from '../components/Navbar';
import DashBoardContainer from '../containers/dashboard/dashboard';

function RouteAuth() {
    return (
        <div>
            <BrowserRouter>
                <NavbarComponent />
                <Routes>
                    <Route
                        path="/login"
                        element={<Navigate to="/dashboard" />}
                    />
                    <Route exact path='/' element={< HomeContainer />}></Route>
                    <Route exact path='/dashboard' element={< DashBoardContainer />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default RouteAuth