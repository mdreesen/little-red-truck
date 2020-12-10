import React from 'react';
import StephImage from '../../images/stephImage.jpg';

function About() {
    return(
        <section className="about-section">
            <div className="container">
                <div className="row">
                    <div className="stephContainer col-sm">
                        <img className="stephImage card-img-top" src={StephImage} alt="Card image cap" />
                    </div>
                    <div className="about-text col-sm">
                        <p>Hi There! My name is Stephanie and I am the owner of Little Red Truck Photography.</p>
                        <p>I am an event photographer who specializes in birth and fresh 48. I love to capture raw, candid, real life moments.</p>
                        <p>I have photographed everything from engagements, weddings, maternity, birth, fresh 48, first birthday, and family.</p>
                        <p>When I am not hiding behind the camera I am chasing after my two beautiful little girls and my little boy.</p>
                        <p>I am married to my best friend-seriously he is the best. I thrive off of the real moments that I capture.</p>
                        <p>Because of YOU, I get to live out my dream and continue to make my hobby my full-time job.</p>
                        <p>Look forward to documenting your truly personal, exciting, memorable day.</p>                   
                    </div>
                </div>
            </div>

        </section>
    );
}

export default About;