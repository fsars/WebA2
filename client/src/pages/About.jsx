import headshot from '../assets/images/headshot.jpg';
import '../pages/About.css';
import resume from '../assets/images/resume.jpg';


function About() {
    return (
        <div //style={{ display: 'flex', alignItems: 'center'}}
        >
            <img src={headshot} 
                alt="About image" 
                style={{ width: '150px', 
                height: 'auto',
                marginRight: '20px'}}
            />
            <p>
            <h1> My name is Fatema Sarwar. </h1>
            <h2> I have only two semesters left until I graduate. I go to centennial college.
                I enjoy to code and hope to have more projects on here soon. Below is my resume. 
            </h2>
                <div className='resume-container'>
                    <img
                        src={resume}
                        alt="resume"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
                
            </p>
        </div>
    
    );

}

export default About;