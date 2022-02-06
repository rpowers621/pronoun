import './landing.css';
import { Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

function Landing() {

    return (
        <div className='landing-page'>
            <Row>
                <div className="landing">
                    <img src="assets/people.jpeg" alt="" />
                    <div className='welcome'> Welcome to Shhhhh</div>
                    <div className='get-started'>
                        <Button href='/File_Upload' size="lg" className='button'>Get Started!</Button>
                    </div>
                </div>
            </Row>
            <Row className='second-half'>
                <h1>Here at Shhhh we we thrive on inclusivity</h1>
            </Row>



        </div>
    );
} export default Landing; 