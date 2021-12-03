import React, {Component} from 'react';
import SingleMessage from "./SingleMessage";

class Message extends Component {
    render() {
        return (
            <div>
                <h1>Chat Here</h1>
                <hr/>
                <SingleMessage/>
                <SingleMessage/>
                <SingleMessage/><SingleMessage/><SingleMessage/>
                <SingleMessage/><SingleMessage/><SingleMessage/>


            </div>
        );
    }
}

export default Message;