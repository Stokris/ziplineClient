import React from 'react';
import { Row, Col } from 'reactstrap';
import './footer.css'

const Footer = () =>{
    return(
        <footer id="fcolor">
            <Row className="row"> 
                <Col><p id="footer">&copy; KStokes 2018 || Eleven Fifty Academy</p></Col>
            </Row>
        </footer>
    )
}

export default Footer;