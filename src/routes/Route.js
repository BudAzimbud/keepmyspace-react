import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavbarContainer from '../containers/NavbarContainer';
import LoginPages from '../containers/LoginContainer'
import RegisterContainer from '../containers/RegisterContainer';
import HomeContainer from '../containers/HomeContainer';
import TenantContainer from '../containers/tenant';
import CreateTenantContainer from '../containers/tenant/CreateTenantContainer';
import DetailTenantContainer from '../containers/tenant/DetailTenantContainer';
import EditTenantContainer from '../containers/tenant/EditTenantContainer';
import MainPageContainer from '../containers/MainPageContainer';
import AssetContainer from '../containers/asset';
import TenantForm from '../containers/asset/Form';
import DetailAssetContainer from '../containers/asset/Detail';


function RouteHome() {

    return (
        <div>
            <NavbarContainer />
            <BrowserRouter>
                <Routes>
                    <Route
                        path="*"
                        element={<Navigate to="/tenant" />} />
                    <Route exact path='/login' element={< LoginPages />}></Route>
                    <Route exact path='/register' element={< RegisterContainer />}></Route>
                    <Route exact path='/' element={< HomeContainer />}></Route>
                    <Route exact path='/tenant' element={< MainPageContainer component={<TenantContainer />} />}></Route>
                    <Route exact path='/tenant/create' element={< MainPageContainer component={<CreateTenantContainer />} />} ></Route>
                    <Route exact path='/tenant/details/:id' element={< MainPageContainer component={<DetailTenantContainer />} />} ></Route>
                    <Route exact path='/tenant/edit/:id' element={< MainPageContainer component={<EditTenantContainer />} />}></Route>
                    <Route exact path='/asset' element={< MainPageContainer component={<AssetContainer />} />}></Route>
                    <Route exact path='/asset/create' element={< MainPageContainer component={<TenantForm />} />}></Route>
                    <Route exact path='/asset/detail/:id' element={< MainPageContainer component={<DetailAssetContainer />} />}></Route>
                </Routes>
            </BrowserRouter>
        </div >
    )
}



export default RouteHome