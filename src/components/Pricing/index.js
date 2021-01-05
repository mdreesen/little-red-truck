import React from 'react';

import engagementPic from '../../images/ringPic.jpg';
import fresh48 from '../../images/elliot.jpg';
import birthPic from '../../images/familyPic5.jpg';
import familyPic from '../../images/familyPricing.jpg';

function Price() {
    return (
        <section>
        <div className="row"></div>
            <div className="card-deck">
            <div className="row">
            <div className="card col-md-3">
                    <img className="card-img-top" src={engagementPic} alt="Card image cap" />
                    <div className="card-body">
                    <h5 className="card-title">engagements</h5>
                    <p className="card-text">Begins at $350</p>
                    <p className="card-text">One to Two outfit changes</p>
                    <p className="card-text">45-60 min session</p>
                    <p className="card-text">20-25 edited photos, digital images & online gallery</p>
                    </div>
                </div>
                <div className="card col-md-3">
                    <img className="card-img-top" src="..." alt="Card image cap" />
                    <div className="card-body">
                    <h5 className="card-title">Wedding</h5>
                    <p className="card-text">Begins at $2300</p>
                    <p className="card-text">4-6 hours of coverage</p>
                    </div>
                </div>
                <div className="card col-md-3">
                    <img className="card-img-top" src={birthPic} alt="Card image cap" />
                    <div className="card-body">
                    <h5 className="card-title">Birth</h5>
                    <p className="card-text">$950</p>
                    <p className="card-text">4-6 hours of coverage</p>
                    </div>
                </div>
                <div className="card col-md-3">
                        <img className="card-img-top" src={familyPic} alt="Card image cap" />
                        <div className="card-body">
                        <h5 className="card-title">Family</h5>
                        <p className="card-text">$350</p>
                        <p className="card-text">20 - 25 edited photos, digital images & online gallery</p>
                        </div>
                    </div>
                    <div className="card col-md-3">
                        <img className="card-img-top" src={fresh48} alt="Card image cap" />
                        <div className="card-body">
                        <h5 className="card-title">Fresh 48</h5>
                        <p className="card-text">$250</p>
                        <p className="card-text">10-15 digital images & online gallery</p>
                        </div>
                    </div>
            </div>
            </div>
        </section>

    );
}

export default Price