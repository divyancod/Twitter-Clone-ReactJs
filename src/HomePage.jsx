import React, {Component} from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {Container} from "reactstrap";
import SideNav from "./components/SideNav";
import TrendingSection from "./components/TrendingSection";
import SignIn from "./components/SignIn";

class HomePage extends Component {
    render() {
        const isAuth = true;
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

export default HomePage;