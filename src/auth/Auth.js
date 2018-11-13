import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Signup from './Signup';
import Login from './Login';
import './auth.css';

const Auth = (props) => {
    return (
        <Container className="auth-container">
            <Row>
                <div className="suli">
            <Col md="12">
                    <Signup setToken={props.setToken}/>
                </Col>
                <Col md="12">
                    <Login setToken={props.setToken}/>
                </Col>
                </div>
            </Row>
        </Container>
    )
}

export default Auth;