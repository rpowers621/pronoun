import { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import React from 'react';
import { render } from '@testing-library/react';


class FileUpload extends Component {

    constructor(props) {
        super(props);
        this.state = {
            disabled: true
        };
        this.handleChange = this.handleChange.bind(this);
        console.log(this.state.disabled);
    }

    handleChange(event) {
        console.log(event.target.value);
        if (event.target.value == 'false') {
            this.setState({ disabled: false });
            console.log(this.state.disabled);
        } else {
            this.setState({ disabled: true });
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
                            <Col>
                                <Form.Control as='select'>
                                    <option>Select pronoun to replace</option>
                                    <option value="he">He</option>
                                    <option value="she">She</option>
                                    <option value="they/them">They/Them</option>
                                    <option value="other">Other</option>
                                </Form.Control>
                            </Col>
                            <Col>
                                <Form.Control as='select' value={this.state.value} onChange={(this.handleChange)}>
                                    <option>Select replacement pronoun </option>
                                    <option value="he">He</option>
                                    <option value="she">She</option>
                                    <option value="they/them">They/Them</option>
                                    <option value="false" >Other</option>
                                </Form.Control>
                            </Col>

                            <Col>
                                <Form.Control type="text" placeholder="Custom pronoun" disabled={this.state.disabled} />
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