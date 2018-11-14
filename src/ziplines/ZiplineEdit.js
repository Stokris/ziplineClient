import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

class ZiplineEdit extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            id: '',
            parks: '',
            time: '',
            people: '',
            price: ''
        };
    }

    componentWillMount() {
        this.setState({
            id: this.props.zipline.id,
            parks: this.props.zipline.parks,
            time: this.props.zipline.time,
            people: this.props.zipline.people,
            price: this.props.zipline.price
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.update(event, this.state)
    }

    render() {
        return (
            <div>
                <Modal isOpen={true}>
                    <ModalHeader>Edit your adventure</ModalHeader>
                    <ModalBody>
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
                            <Button type="submit" outline color="success"> Submit </Button>
                            <Button type="cancel" outline color="danger"> Cancel </Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default ZiplineEdit;