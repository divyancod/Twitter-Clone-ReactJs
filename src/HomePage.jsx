import React, {Component} from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {Container} from "reactstrap";
import SideNav from "./components/SideNav";
import TrendingSection from "./components/TrendingSection";
import {connect} from "react-redux";
import {isLogIn} from "./reducers/mainActions";

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const isAuth = this.props.isLogIn();
        return (
            !isAuth ? <Navigate to="/signin"/> : <Container>
                <div style={{display: "flex"}}>
                    <div style={{flex: "1"}}>
                        <SideNav/>
                    </div>
                    <div style={{flex: "4"}}>
                        <Outlet/>
                    </div>
                    <div style={{flex: "2"}}>
                        <TrendingSection/>
                    </div>
                </div>
            </Container>

        );
    }
}

const mapStateToProps = state => {
    return {
        isLogged: state.isLogged
    }
}
export default connect(mapStateToProps, {isLogIn})(HomePage);