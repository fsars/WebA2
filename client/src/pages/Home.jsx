import {Link} from 'react-router-dom'

function Home() {
    return (
    <div>
    <p>
    <h1> Welcome to My Page! </h1>
    <h2> Click the link below to learn more about me. </h2>
    <Link to="/about">Go to About me Page</Link>
    </p>
    </div>
    );
}

export default Home;