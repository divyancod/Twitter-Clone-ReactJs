import React, {Component} from 'react';

class SingleTrendingCard extends Component {
    render() {
        return (
            <div className="trending-card" style={{color:"#536471",padding:"8px"}}>
                <p style={{margin:"0",fontSize:"12px"}}>Trending in India</p>
                <h5 style={{margin:"0"}}>Something is trending here</h5>
                <p style={{margin:"0",fontSize:"12px"}}>9,999 Tweets</p>
            </div>
        );
    }
}

export default SingleTrendingCard;