import React from "react";

function Contact() {

    const icon = {
        instagram: 'https://www.instagram.com/littleredtruckphotography/',
        facebook: 'https://www.facebook.com/Littleredtruckphotography/'
    }

    return(
        <section>
        <div className="price-container">
        <div className="card-contact text-center">
            <div className="card-body">
                <div className="icon-container">

                    <div className="social-container">
                        <h3>Find littleredtruckphotography on facebook and instagram</h3>
                        <a href={icon.instagram}><i className="iconPic fab fa-instagram fa-4x" /></a>
                        <a href={icon.facebook}><i className="iconPic fab fa-facebook-square fa-4x" /></a>
                    </div>
                    <div className="email-container">
                        <h3>Email LRT Photography</h3>
                        <a href="mailto: stephaniemichelle01@yahoo.com"><i className="iconPic fas fa-envelope-open-text fa-4x" /></a>
                    </div>
                </div>
            </div>
        </div>

        </div>

        </section>
    );
}

export default Contact;