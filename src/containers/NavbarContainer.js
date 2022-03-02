import React, { Component, useState, useEffect } from 'react';
import NavbarDashBoardComponent from '../components/NavbarDashBoardComponent';
import NavbarHomeComponent from '../components/NavbarHomeComponent';

function NavbarContainer(props) {

    const [isLoggin, setIsLoggin] = useState(null)

    const getSesLogin = async () => {
        let token = await localStorage.getItem("token");
        if (token) setIsLoggin(token)
    }

    useEffect(() => {
        getSesLogin();
    }, [])

    return (
        <div>
            {isLoggin ? <NavbarDashBoardComponent /> : <NavbarHomeComponent />}
        </div>
    );
}

export default NavbarContainer;