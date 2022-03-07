import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import FooterComponent from '../components/FooterComponent';
import MenuSidebarComponent from '../components/MenuSidebarComponent';
import NavbarDashBoardComponent from '../components/NavbarDashBoardComponent';
import './MainPageContainer.css'
class MainPageContainer extends Component {

    componentDidMount() {
        const token = localStorage.getItem('token')

        if (token) {
            <Navigate to={"/login"} />
        }
    }


    render() {
        return (
            <div>
                <MenuSidebarComponent />

                <div>
                    <NavbarDashBoardComponent />

                </div>

                {this.props.component}
                <FooterComponent />
            </div>
        );
    }
}

export default MainPageContainer;