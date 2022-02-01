import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import React from 'react';


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
                <form>
                    <div className='form-row'>
                        <div className='form-group'>
                            <label for='fileName'>Upload File</label>
                            <input type='file' className='form-control' id='fileName' placeholder='Select File' onChange={(e) => setSelectedFile(e.target.files[0])} accept='.doc,.docx,.txt' />
                        </div>
                        <Button variant="primary" type="submit" onClick={sendFile}>Submit</Button>
                    </div>
                </form>
            </Container>
        </div>
    );
}
export default FileUpload;