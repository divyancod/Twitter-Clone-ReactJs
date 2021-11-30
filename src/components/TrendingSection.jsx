import React, {Component} from 'react';
import {AiOutlineSearch} from "react-icons/ai";
import './TrendingSection.css'
import SingleTrendingCard from "./SingleTrendingCard";

class TrendingSection extends Component {
    render() {
        return (
            <div>
                <div className="search-div">
                    <AiOutlineSearch size={18} style={{color: "#9d9d9d", margin: "2px"}}/>
                    <input type="text" placeholder="Search Twitter" size={30} className="search-input"/>
                </div>
                <div className="trending-section">
                    <h5 style={{padding:"8px"}}>What's happening</h5>
                    <SingleTrendingCard/>
                    <SingleTrendingCard/>
                    <SingleTrendingCard/>
                    <SingleTrendingCard/>
                    <p style={{padding:"8px",color:"#1D9BF0"}}>Show More</p>
                </div>
            </div>
        );
    }
}

export default TrendingSection;