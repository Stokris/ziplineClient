import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Signup from './Signup';
import Login from './Login';
import './auth.css';

const Auth = (props) => {
    return (
        <Container className="auth-container">
            <Row>
                <Col md="12">
                    <Signup setToken={props.setToken}/>
                </Col>
                <br />
                <br />
                <Col md="12" className="login-col">
                    <Login setToken={props.setToken}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Auth;