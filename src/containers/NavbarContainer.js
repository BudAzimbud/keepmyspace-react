import React, { Component, useState, useEffect } from 'react';
import NavbarDashBoardComponent from '../components/NavbarDashBoardComponent';
import NavbarHomeComponent from '../components/NavbarHomeComponent';
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
    console.log(state.users)
    return {
        token: state.users.accessTokenResponse,
        error: state.users.accessTokenError
    }
}


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
        </div>
    );
}

export default connect(mapStateToProps, null)(NavbarContainer);