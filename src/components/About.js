import React, {useEffect} from 'react'
import '../styles/about.css'
import myImg from '../imgs/myImg.jpg'
import VanillaTilt from 'vanilla-tilt';
function About() {
  useEffect(() => {
    const img = document.querySelector('.tilt');
    VanillaTilt.init(img, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    });
  }, []);
  return (
    <>
    <div className='about'>
      <h2 className="heading" ><i className="fas fa-user-alt"></i> About <span>Me</span></h2>
      <div className="container-fluid">
        <div className="image">
            <img className="tilt" src={myImg} alt="myimage"/>
        </div>
        <div className="content">
            <h3 className="name">I'm Srivallabh</h3>
            <span className="role">Web Developer</span>
            <p>I am Web Developer based in Hyderabad. I am a Computer science Undergraduate from Keshav Memorial Institute Of Technology.
               I am very passionate about learning and improving my coding skills, developing applications and website using MERN Stack.
               Working for myself to impove my skills. Love to Build new Web Applications.
            </p>
            <div className="box-container">
                <div className="box1">
                    <p><span className="age">Age: </span>20</p>
                    <p><span className="phone">Phone: </span>+91 7893026840</p>
                </div>
                <div className="box2">
                    <p><span className="email">Mail: </span>srivallabhjoshi13@gmail.com</p>
                    <p><span className="place">Place: </span>Hyderabad</p>
                </div>
            </div>
            <div className="button">
                <a href='https://drive.google.com/file/d/1_u9qBUn_zhrNJsjT1GyXM1h6C2brW0ax/view?usp=share_link' target='_blank' rel="noreferrer" id="resume" className="btn"><span>Resume</span>
                    <i className="fas fa-chevron-right"></i>
                </a>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default About