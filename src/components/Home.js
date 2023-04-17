import React, {useEffect, useRef} from 'react'
import '../styles/home.css'
import avatar from '../imgs/hero.png'
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import VanillaTilt from 'vanilla-tilt';
import Background from '../imgs/background.png'
function Home() {
  const typingTextRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'Web Development',
        'Frontend Development',
        'Backend Development',
        'Web Designing',
      ],
      loop: true,
      typeSpeed: 75,
      backSpeed: 25,
      backDelay: 500,
    };

    const typed = new Typed('.typing_text', options);

    return () => {
      typed.destroy();
    };
  }, []);
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
    <div className="home">
      <img className='back' src={Background} alt="background" />
        <div className="intro">
            <h1>Hello, <br/>I'm Srivallabh <span>Joshi</span></h1>
            <h3>I'm into <span className='typing_text' ref={typingTextRef}></span></h3>
            <div className='social_media'>
              <a href="https://www.facebook.com/profile.php?id=100004307417968" target='_blank' rel="noreferrer"><i class='bx bxl-facebook'></i></a>
              <a href="https://www.instagram.com/joshisrivallabh/" target='_blank' rel="noreferrer"><i class='bx bxl-instagram' ></i></a>
              <a href="https://twitter.com/JoshiSrivallabh" target='_blank' rel="noreferrer"><i class='bx bxl-twitter' ></i></a>
              <a href="https://www.linkedin.com/in/srivallabh-joshi-69ba8b258/" target='_blank' rel="noreferrer"><i class='bx bxl-linkedin-square' ></i></a>
              <a href="https://github.com/Srivallabh13"target='_blank' rel="noreferrer"><i class='bx bxl-github' ></i></a>
            </div>
            <div className="button-box">
                <Link className="btn" to='/about'>
                    About Me <i className="fa fa-arrow-circle-right"></i>
                </Link>
            </div>
        </div>
        <div className="pic">
             <img src={avatar} alt='avatar' className="tilt" width={400} height={400}/>
        </div> 
    </div>
    </>
  );
}

export default Home
