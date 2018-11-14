import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,  
    NavbarToggler,       
    NavbarBrand,
    Nav, 
    NavItem,
    Button
} from 'reactstrap';

class SiteBar extends React.Component {
    constructor(props) {   
        super(props);
        this.state = {isOpen: false};
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar light expand="md">
                <NavbarBrand href="/">Zipline Extravaganzas</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Button onClick={() => this.props.clickLogout()}>Logout</Button>
                        </NavItem>
                    </Nav>
                </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default SiteBar;