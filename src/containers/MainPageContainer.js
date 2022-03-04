import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import HeaderSidebarComponent from '../components/HeaderSidebarComponent';
import NavbarDashBoardComponent from '../components/NavbarDashBoardComponent';
import './MainPageContainer.css'
class MainPageContainer extends Component {

    render() {
        return (
            <div>
                <HeaderSidebarComponent className="sidebar" />

                <NavbarDashBoardComponent className="header" />
                {this.props.component}

            </div>
        );
    }
}

export default MainPageContainer;