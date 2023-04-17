import React, {useEffect} from 'react'
import '../styles/projects.css'
import Portfolio from '../imgs/Portfolio_1.png'
import VanillaTilt from 'vanilla-tilt';

function Projects() {
    useEffect(() => {
        const img = document.querySelectorAll('.tilt');
        VanillaTilt.init(img, {
          max: 25,
          speed: 400,
          glare: true,
          'max-glare': 0.5,
        });
      }, []);
      function clicked(e) {
        e.preventDefault();
      }
  return (
    <>
    <section className='project'>
      <div className="box-container">
        <h1 className="heading"><i className="fas fa-laptop-code"></i>My <span>Projects</span></h1>
        <div className="container">
            <div className="row">
                <div className="col tilt">
                    <img src="https://i0.wp.com/gomechanic.in/blog/wp-content/uploads/2019/12/images-6.jpg?w=678&ssl=1"
                        alt="pro1"/>
                    <div className="content">
                        <div className="title">Self Driving Car</div>
                        <div className="desc">
                            <p>A Machine Learning Model that predicts the Streeing Angle of the car for given input
                                image using python library like OpenCV, Tf etc</p>
                            <div className="btns">
                                <a href onClick={clicked} className="btn" target="_blank" rel="noreferrer"><i className="fa fa-eye" aria-hidden="true"></i>
                                    view</a>
                                <a href onClick={clicked} className="btn" target="_blank" rel="noreferrer"><i className="fa fa-code"></i> code</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col tilt">
                    <img src={Portfolio} width={10} height={1} alt="pro2"/>
                    <div className="content">
                        <div className="title">PortFolio</div>
                        <div className="desc">
                            <p>Using REACTJS, HTML, CSS, BOOTSTRAP created my PortFolio. It has various sections like aboutme,
                                contact, skills etc.</p>
                            <div className="btns">
                                <a href onClick={clicked} className="btn" target="_blank" rel="noreferrer"><i className="fa fa-eye" aria-hidden="true"></i>
                                    view</a>
                                <a href onClick={clicked} className="btn" target="_blank" rel="noreferrer"><i className="fa fa-code"></i> code</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col tilt">
                    <img src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*4nwOfsukl9jaz8NqHTMf7Q.png" alt="pro3"/>
                    <div className="content">
                        <div className="title">Blockchain Based Spotify</div>
                        <div className="desc">
                            <p>Creating a Spotify music app using Ethereum Blockchain and frontend with React. The
                                smart contracts is written in Solidity.</p>
                            <div className="btns">
                                <a href onClick={clicked} className="btn" target="_blank" rel="noreferrer"><i className="fa fa-eye" aria-hidden="true"></i>
                                    view</a>
                                <a href onClick={clicked} className="btn" target="_blank" rel="noreferrer"><i className="fa fa-code"></i> code</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
    </>
  )
}

export default Projects