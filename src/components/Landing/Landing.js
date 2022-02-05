import './landing.css';
import { Button } from 'react-bootstrap';

function Landing() {

    return (
        <div>
            <div className="landing-img">
                <img src="assets/people.jpeg" alt="" />
                <div className='get-started'>
                    <Button variant="dark" href='/File_Upload' size="lg">Get Started!</Button>

                </div>
            </div>

        </div>
    );
} export default Landing; 