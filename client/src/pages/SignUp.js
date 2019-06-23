
import { Col, Container, Row } from "../Components/Grid";
import Jumbotron from "../Components/Jumbotron";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import React, { Component } from 'react'
import axios from 'axios'

class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',

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
        console.log('sign-up handleSubmit, username: ')
        console.log(this.state.username)
        event.preventDefault()

        //request to server to add a new username/password
        axios.post('/user/', {
            username: this.state.username,
            password: this.state.password
        })
            .then(response => {
                console.log(response)
                if (!response.data.errmsg) {
                    console.log('successful signup')
                    this.setState({ //redirect to login page
                        redirectTo: '/login'
                    })
                } else {
                    console.log('username already taken')
                }
            }).catch(error => {
                console.log('signup error: ')
                console.log(error)

            })
    }


    render() {
        return (
            <>
                <Container>
                    <Jumbotron />
                    <Row>

                        <Col size="md-12">
                            <Card header="Sign up">
                                <div className="SignupForm">
                                    <h4 align="center">Sign up</h4>
                                    <form className="form-horizontal" align="center">
                                        <div className="form-group" align="center">
                                            <div className="col-1 col-ml-auto" align="center">
                                                <label className="form-label" align="center" htmlFor="username">Username</label>
                                            </div>
                                            <div className="col-3 col-mr-auto" >
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
                                        <div className="form-group" align="center">
                                            <div className="col-1 col-ml-auto">
                                                <label className="form-label" htmlFor="password">Password: </label>
                                            </div>
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
                                        <div className="form-group ">
                                            <div className="col-7"></div>
                                            <button
                                                className="btn btn-primary col-1 col-mr-auto"
                                                onClick={this.handleSubmit}
                                                type="submit"
                                            >Sign up</button>
                                        </div>
                                    </form>

                                </div>
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

export default SignUp



// class SignUp extends Component {
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

//                                     </div>
//                                     <br />
//                                     <br />
//                                     <div>
//                                         {
//                                             (signUpError) ? (
//                                                 <p>{signUpError}</p>
//                                             ) : (null)
//                                         }
//                                         <p>Sign Up</p>
//                                         <input
//                                             type="email"
//                                             placeholder="Email"
//                                             value={signUpEmail}
//                                             onChange={this.onTextboxChangeSignUpEmail}
//                                         /><br />
//                                         <input
//                                             type="password"
//                                             placeholder="Password"
//                                             value={signUpPassword}
//                                             onChange={this.onTextboxChangeSignUpPassword}
//                                         /><br />
//                                         <button onClick={this.onSignUp}>Sign Up</button>
//                                     </div>
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
// export default SignUp;
