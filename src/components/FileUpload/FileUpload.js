import { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import React from 'react';
import './file.css';


class FileUpload extends Component {

    constructor(props) {
        super(props);
        this.state = {
            disabled1: true,
            disabled2: true,
            targetPN: '',
            replacementPN: ''
        };
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);

    }

    handleChange1(event) {
        console.log(event.target.value);
        if (event.target.value === 'other') {
            this.setState({ disabled1: false });

        } else {
            this.setState({ disabled1: true });
            this.setState({ targetPN: event.target.value });

        }

    }
    handleChange2(event) {
        console.log(event.target.value);
        if (event.target.value === 'other') {
            this.setState({ disabled2: false });

        } else {
            this.setState({ disabled2: true });
            this.setState({ replacementPN: event.target.value });

        }

    }

    render() {
        return (
            <div>
                <Container className='text-box'>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Upload File</Form.Label>
                            <Form.Control type="file" id='fileName' placeholder='Select File' accept='.doc,.docx,.txt' />
                        </Form.Group>
                        <Row className='mb-3'>
                            <Form.Label>Pronoun to replace</Form.Label>
                            <Col>
                                <Form.Control as='select' value={this.state.value} onChange={(this.handleChange1)}>
                                    <option>Select pronoun to replace</option>
                                    <option value="he">He</option>
                                    <option value="she">She</option>
                                    <option value="they/them">They/Them</option>
                                    <option value="other">Other</option>
                                </Form.Control>
                            </Col>
                            <Col>
                                <Form.Control type="text" placeholder="Custom pronoun" disabled={this.state.disabled1} />
                            </Col>
                        </Row>
                        <Row className='mb-3'>
                            <Form.Label>Replacement pronoun</Form.Label>
                            <Col>
                                <Form.Control as='select' value={this.state.value} onChange={(this.handleChange2)}>
                                    <option>Select replacement pronoun </option>
                                    <option value="he">He</option>
                                    <option value="she">She</option>
                                    <option value="they/them">They/Them</option>
                                    <option value="other" >Other</option>
                                </Form.Control>
                            </Col>

                            <Col>
                                <Form.Control type="text" placeholder="Custom pronoun" disabled={this.state.disabled2} />
                            </Col>
                        </Row>
                        <Button type='sumbit'>Submit</Button>
                    </Form>
                </Container>
            </div>
        );
    }
}
export default FileUpload;