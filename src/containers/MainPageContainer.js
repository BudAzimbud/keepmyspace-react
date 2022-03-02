import React, { Component } from 'react';
import NavbarDashBoardComponent from '../components/NavbarDashBoardComponent';

class MainPageContainer extends Component {

    render() {
        return (
            <div>
                <NavbarDashBoardComponent />
                {this.props.component}
            </div>
        );
    }
}

export default MainPageContainer;