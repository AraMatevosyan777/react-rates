import React from 'react';
import './Footer.css';
import './FooterMedia.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF,faTwitter,faGooglePlusG,faLinkedinIn,faInstagram,faPinterest } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="socialItems">
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
            <div className="footerText">© 2020 React Rates App</div>
        </footer>
    )
}

export default Footer;