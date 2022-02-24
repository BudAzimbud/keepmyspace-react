import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPages from '../containers/LoginContainer'
import RegisterContainer from '../containers/RegisterContainer';
import HomeContainer from '../containers/HomeContainer';
import DashBoardContainer from '../containers/dashboard/DashBoardContainer';
import CreateTenantContainer from '../containers/tenant/CreateTenantContainer';
import DetailTenantContainer from '../containers/tenant/DetailTenantContainer';


function RouteHome() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/login' element={< LoginPages />}></Route>
                    <Route exact path='/register' element={< RegisterContainer />}></Route>
                    <Route exact path='/' element={< HomeContainer />}></Route>
                    <Route exact path='/logout' element={< HomeContainer />}></Route>
                    <Route exact path='/dashboard' element={< DashBoardContainer />}></Route>
                    <Route exact path='/tenant/create' element={< CreateTenantContainer />}></Route>
                    <Route exact path='/tenant/details/:id' element={< DetailTenantContainer />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default RouteHome