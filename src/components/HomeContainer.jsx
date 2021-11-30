import React, {Component} from 'react';
import {Button, Input} from "reactstrap";
import testimg from "../testimg.jpg"
import SingleTweetCard from "./SingleTweetCard";

class HomeContainer extends Component {
    render() {
        return (
            <div style={{borderStyle:"solid",borderWidth:"0 1px 0",borderColor:"#dedede",height:"100vh"}}>
                <div>
                    <h4 style={{marginTop: "10px", marginBottom: "10px"}}>Home</h4>
                    <div style={{display:"flex"}}>
                        <img alt="something is here" src={testimg} height={46} style={{borderRadius: "50%",marginLeft:"10px"}}/>
                        <Input
                            id="exampleText"
                            name="text"
                            type="textarea"
                            placeholder="What's Happening?"
                            style={{borderWidth:"0 0 2px"}}
                        />
                    </div>
                    <div>
                        <Button color="primary" style={{
                            borderRadius: "18px",
                            marginTop: "6px",
                            fontWeight: "bold",
                        }}>Tweet</Button>
                    </div>
                    <hr/>
                </div>
                <SingleTweetCard/>
                <SingleTweetCard/>
                <SingleTweetCard/>
                <SingleTweetCard/>
                <SingleTweetCard/>
                <SingleTweetCard/>
                <SingleTweetCard/>
                <SingleTweetCard/>
                <SingleTweetCard/>
            </div>
        );
    }
}

export default HomeContainer;