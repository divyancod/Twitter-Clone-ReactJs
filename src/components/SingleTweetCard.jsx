import React, {Component} from 'react';
import testimg from "../testimg2.jpg"
import {BsHeart, BsThreeDots, BsUpload} from "react-icons/bs";
import {BiMessageRounded} from "react-icons/bi";
import {AiOutlineRetweet} from "react-icons/ai";
import './SingleTweetCard.css'


class SingleTweetCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="main-all-card">
                <img alt="something is here" src={testimg} height={46} style={{borderRadius: "50%", margin: "10px"}}/>
                <div style={{marginLeft: "5px", width: "100%", marginRight: "10px"}}>
                    <div>
                        <p style={{margin: "0", marginTop: "5px", display: "inline-block"}}><b>{this.props.tweet.displayName}</b></p>
                        <p style={{
                            display: "inline-block",
                            marginLeft: "2px",
                            color: "#797979"
                        }}>@{this.props.tweet.username} &#8226; {new Date(this.props.tweet.time).getUTCDate().toString()}m ago</p>
                        <BsThreeDots style={{float: "right", marginTop: "8px", color: "#797979"}}/>
                    </div>
                    <p style={{margin: "0px"}}>{this.props.tweet.tweet}</p>
                    <div className="tweet-icons_group">
                        <div className="tweet-icons">
                            <BiMessageRounded size={20} className="tweet-icons-icon"/><p
                            className="tweet-icons-text">6</p>
                        </div>
                        <div className="tweet-icons">
                            <AiOutlineRetweet size={20} className="tweet-icons-icon"/><p
                            className="tweet-icons-text">6</p>
                        </div>
                        <div className="tweet-icons">
                            <BsHeart size={20} className="tweet-icons-icon"/><p className="tweet-icons-text">6</p>
                        </div>
                        <div><BsUpload size={18}/></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SingleTweetCard;