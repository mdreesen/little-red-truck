import React from "react";

// importing components
import About from './components/About';
import Navbar from './components/Navbar';

// This is for the picture slider
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./styles.css";
import familyPic1 from './images/familyPic1.jpg';
import familyPic2 from './images/familyPic2.jpg';
import familyPic3 from './images/familyPic3.jpg';
import familyPic4 from './images/familyPic4.jpg';



const fadeImages = [
  familyPic1,
  familyPic2,
  familyPic3,
  familyPic4
];

export default function App() {
  return (
    <div className="page">
        <section className="slide-container">
        <div className="imageContainer">
        <Navbar />
        <Fade>
          <div className="each-fade">
            <img className="sliderImage" src={fadeImages[0]} />
          </div>
          <div className="each-fade">
            <img className="sliderImage" src={fadeImages[1]} />
          </div>
          <div className="each-fade">
            <img className="sliderImage" src={fadeImages[2]} />
          </div>
          <div className="each-fade">
            <img className="sliderImage" src={fadeImages[3]} />
          </div>

        </Fade>
        </div>
      </section>
      <section>
       <About />
      </section>
    </div>
  );
}