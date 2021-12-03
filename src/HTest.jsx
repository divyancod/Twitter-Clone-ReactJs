import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Input} from "reactstrap";



class HTest extends Component {

    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div>
                <h1>I am test</h1>
                <Input type="textarea"/>
                <Button onClick={this.createTweet}>Tweeter</Button>
            </div>
        );
    }
}

export default HTest;