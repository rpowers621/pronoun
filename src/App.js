import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './App.css';
import DocViewer from 'react-doc-viewer';


function App() {
  const null_doc = [{ uri: require('') }];
  const [selectedFile, setSelectedFile] = useState(null);
  const [docPath, setDocPath] = useState(null_doc);

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
      const docs = [{ uri: require(resData) }];
      setDocPath(docs);
    });

  }

  return (

    <div className="App">
      <header className="App-header">
        <h1>Pronoun</h1>
      </header>

      <Container className='text-box'>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>Please select file to <i>Pronoun</i></Form.Label>
                <br />
                <input type='file' onChange={(e) => setSelectedFile(e.target.files[0])} accept='.doc,.docx,.txt' />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={sendFile}>Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <DocViewer documents={docPath} />
    </div>

  );
}

export default App;
