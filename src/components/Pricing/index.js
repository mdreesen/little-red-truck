import React from 'react';

import weddingPic from '../../images/ringPic.jpg';
import fresh48 from '../../images/elliot.jpg';
import engagementPic from '../../images/familyPic5.jpg';
import familyPic from '../../images/familyPricing.jpg';
import birthPic from '../../images/birthPic.jpg';
import fresh48Two from '../../images/Fresh48Two.jpg';

function Price() {
    return (
        <section>
        <div className="price-container">
        <div className="row"></div>
            <div className="card-deck">
            <div className="row">
            <div className="card col-md-5 mt-3">
                    <img className="card-img-top" src={engagementPic} alt="Card image cap" />
                    <div className="card-body">
                    <h5 className="card-title">engagements</h5>
                    <p className="card-text">$350</p>
                    <p className="card-text">45-60 min session - One to two outfit changes</p>
                    <p className="card-text">20-25 edited photos, digital images & online gallery</p>
                    </div>
                </div>
                <div className="card col-md-5 mt-3">
                    <img className="card-img-top" src={weddingPic} alt="Card image cap" />
                    <div className="card-body">
                    <h5 className="card-title">Wedding</h5>
                    <p className="card-text">Starts at $2300</p>
                    <p className="card-text">Contact for packages & includes online gallery</p>
                    </div>
                </div>
            </div>
                <div className="row">
                    <div className="card col-md-5 mt-3">
                        <img className="card-img-top" src={birthPic} alt="Card image cap" />
                        <div className="card-body">
                        <h5 className="card-title">Birth</h5>
                        <p className="card-text">$950</p>
                        <p className="card-text">Includes coverage of birth & online gallery</p>
                        </div>
                    </div>
                    <div className="card col-md-5 mt-3">
                            <img className="card-img-top" src={familyPic} alt="Card image cap" />
                            <div className="card-body">
                            <h5 className="card-title">Family</h5>
                            <p className="card-text">$350</p>
                            <p className="card-text">20 - 25 edited photos, digital images & online gallery</p>
                            </div>
                        </div>
                </div>
                <div className="row">
                <div className="card col-md-5 mt-3">
                        <img className="card-img-top" src={fresh48Two} alt="Card image cap" />
                        <div className="card-body">
                        <h5 className="card-title">Fresh 48</h5>
                        <p className="card-text">$250</p>
                        <p className="card-text">10-15 digital images & online gallery</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>

    );
}

export default Price