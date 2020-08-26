import React, { Component, Fragment, useState } from "react";

import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";

import logo from "../assets/logo.png";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: "",
      username: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    console.log(event);
  };

  // Input onChange
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <Fragment>
        <div className='account my-5 pt-sm-5'>
          <Container>
            <Row className='justify-content-center'>
              <Col md={8} lg={6} xl={5}>
                <Card className='overflow-hidden'>
                  <div className='bg-me'>
                    <Row>
                      <Col className='col-7'>
                        <div className='text-primary p-4'>
                          <h5 className='text-light'>Welcome Back!</h5>
                          <p className='text-light font-me'>
                            Sign in to continue to Oktapos
                          </p>
                        </div>
                      </Col>
                      <Col className='col-5 align-self-end'>
                        <img src={logo} className='img-fluid' alt='' />
                      </Col>
                    </Row>
                  </div>
                  <CardBody className='pt-0'>
                    <div className='p-2 mt-5'>
                      <AvForm onSubmit={this.handleSubmit} noValidate>
                        <div className='form-group'>
                          <AvField
                            name='company'
                            type='text'
                            className='form-control'
                            label='company name'
                            value={this.state.company}
                            onChange={this.handleChange}
                          />
                        </div>

                        <div className='form-group'>
                          <AvField
                            name='username'
                            type='text'
                            className='form-control'
                            label='username'
                            value={this.state.username}
                            onChange={this.handleChange}
                          />
                        </div>

                        <div className='form-group'>
                          <AvField
                            name='password'
                            type='password'
                            className='form-control'
                            label='password'
                            value={this.state.password}
                            onChange={this.handleChange}
                          />
                        </div>

                        <div className='custom-control custom-checkbox'>
                          <input
                            type='checkbox'
                            className='custom-control-input'
                            id='customControlInline'
                          />
                          <label
                            className='custom-control-label'
                            htmlFor='customControlInline'>
                            Remember me
                          </label>
                        </div>

                        <div className='mt-3'>
                          <button
                            className='btn btn-primary btn-block waves-effect waves-light'
                            type='submit'>
                            Log In
                          </button>
                        </div>

                        <div className='mt-4 text-center'>
                          <div className='text-muted'>
                            <i className='mdi mdi-lock mr-1'></i> Forgot your
                            password?
                          </div>
                        </div>
                      </AvForm>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default Login;
