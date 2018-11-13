import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import APIURL from '../helpers/environment';

class ZiplineCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            owner_properties: '',
            parks: '',
            time: '',
            people: '',
            price: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/api/log/`, {
            method: 'POST',
            body: JSON.stringify({ log: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        .then((res) => res.json())
        .then((logData) => {
            this.props.updateZiplinesArray()
            this.setState({
                owner_properties: '',
                parks: '',
                time: '',
                people: '',
                price: ''
            })
        })
    }

    render() {
        return (
            <div>
                <h3>Track your zipline adventures!</h3>
                <hr />
                {/* after the form is submitted the data gets sent to the method above*/}
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for="parks">Parks</Label>
                        <Input id="parks" type="text" name="parks" value={this.state.parks} placeholder="enter park" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="time">Time Frame</Label>
                        <Input type="select" name="time" id="time" value={this.state.time} onChange={this.handleChange} placeholder="Time Frame">
                            <option></option>
                            <option value="1 Hour">1 Hour</option>
                            <option value="2 Hours">2 Hours</option>
                            <option value="3 Hours">3 Hours</option>
                            <option value="All Day">All Day</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="people"># of Participants</Label>
                        <Input id="people" type="text" name="people" value={this.state.people} placeholder="enter number of participants" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="price">Total Price</Label>
                        <Input id="price" type="text" name="price" value={this.state.price} placeholder="enter total cost" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit"> Submit </Button>
                </Form>
            </div>
        )
    }
}

export default ZiplineCreate;