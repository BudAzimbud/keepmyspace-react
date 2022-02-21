import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPages from '../containers/LoginContainer'
import RegisterContainer from '../containers/RegisterContainer';
import HomeContainer from '../containers/HomeContainer';
import DashBoardContainer from '../containers/dashboard/DashBoardContainer';


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

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default RouteHome