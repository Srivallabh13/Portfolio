import React from 'react'
import '../styles/education.css'
import schl from '../imgs/kvIMG.jpg'
import cole from '../imgs/image.jpg'
function Education() {
  return (
    <>
    <section className='edu'>
        <h1 className="heading"><i className="fas fa-graduation-cap"></i> My <span>Education</span></h1>
        <p className="quote">Education is the Key to Success</p>
        <div className="box-container">
            <div className="box"> 
                <div className="image">
                    <img src={cole} alt="college"/>
                </div>
                <div className="content">
                    <h3>Keshav Memorial Institute of Technology</h3>
                    <p>Bachelors in Technology | CSE</p>
                    <h4>2020-2024 | Pursuing</h4>
                </div>
            </div>
            <div className="box">
                <div className="image">
                    <img src={schl} alt="school"/>
                </div>
                <div className="content">
                    <h3>Kendriya Vidyalaya No.2 Golconda</h3>
                    <p>CBSE</p>
                    <h4>2017-2018 | Completed</h4>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Education