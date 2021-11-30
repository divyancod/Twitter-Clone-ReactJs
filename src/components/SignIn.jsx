import React, {Component} from 'react';
import {Button, Modal, ModalBody} from "reactstrap";
import {BsApple, BsTwitter} from "react-icons/bs";
import {FcGoogle} from "react-icons/fc";
import './SignIn.css'

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalLogIn: false,
            modalSignUp: false
        };
        this.toggleLogIn = this.toggleLogIn.bind(this);
        this.toogleSignUp = this.toogleSignUp.bind(this);
    };

    toggleLogIn() {
        this.setState({
            modalLogIn: !this.state.modalLogIn
        });
    }

    toogleSignUp() {
        this.setState({
            modalSignUp: !this.state.modalSignUp
        });
    }


    render() {
        return (
            <div style={{display: "flex"}}>
                <div className="signIn-img"
                     style={{display: "flex", alignItems: "center", justifyContent: "center", flex: 0.5}}>
                    <BsTwitter color="white" size={250}/>
                </div>
                <div style={{flex: 0.5, paddingLeft: "20px"}}>
                    <BsTwitter size={50} color="#1D9BF0" style={{marginTop: "20px", marginLeft: "20px"}}/>
                    <h1 style={{fontWeight: "500", fontSize: "70px", marginTop: "60px"}}><b>Happening now</b></h1>
                    <h1 style={{marginTop: "35px"}}><b>Join Twitter today.</b></h1>
                    <Button color="white" style={{
                        borderRadius: "120px",
                        marginTop: "20px",
                        width: "40%",
                        border: "1px solid grey"
                    }}><FcGoogle/> Sign
                        up with Google</Button>
                    <br/>
                    <br/>
                    <Button color="white"
                            style={{borderRadius: "120px", width: "40%", border: "1px solid grey"}}><BsApple/> Sign
                        up with Apple</Button>
                    <br/>
                    <br/>
                    <div style={{display: "flex"}}>
                        <hr style={{width: "18%"}}/>
                        <p style={{marginLeft: "5px", marginRight: "5px"}}>or</p>
                        <hr style={{width: "18%"}}/>
                    </div>
                    <Button color="primary" style={{borderRadius: "120px", width: "40%"}} onClick={this.toogleSignUp}>Sign up with phone or
                        email</Button>
                    <h6 style={{marginTop: "60px"}}>Already have an account?</h6>
                    <Button color="white"
                            style={{borderRadius: "120px", border: "1px solid grey", width: "40%", color: "#1D9BF0"}}
                            onClick={this.toggleLogIn}>Sign
                        in</Button>
                </div>

                <Modal isOpen={this.state.modalLogIn} toggle={this.toggleLogIn}>
                    <ModalBody>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                        }}>
                            <BsTwitter color="#1D9BF0" size={50} style={{marginTop: "10px", marginBottom: "30px"}}/>
                            <h4 style={{marginBottom: "30px"}}>Sign in to Twitter</h4>
                            <div style={{display: "flex", textAlign: "center", width: "100%"}}>
                                <form>
                                    <input type="email" placeholder="Email" size={55} style={{
                                        height: "45px",
                                        marginBottom: "15px",
                                        border: "2px solid grey",
                                        borderRadius: "8px"
                                    }}/>
                                    <br/>
                                    <input type="password" placeholder="Password" size={55} style={{
                                        height: "45px",
                                        marginBottom: "15px",
                                        border: "2px solid grey",
                                        borderRadius: "8px"
                                    }}/>
                                    <br/>
                                    <Button style={{borderRadius: "120px", width: "60%", backgroundColor: "black"}}>Log
                                        In</Button>
                                </form>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>

                <Modal isOpen={this.state.modalSignUp} toggle={this.toogleSignUp}>
                    <ModalBody>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                        }}>
                            <BsTwitter color="#1D9BF0" size={50} style={{marginTop: "10px", marginBottom: "30px"}}/>
                            <h4 style={{marginBottom: "30px"}}>Sign up to Twitter</h4>
                            <div style={{display: "flex", textAlign: "center", width: "100%"}}>
                                <form>
                                    <input type="email" placeholder="Email" size={55} style={{
                                        height: "45px",
                                        marginBottom: "15px",
                                        border: "2px solid grey",
                                        borderRadius: "8px"
                                    }}/>
                                    <br/>
                                    <input type="password" placeholder="Password" size={55} style={{
                                        height: "45px",
                                        marginBottom: "15px",
                                        border: "2px solid grey",
                                        borderRadius: "8px"
                                    }}/>
                                    <br/>
                                    <input type="password" placeholder="Re-Password" size={55} style={{
                                        height: "45px",
                                        marginBottom: "15px",
                                        border: "2px solid grey",
                                        borderRadius: "8px"
                                    }}/>
                                    <br/>
                                    <Button style={{borderRadius: "120px", width: "60%", backgroundColor: "black"}}>Sign Up</Button>
                                </form>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>

            </div>
        );
    }
}

export default SignIn;