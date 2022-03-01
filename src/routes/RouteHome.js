import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginPages from '../containers/LoginContainer'
import RegisterContainer from '../containers/RegisterContainer';
import HomeContainer from '../containers/HomeContainer';
import DashBoardContainer from '../containers/dashboard/DashBoardContainer';
import CreateTenantContainer from '../containers/tenant/CreateTenantContainer';
import DetailTenantContainer from '../containers/tenant/DetailTenantContainer';
import NavbarDashBoardComponent from '../components/NavbarDashBoard';
import EditTenantContainer from '../containers/tenant/EditTenantContainer';

function RouteHome() {
    return (
        <div>
            <BrowserRouter>
                {localStorage.getItem('token') ? <NavbarDashBoardComponent /> : null}

                <Routes>

                    {localStorage.getItem('token') ? <Route
                        path="/login"
                        element={<Navigate to="/dashboard" />}
                    /> : null
                    }
                    {localStorage.getItem('token') ? <Route
                        path="/register"
                        element={<Navigate to="/dashboard" />}
                    /> : null
                    }
                    <Route exact path='/login' element={< LoginPages />}></Route>
                    <Route exact path='/register' element={< RegisterContainer />}></Route>
                    <Route exact path='/' element={< HomeContainer />}></Route>
                    <Route exact path='/logout' element={< HomeContainer />}></Route>
                    <Route exact path='/dashboard' element={< DashBoardContainer />}></Route>
                    <Route exact path='/tenant/create' element={< CreateTenantContainer />}></Route>
                    <Route exact path='/tenant/details/:id' element={< DetailTenantContainer />}></Route>
                    <Route exact path='/tenant/edit/:id' element={< EditTenantContainer />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default RouteHome