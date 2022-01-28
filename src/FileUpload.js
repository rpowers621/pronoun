import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './App.css';


function FileUpload() {
    const [selectedFile, setSelectedFile] = useState(null);

    function sendFile() {
        var file = String(selectedFile.name);
        console.log(file);
        fetch('/readData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "file": file }),
        }).then((response) => response.json()).then((resData) => {
            console.log(resData);
        });

    }


    return (
        <div>
            <Container className='text-box'>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" >
                                <Form.Label>Please select file to <i>ProNoun</i></Form.Label>
                                <br />
                                <input type='file' onChange={(e) => setSelectedFile(e.target.files[0])} accept='.doc,.docx,.txt' />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={sendFile}>Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default FileUpload;