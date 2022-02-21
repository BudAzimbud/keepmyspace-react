import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomeContainer from '../containers/HomeContainer';
import NavbarDashboardComponent from '../components/NavbarDashBoard';



function RouteAuth(props) {
    return (
        <div>
            <BrowserRouter>
                <NavbarDashboardComponent />
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