import React, {Component} from 'react';
import {Button, Container, Row, Spinner} from "reactstrap";
import {connect} from "react-redux";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.user.username,
            name: this.props.user.displayName,
            email: this.props.user.email
        }

    }

    render() {
        return (
            <Container>
                <Row>
                    <h4>Profile</h4>
                    <hr/>
                    <div>
                        <div>
                            <label>Username :</label>
                            <input type="name" placeholder="Username" size={55} style={{
                                height: "45px",
                                marginBottom: "15px",
                                marginLeft: "5px",
                                border: "2px solid grey",
                                borderRadius: "8px",
                            }}
                                   disabled={true}
                                   defaultValue={this.state.username}
                            />
                        </div>
                        <div>
                            <label>Name :</label>
                            <input type="name" placeholder="Name" size={55} style={{
                                height: "45px",
                                marginBottom: "15px",
                                marginLeft: "5px",
                                border: "2px solid grey",
                                borderRadius: "8px"
                            }}
                                   defaultValue={this.state.name}
                            />
                        </div>
                        <div>
                            <label>Email :</label>
                            <input type="email" placeholder="Email" size={55} style={{
                                height: "45px",
                                marginBottom: "15px",
                                marginLeft: "5px",
                                border: "2px solid grey",
                                borderRadius: "8px"
                            }}
                                   disabled={true}
                                   defaultValue={this.state.email}
                            />
                        </div>
                        <Button
                            style={{borderRadius: "120px", width: "60%", backgroundColor: "black"}}>
                            Update Profile
                        </Button>
                    </div>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state
    }
}
export default connect(mapStateToProps)(Profile);