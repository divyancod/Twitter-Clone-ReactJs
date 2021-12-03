import React, {Component} from 'react';
import testimg from "../testimg.jpg";

class SingleMessage extends Component {
    render() {
        return (
            <div style={{display:"flex",margin:"15px"}}>
                <img alt="something is here" src={testimg} height={46}
                     style={{borderRadius: "50%", marginLeft: "10px"}}/>
                <div style={{marginLeft:"10px"}}>
                    <h6 style={{margin:"0"}}>Divyanshu Verma</h6>
                    <p style={{margin:"0",color:"#536471"}}>Hi, How are you welcome to twitter</p>
                </div>
            </div>
        );
    }
}

export default SingleMessage;