import React, {Component} from 'react';
import {Button, Input} from "reactstrap";
import testimg from "../testimg.jpg"
import SingleTweetCard from "./SingleTweetCard";
import {connect} from "react-redux";
import {getDatabase} from "firebase/database";
import firebase from "firebase/compat";
import {ref, child, get} from "firebase/database";


class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tweet: "",
            tweets: []
        }
        this.handleTweetChange = this.handleTweetChange.bind(this);
        this.submitTweet = this.submitTweet.bind(this);
    }

    submitTweet = e => {
        e.preventDefault();
        if (this.state.tweet === '') {
            //TODO
            return;
        }
        this.createTweet();
    }
    handleTweetChange = e => {

        this.setState({tweet: e.target.value})
    }
    createTweet = () => {
        console.log(this.state.tweet)
        const db = getDatabase();
        var messageListRef = firebase.database().ref("tweets");
        var newMessageRef = messageListRef.push();
        newMessageRef.set({
            tweet: this.state.tweet,
            time: Date.now(),
            username: this.props.user.username,
            displayName: this.props.user.displayName ? this.props.user.displayName : this.props.user.email
        });
        this.setState({tweet: ""})
        this.getTweets();
    }
    getTweets = () => {
        const dbRef = ref(getDatabase());
        var tempTweets = []
        get(child(dbRef, "tweets")).then((snapshot) => {
            if (snapshot.exists()) {
                snapshot.forEach(v => {
                    tempTweets.push(v.val());
                })
            } else {
                console.log("No data available");
            }
            this.setState({tweets: tempTweets.reverse()});
        }).catch((error) => {
            console.error(error);
        });
    }

    componentDidMount() {
        this.getTweets()
    }

    render() {
        return (
            <div style={{borderStyle: "solid", borderWidth: "0 1px 0", borderColor: "#dedede", height: "100vh"}}>
                <div>
                    <h4 style={{marginTop: "10px", marginBottom: "10px"}}>Home</h4>
                    <div style={{display: "flex"}}>
                        <img alt="something is here" src={testimg} height={46}
                             style={{borderRadius: "50%", marginLeft: "10px"}}/>
                        <Input
                            id="exampleText"
                            name="text"
                            type="textarea"
                            placeholder="What's Happening?"
                            style={{borderWidth: "0 0 2px"}}
                            onChange={this.handleTweetChange}
                            value={this.state.tweet}
                        />
                    </div>
                    <div>
                        <Button color="primary" style={{
                            borderRadius: "18px",
                            marginTop: "6px",
                            fontWeight: "bold",
                        }} onClick={this.submitTweet}>Tweet</Button>
                    </div>
                    <hr/>
                </div>
                {this.state.tweets.map((item, index) => (
                    <SingleTweetCard key={index} tweet={item}/>
                ))}


            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state
    }
}
export default connect(mapStateToProps)(HomeContainer);