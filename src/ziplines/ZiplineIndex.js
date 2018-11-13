import React from 'react';
import ZiplineCreate from './ZiplineCreate';
import ZiplineTable from './ZiplineTable';
import ZiplineEdit from './ZiplineEdit';
import { Container, Row, Col } from 'reactstrap';

class ZiplineIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ziplines: [],
            updatePressed: false,
            ziplineToUpdate: {},
        }
    }

    fetchZiplines = () => {
        console.log(this.props.token);
        fetch("http://localhost:3000/api/log", {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        .then((res) => res.json())
        .then((logData) => {
            return this.setState({ ziplines: logData })
        })
    }

    ziplineDelete =(event) => {
        fetch(`http://localhost:3000/api/log/${event.target.id}`, {
            method: 'DELETE',
            body: JSON.stringify({ log: {id: event.target.id } }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        .then((res) => this.fetchZiplines())
    }

    ziplineUpdate = (event, zipline) => {
        console.log(zipline);
        fetch(`http://localhost:3000/api/log/${zipline.id}`, {
            method: 'PUT',
            body: JSON.stringify({ log: zipline }),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        .then((res) => {
            this.setState({ updatePressed: false })
            this.fetchZiplines();
        })
    }

    setUpdatedZipline = (event, zipline) => {
        this.setState({
            ziplineToUpdate: zipline,
            updatePressed: true
        })
    }

    componentWillMount() {
        this.fetchZiplines()
    }

    render(){
        const ziplines = this.state.ziplines.length >= 1 ?
        <ZiplineTable ziplines={this.state.ziplines}
        delete={this.ziplineDelete} update={this.setUpdatedZipline} /> :
        <h2>Log your zipline trips!</h2>
        return (
            <Container>
                <Row>
                    <Col md="3">
                        <ZiplineCreate token={this.props.token} updateZiplinesArray={this.fetchZiplines} />
                    </Col>
                    <Col md="9"> 
                        {ziplines}
                    </Col>
                </Row>
                    <Col md="12">
                        {
                            this.state.updatePressed ? <ZiplineEdit t={this.state.updatePressed} update={this.ziplineUpdate} zipline={this.state.ziplineToUpdate} />
                            : <div></div>
                        }
                    </Col>
            </Container>
        )
    }
}

export default ZiplineIndex;