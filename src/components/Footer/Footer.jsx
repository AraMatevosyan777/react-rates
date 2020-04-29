import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF,faTwitter,faGooglePlusG,faLinkedinIn,faInstagram,faPinterest } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="page-footer font-small cyan darken-3 bg-dark">
            <div className="container">
                <div className="socialItems text-light">
                            <div>
                                <a href="#">
                                <FontAwesomeIcon icon={faFacebookF}/>
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                <FontAwesomeIcon icon={faTwitter}/>
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                <FontAwesomeIcon icon={faGooglePlusG}/>
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                <FontAwesomeIcon icon={faLinkedinIn}/>
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                <FontAwesomeIcon icon={faInstagram}/>
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                <FontAwesomeIcon icon={faPinterest}/>
                                </a>
                            </div>
                        </div>
            </div>

            <div className="footer-copyright text-center py-3 text-light">© 2020 React Rates App
            </div>

        </footer>
    )
}

export default Footer;