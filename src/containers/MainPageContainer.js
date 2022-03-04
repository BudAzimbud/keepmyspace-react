import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import FooterComponent from '../components/FooterComponent';
import MenuSidebarComponent from '../components/MenuSidebarComponent';
import NavbarDashBoardComponent from '../components/NavbarDashBoardComponent';
import './MainPageContainer.css'
class MainPageContainer extends Component {

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