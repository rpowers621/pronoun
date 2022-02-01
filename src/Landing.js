
import pic from './assets/people.jpeg';
import { Link } from 'react-router-dom';

function Landing() {

    return (
        <div className="landing-img">
            <img src={pic} style={{ width: 500, height: 300 }} alt="" />
            <Link to='/File_Upload'> Get Started! </Link>
        </div>
    );
} export default Landing; 