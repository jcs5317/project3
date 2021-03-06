
import { Col, Container, Row } from "../Components/Grid";
import Jumbotron from "../Components/Jumbotron";
import Card from "../Components/Card";
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Footer  from "../Components/Footer";
import Nav from "../Components/Nav";

class SignIn extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }
    
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')
        

        axios
            .post('/user/login', {
                email: this.state.username,
                password: this.state.password
            })
            .then(({data, status}) => {
                console.log('login response: ')
                if (status === 200) {
                    // update the state to redirect to home
                    window.sessionStorage.setItem("user-token", data.token);
                    this.props.history.push("/savedrecipes");
                    alert("Login succesful")
                }
            }).catch(error => {
                alert("Please Sign Up")
                console.log('login error: ')
                console.log(error);

            })
            event.preventDefault();
            this.setState({email: '', password: ''})
    }
    

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <>
                <Nav signIn={false} />
                <Container>
                    <Jumbotron />
                    <Row>
                        <Col size="md-12">
                        <Card header="Sign In">
                            <h4 align="center">Sign In</h4>
                            <form action="/login" method="post"className="form-horizontal">
                                <div className="form-group"  align="center">
                                    <div className="col-1 col-ml-auto" >
                                   
                                    <br />
                                
                                    <i className="fas fa-envelope-open-text fa-2x"></i>
                                    </div>
                                         <br />
                                    <div className="col-3 col-mr-auto">
                                        <input className="form-input"
                                            type="text"
                                            id="username"
                                            name="username"
                                            placeholder="Username"
                                            value={this.state.username}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-group"  align="center">
                                    <div className="col-1 col-ml-auto">
                                    
                                    <i className="fas fa-key fa-2x"></i>
                                    </div>
                                            <br />
                                    <div className="col-3 col-mr-auto">
                                        <input className="form-input"
                                            placeholder="password"
                                            type="password"
                                            name="password"
                                            value={this.state.password}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-group"  align="center">
                                    <div className="col-7"></div>
                                    <button
                                        className="btn btn-primary col-1 col-mr-auto"

                                        onClick={this.handleSubmit}
                                        type="submit">Login</button>
                                </div>
                            </form>
                           </Card>
                        </Col>
                    </Row>
                </Container>
               
                    <Footer>

                    </Footer>
                    </>
                
            )
        }
    }
}

export default SignIn



// class SignIn extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isLoading: true,
//             token: '',
//             signUpError: '',
//             signInError: '',
//             signInEmail: '',
//             signInPassword: '',
//             signUpEmail: '',
//             signUpPassword: '',
//         };
//         this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this);
//         this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);
//         this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
//         this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);

//         this.onSignUp = this.onSignUp.bind(this);
//         this.onSignIn = this.onSignIn.bind(this);
//     }

//     componentDidMount() {
//         const obj = getFromStorage('the_main_app');
//     if (obj && obj.token) {
//       const { token } = obj;
//       // Verify token
//       fetch('/api/account/verify?token=' + token)
//         .then(res => res.json())
//         .then(json => {
//           if (json.success) {
//             this.setState({
//               token,
//               isLoading: false
//             });
//           } else {
//             this.setState({
//               isLoading: false,
//             });
//           }
//         });
//     } else {
//       this.setState({
//         isLoading: false,
//       });
//     }
//     }


//     onTextboxChangeSignInEmail(event) {
//         this.setState({
//             signInEmail: event.target.value,
//         });
//     }

//     onTextboxChangeSignInPassword(event) {
//         this.setState({
//             signInPassword: event.target.value,
//         });
//     }
//     onTextboxChangeSignUpEmail(event) {
//         this.setState({
//             changeEmail: event.target.value,
//         });
//     }

//     onTextboxChangeSignUpPassword(event) {
//         this.setState({
//             changePassword: event.target.value,
//         });
//     }

//     onSignUp() {
//         // Grab state
//         const {
//             signUpEmail,
//             signUpPassword,
//         } = this.state;
//         this.setState({
//             isLoading: true,
//         });
//         // Post request to backend
//         fetch('/api/account/signup', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 email: signUpEmail,
//                 password: signUpPassword,
//             }),
//         }).then(res => res.json())
//             .then(json => {
//                 console.log('json', json);
//                 if (json.success) {
//                     this.setState({
//                         signUpError: json.message,
//                         isLoading: false,
//                         signUpEmail: '',
//                         signUpPassword: '',
//                     });
//                 } else {
//                     this.setState({
//                         signUpError: json.message,
//                         isLoading: false,
//                     });
//                 }
//             });

//     }

//     onSignIn() {
//         // Grab state
//         const {
//           signInEmail,
//           signInPassword,
//         } = this.state;
//         this.setState({
//           isLoading: true,
//         });
//         // Post request to backend
//         fetch('/api/account/signin', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             email: signInEmail,
//             password: signInPassword,
//           }),
//         }).then(res => res.json())
//           .then(json => {
//             console.log('json', json);
//             if (json.success) {
//               setInStorage('the_main_app', { token: json.token });
//               this.setState({
//                 signInError: json.message,
//                 isLoading: false,
//                 signInPassword: '',
//                 signInEmail: '',
//                 token: json.token,
//               });
//             } else {
//               this.setState({
//                 signInError: json.message,
//                 isLoading: false,
//               });
//             }
//           });
//       }

//     render() {
//         const {
//             isLoading,
//             token,
//             signInError,
//             signInEmail,
//             signInPassword,
//             signUpEmail,
//             signUpPassword,
//             signUpError,
//         } = this.state;
//         if (isLoading) {
//             return (<div><p>Loading...</p></div>);
//         }
//         if (!token) {
//             return (
//                 <div>
//                     <Container>
//                         <Jumbotron />
//                         <Row>
//                             <Col size="md-12">
//                                 <Card>
//                                     <div>
//                                         {
//                                             (signInError) ? (
//                                                 <p>{signInError}</p>
//                                             ) : (null)
//                                         }
//                                         <p>Sign In</p>
//                                         <input
//                                             type="email"
//                                             placeholder="Email"
//                                             value={signInEmail}
//                                             onChange={this.onTextboxChangeSignInEmail}
//                                         />
//                                         <br />
//                                         <input
//                                             type="password"
//                                             placeholder="Password"
//                                             value={signInPassword}
//                                             onChange={this.onTextboxChangeSignInPassword}
//                                         />
//                                         <br />
//                                         <button onClick={this.onSignIn}>Sign In</button>
//                                     </div>
//                                     <br />
//                                     <br />


//                                 </Card>
//                             </Col>
//                         </Row>
//                     </Container>
//                 </div>
//             );
//         }
//         return (
//             <div>
//                 <p>Signed in</p>
//             </div>
//         );

//     }


// }
// export default SignIn;
