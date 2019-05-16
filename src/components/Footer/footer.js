import React from 'react';
import './footer.scss';


const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <div className="container" id="contact">
                    <div className="footer-top-title">
                        <div className="font-style-header">
                            napisz do mnie
                        </div>
                    </div>
                    <div className="footer-top-pools">
                        <div className="footer-top-pools-line-1">
                            <div className="single-pool">
                                <form>
                                    <input type="text" name="name" placeholder="name" />
                                </form>
                            </div>
                            <div className="single-pool">
                                <form>
                                    <input type="text" name="e-mail" placeholder="e-mail" />
                                </form>
                            </div>
                            <div className="single-pool">
                                <form>
                                    <input type="text" name="phone" placeholder="phone" />
                                </form>
                            </div>
                        </div>
                        <div className="footer-top-pools-line-2">
                            <div className="single-pool">
                                <form>
                                    <textarea name="message" col="" rows="10" placeholder="message" />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="footer-top-button">
                        <button>wyślij</button>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="copyrights">
                        <div className="font-style-text">
                            Wszelkie prawa zastrzeżone &copy; 2019
                        </div>
                    </div>
                    <div className="icons">
                        <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
                        <a href="https://twitter.com/"><i className="fab fa-twitter-square"></i></a>
                        <a href="https://developers.google.com/+/"><i className="fab fa-google-plus-square"></i></a>
                        <a href="https://pl.pinterest.com/"><i className="fab fa-pinterest-square"></i></a>
                        <a href="https://www.whatsapp.com/"><i className="fab fa-whatsapp-square"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;