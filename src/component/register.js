import React, { Component } from 'react';
import {Container, Row, Col, Form, Button, FormControl, FormLabel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
        password: "",
        confirmPassword: "",
        errMsg: "",
        isValid: false,
      };
  }

  errLog(e) {
      const email = this.email.value.length;
      const password = this.password.value;
      const confirmPassword = this.confirmPassword.value;
      email >= 8 && password === confirmPassword && password.length >= 8 ? this.setState({ isValid: true }) : this.setState({ isValid: false})
      
  }

  onSubmit() {
      alert("Registration Successfull!!")
  }

  render() {
    return (
      <div style={{padding: 250,}}>
          <Row >
              <Col/>
              <Col>
              <div style={{color: "red"}}>
              {
                  this.state.email.length < 8 ? (
                      <div>
                          Email must be 8 characters or more
                      </div>
                  ) : (
                      <div/>
                  )
              }

              {
                  this.state.password.length < 8 ? (
                      <div>
                          Password must be 8 characters or more
                      </div>
                  ) : (
                      <div/>
                  )
              }

              {
                  this.state.confirmPassword.length < 8 ? (
                      <div>
                          Confirm password must be 8 characters or more
                      </div>
                  ) : (
                      <div/>
                  )
              }

              {
                  this.state.confirmPassword !== this.state.password ? (
                      <div>
                          Password and Confirm Password do not match
                      </div>
                  ) : (
                      <div/>
                  )
              }
              </div>
              <br/>
              </Col>
              <Col/>
          </Row>
        <Form style={{flexDirection: "row", flex: 3, justifyContent:"flex-end"}}>
            <Row style={{}}>
            <Col/>
                <Col>
                <div>
                    <FormLabel>Email</FormLabel>
                </div>
                    <FormControl
                        type="text"
                        ref={email => this.email = email}
                        onChange={() => {
                            this.setState({
                                email: this.email.value
                            })
                            this.errLog();
                        }}
                    />
                </Col>
                <Col/>
            </Row>
            <br/>
            <Row>
            <Col/>
                <Col>
                <div>
                    <FormLabel>Password</FormLabel>
                </div>
                    <FormControl
                        type="password"
                        ref={password => this.password = password}
                        onChange={() => {
                            this.setState({
                                password: this.password.value
                            })
                            this.errLog();
                        }}
                    />
                </Col>
                <Col/>
            </Row>
            <br/>
            <Row>
            <Col/>
                <Col>
                <div>
                    <FormLabel>Confirm Password</FormLabel>
                </div>
                    <FormControl
                        type="password"
                        ref={confirmPassword => this.confirmPassword = confirmPassword}
                        onChange={() => {
                            this.setState({
                                confirmPassword: this.confirmPassword.value
                            })
                            this.errLog();
                        }}
                    />
                    
                </Col>
                <Col/>
            </Row>
            <br/>
            <Row>
                <Col/>
                <Col>
                    <Button style={{backgroundColor: this.state.isValid ? "blue" : "black"}} onClick={() => this.onSubmit()} disabled={!this.state.isValid}>Register </Button>
                </Col>
                <Col/>
            </Row>
            
        </Form>
      </div>
    );
  }
}

export default Register;
