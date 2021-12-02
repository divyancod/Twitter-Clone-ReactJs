import React, {Component} from 'react';
import {Button, Modal, ModalBody, Spinner} from "reactstrap";
import {BsApple, BsTwitter} from "react-icons/bs";
import {FcGoogle} from "react-icons/fc";
import './SignIn.css'
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import {connect} from "react-redux";
import {myLogin} from "../reducers/mainActions";

class SignIn extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            modalLogIn: false,
            modalSignUp: false,
            email: "",
            password: "",
            rePassword: "",
            name: "",
            error: "",
            loading: false
        };
        this.toggleLogIn = this.toggleLogIn.bind(this);
        this.toogleSignUp = this.toogleSignUp.bind(this);
        this.loginUser = this.loginUser.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.toggleLoading = this.toggleLoading.bind(this);
        this.handleRePasswordChange = this.handleRePasswordChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    };

    handleEmailChange = e => {
        this.setState({email: e.target.value})
    }
    handlePasswordChange = e => {
        this.setState({password: e.target.value})
    }
    handleRePasswordChange = e => {
        this.setState({rePassword: e.target.value})
    }
    handleNameChange = e => {
        this.setState({name: e.target.value})
    }
    handleSignUpSubmit = e => {
        e.preventDefault();
        if (this.state.name === '') {
            this.setError("Name can't be empty");
            return;
        }
        if (this.state.email === '') {
            this.setError('Email can\'t be empty');
            return;
        }
        if (this.state.password === '') {
            this.setError('Password can\'t be empty');
            return;
        }
        if (this.state.rePassword === '') {
            this.setError('RePassword can\'t be empty');
            return;
        }
        if (this.state.rePassword !== this.state.password) {
            this.setError("Password and RePassword doesn't match");
            return;
        }
        this.setError('');
        this.toggleLoading();
        this.signUpUser(this.state.email, this.state.password, this.state.name);
    }
    handleLoginSubmit = e => {
        e.preventDefault();
        if (this.state.email === '') {
            this.setError('Email can\'t be empty');
            return;
        }
        if (this.state.password === '') {
            this.setError('Password can\'t be empty');
            return;
        }
        this.toggleLoading()
        this.loginUser(this.state.email, this.state.password);
    }

    toggleLoading() {
        this.setState({loading: !this.state.loading})
    }

    setError(error) {
        this.setState({error: error})
    }

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

    loginUser(email, password) {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                this.toggleLoading()
                const user = userCredential.user;
                console.log(user)
                this.props.myLogin(user)
                window.location.href = "/";
            })
            .catch((error) => {
                this.toggleLoading()
                const errorCode = error.code;
                const errorMessage = error.message;
                this.setError(errorMessage);
            });
    }

    signUpUser(email, password, displayName) {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                this.toggleLoading()
                const user = result.user;
                console.log(user)
                this.props.myLogin(user)
                updateProfile(auth.currentUser, {
                    displayName: displayName
                }).then(() => {
                    window.location.href = "/";
                }).catch((error) => {
                    console.log(error + " updating name");
                    window.location.href = "/";
                });

            }).catch(error => {
            this.toggleLoading();
            const errorCode = error.code;
            const errorMessage = error.message;
            this.setError(errorMessage);
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
                    <h1 style={{fontWeight: "500", fontSize: "70px", marginTop: "60px"}}><b>Happening now</b>
                    </h1>
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
                            style={{borderRadius: "120px", width: "40%", border: "1px solid grey"}}
                    ><BsApple/> Sign
                        up with Apple</Button>
                    <br/>
                    <br/>
                    <div style={{display: "flex"}}>
                        <hr style={{width: "18%"}}/>
                        <p style={{marginLeft: "5px", marginRight: "5px"}}>or</p>
                        <hr style={{width: "18%"}}/>
                    </div>
                    <Button color="primary" style={{borderRadius: "120px", width: "40%"}}
                            onClick={this.toogleSignUp}>Sign
                        up with phone or
                        email</Button>
                    <h6 style={{marginTop: "60px"}}>Already have an account?</h6>
                    <Button color="white"
                            style={{
                                borderRadius: "120px",
                                border: "1px solid grey",
                                width: "40%",
                                color: "#1D9BF0"
                            }}
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
                            <BsTwitter color="#1D9BF0" size={50}
                                       style={{marginTop: "10px", marginBottom: "30px"}}/>
                            <h4 style={{marginBottom: "30px"}}>Sign in to Twitter</h4>
                            <div style={{display: "flex", textAlign: "center", width: "100%"}}>
                                <form onSubmit={this.handleLoginSubmit}>
                                    <input type="email" placeholder="Email" size={55} style={{
                                        height: "45px",
                                        marginBottom: "15px",
                                        border: "2px solid grey",
                                        borderRadius: "8px"
                                    }} onChange={this.handleEmailChange}/>
                                    <br/>
                                    <input type="password" placeholder="Password" size={55} style={{
                                        height: "45px",
                                        marginBottom: "15px",
                                        border: "2px solid grey",
                                        borderRadius: "8px"
                                    }} onChange={this.handlePasswordChange}/>
                                    <br/>
                                    <p style={{color: "red"}}>{this.state.error}</p>
                                    <Button
                                        style={{borderRadius: "120px", width: "60%", backgroundColor: "black"}}>
                                        {this.state.loading ? <Spinner/> : "Log In"}</Button>
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
                            <BsTwitter color="#1D9BF0" size={50}
                                       style={{marginTop: "10px", marginBottom: "30px"}}/>
                            <h4 style={{marginBottom: "30px"}}>Sign up to Twitter</h4>
                            <div style={{display: "flex", textAlign: "center", width: "100%"}}>
                                <form>
                                    <input type="name" placeholder="Full Name" size={55} style={{
                                        height: "45px",
                                        marginBottom: "15px",
                                        border: "2px solid grey",
                                        borderRadius: "8px"
                                    }} onChange={this.handleNameChange}/>

                                    <input type="email" placeholder="Email" size={55} style={{
                                        height: "45px",
                                        marginBottom: "15px",
                                        border: "2px solid grey",
                                        borderRadius: "8px"
                                    }} onChange={this.handleEmailChange}/>
                                    <br/>
                                    <input type="password" placeholder="Password" size={55} style={{
                                        height: "45px",
                                        marginBottom: "15px",
                                        border: "2px solid grey",
                                        borderRadius: "8px"
                                    }}
                                           onChange={this.handlePasswordChange}/>
                                    <br/>
                                    <input type="password" placeholder="Re-Password" size={55} style={{
                                        height: "45px",
                                        marginBottom: "15px",
                                        border: "2px solid grey",
                                        borderRadius: "8px"
                                    }}
                                           onChange={this.handleRePasswordChange}/>
                                    <br/>
                                    <p style={{color: "red"}}>{this.state.error}</p>
                                    <Button
                                        style={{borderRadius: "120px", width: "60%", backgroundColor: "black"}}
                                        onClick={this.handleSignUpSubmit}>{this.state.loading ?
                                        <Spinner/> : "Sign Up"}</Button>
                                </form>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLogged: state.isLogged
    }
}
export default connect(mapStateToProps, {myLogin})(SignIn);