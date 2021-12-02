import React, {Component} from 'react';
import {BiHomeCircle} from "react-icons/bi";
import {BsHash, AiOutlineBell, FaRegEnvelope, AiOutlineUser, CgMoreO} from "react-icons/all";
import SideNavSingle from "./SideNavSingle";
import {NavLink} from "react-router-dom";
import './SideNav.css'
import {BsTwitter} from "react-icons/bs";
import {Button} from "reactstrap";

class SideNav extends Component {
    constructor(props) {
        super(props);
        this.performLogout = this.performLogout.bind(this)
    }
    performLogout = ()=>{
        localStorage.clear();
        window.location.reload();
    }
    render() {
        return (
            <div>
                <BsTwitter color="#03A9F4" size={40} style={{marginTop: "20px", marginBottom: "20px"}}/>
                <NavLink className="nav-items" to="/"><SideNavSingle Icon={BiHomeCircle} text="Home"/></NavLink>
                <NavLink className="nav-items" to="/explore"><SideNavSingle Icon={BsHash} text="Explore"/></NavLink>
                <NavLink className="nav-items" to="/notifications"><SideNavSingle Icon={AiOutlineBell}
                                                                                  text="Notifications"/></NavLink>
                <NavLink className="nav-items" to="/messages"><SideNavSingle Icon={FaRegEnvelope}
                                                                             text="Messages"/></NavLink>
                <NavLink className="nav-items" to="/profile"><SideNavSingle Icon={AiOutlineUser}
                                                                            text="Profile"/></NavLink>
                <NavLink className="nav-items" to="/more"><SideNavSingle Icon={CgMoreO} text="More"/></NavLink>
                <Button color="primary" style={{borderRadius:"120px",width:"80%"}}>Tweet</Button>
                <Button color="danger" style={{borderRadius:"120px",width:"80%",marginTop:"20px"}} onClick={this.performLogout}>Logout</Button>
            </div>
        );
    }
}


export default SideNav;