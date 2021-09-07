import React from 'react';
import './Footer.css';
import brandLogo from '../../../images/logo.png'
import { faFacebookSquare, faTwitter, faYoutube, faGooglePlusSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faFax } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="pt-5 pb-3">
            <div className="container">

                <div className="row">
                    <div className="col-md-3">
                        <Link to="/" className="brand-logo" >
                            <img  style={{height:"150px"}} src={brandLogo} alt="" />
                        </Link>
                        <div className="social-ico-container w-100 pt-3">
                            <Link to="/"><FontAwesomeIcon className="social-ico" icon={faFacebookSquare} /></Link>
                            <Link to="/"><FontAwesomeIcon className="social-ico" icon={faInstagramSquare} /></Link>
                            <Link to="/"><FontAwesomeIcon className="social-ico" icon={faTwitter} /></Link>
                            <Link to="/"><FontAwesomeIcon className="social-ico" icon={faGooglePlusSquare} /></Link>
                            <Link to="/"><FontAwesomeIcon className="social-ico" icon={faYoutube} /></Link>
                        </div>
                    </div>

                    <div className="col-md-3 text-white">
                        <h4 className="mb-4">CATEGORY</h4>
                        <h5>National News</h5>
                        <h5>International News</h5>
                        <h5>Sports News</h5>
                    </div>

                    <div className="col-md-3 text-white">
                        <h4 className="mb-4">QUICK LINK</h4>
                        <h5>National News</h5>
                        <h5>International News</h5>
                        <h5 as={Link} to="/sportsNews" >Sports News</h5>
                    </div>

                    <div className="col-md-3 text-white">
                        <h4 className="mb-4">Communicate With US</h4>
                        <h5><span className="me-2"><FontAwesomeIcon icon={faMapMarkerAlt} /></span>Rampura,Bangladesh</h5>
                        <h5><span className="me-2"><FontAwesomeIcon icon={faPhoneAlt} /></span>01614563314</h5>
                        <h5><span className="me-2"><FontAwesomeIcon icon={faEnvelope} /></span>Support@probir.com</h5>
                    </div>

                </div>
                <p className="text-center text-white">&copy; 2021 Website Developed by Probir Ghosh. </p>
            </div>
        </footer>
    );
};

export default Footer;