import React from 'react';
import './mainBody.scss';
import profilowe from './img/profilowe.jpg';
import google from './img/google.png';
import amazon from './img/amazon.png';
import ebay from './img/ebay.png';
import forbes from './img/forbes.png';


const Body = () => {
    return (
        <div className="body">
            <div className="body-information">
                <div className="container" id="about">
                    <div className="body-information-names">
                        <div className="font-style-header">Michał Kawa</div>
                        <p className="job">front-end developer</p>
                    </div>
                    <div className="body-information-description">
                        <div className="o-mnie">
                            <div className="o-mnie-zdjecie">
                                <img src={profilowe} alt="zdjecie Michała Kawy" />
                            </div>
                            <div className="o-mnie-opis">
                                <div className="font-style-title">o mnie</div>
                                <div className="font-style-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </div>
                            </div>
                        </div>
                        <div className="umiejetnosci">
                            <div className="font-style-title">umiejetnosci</div>
                            <div className="umiejetnosci-skill">
                                <div className="font-style-text">HTML5</div>
                                <div className="umiejetnosci-skill-bar">
                                    <div className="bar-1">
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                            <div className="umiejetnosci-skill">
                                <div className="font-style-text">CSS3</div>
                                <div className="umiejetnosci-skill-bar">
                                    <div className="bar-2">
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                            <div className="umiejetnosci-skill">
                                <div className="font-style-text">ReactJS</div>
                                <div className="umiejetnosci-skill-bar">
                                    <div className="bar-3">
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                            <div className="umiejetnosci-skill">
                                <div className="font-style-text">Python</div>
                                <div className="umiejetnosci-skill-bar">
                                    <div className="bar-4">
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="body-awards" id="awards">
                <div className="container">
                    <div className="body-awards-content">
                        <i className="fab fa-android"></i>
                        <div className="font-style-header">7</div>
                        <div className="font-style-title">Android</div>
                    </div>
                    <div className="body-awards-content">
                        <i className="fab fa-apple"></i>
                        <div className="font-style-header">42</div>
                        <div className="font-style-title">Apple</div>
                    </div>
                    <div className="body-awards-content">
                        <i className="fas fa-at"></i>
                        <div className="font-style-header">144</div>
                        <div className="font-style-title">Monkey</div>
                    </div>
                    <div className="body-awards-content">
                        <i className="fab fa-bitcoin"></i>
                        <div className="font-style-header">506</div>
                        <div className="font-style-title">Bitcoin</div>
                    </div>
                </div>
            </div>

            <div className="body-portfolio" id="portfolio">
                <div className="container">
                    <div className="body-portfolio-title">
                        <div className="font-style-header">portofolio</div>
                    </div>
                    <div className="body-portfolio-items">
                        <img src={profilowe} alt="profilowe" />
                        <img src={profilowe} alt="profilowe" />
                        <img src={profilowe} alt="profilowe" />
                        <img src={profilowe} alt="profilowe" />
                        <img src={profilowe} alt="profilowe" />
                        <img src={profilowe} alt="profilowe" />
                        <img src={profilowe} alt="profilowe" />
                        <img src={profilowe} alt="profilowe" />
                    </div>
                </div>
            </div>

            <div className="body-skills" id="skils">
                <div className="container">
                    <div className="body-skills-item">
                        <i className="fab fa-android"></i>
                        <div className="font-style-title">Lorem ipsum dolor</div>
                        <div className="font-style-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>
                    <div className="body-skills-item">
                        <i className="fab fa-android"></i>
                        <div className="font-style-title">Lorem ipsum dolor</div>
                        <div className="font-style-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>
                    <div className="body-skills-item">
                        <i className="fab fa-android"></i>
                        <div className="font-style-title">Lorem ipsum dolor</div>
                        <div className="font-style-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>
                    <div className="body-skills-item">
                        <i className="fab fa-android"></i>
                        <div className="font-style-title">Lorem ipsum dolor</div>
                        <div className="font-style-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>
                    <div className="body-skills-item">
                        <i className="fab fa-android"></i>
                        <div className="font-style-title">Lorem ipsum dolor</div>
                        <div className="font-style-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>
                    <div className="body-skills-item">
                        <i className="fab fa-android"></i>
                        <div className="font-style-title">Lorem ipsum dolor</div>
                        <div className="font-style-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>
                </div>
            </div>

            <div className="body-partnes" id="partners">
                <div className="container">
                    <div className="body-partners-item">
                        <img src={google} alt="google" />
                    </div>
                    <div className="body-partners-item">
                        <img src={amazon} alt="amazon" />
                    </div>
                    <div className="body-partners-item">
                        <img src={ebay} alt="ebay" />
                    </div>
                    <div className="body-partners-item">
                        <img src={forbes} alt="forbes" />
                    </div>
                </div>
            </div>

            <div className="body-posts" id="posts">
                <div className="container">
                    <div className="body-posts-items">
                        <div className="body-posts-item">
                            <div className="body-posts-item-top">
                                <img src={profilowe} alt="zdjecie Michała Kawy" />
                                <div className="font-style-title">
                                    <div className="title-1">kategoria</div>
                                </div>
                            </div>
                            <div className="body-posts-item-middle">
                                <div className="font-style-title">new trends</div>
                                <div className="font-style-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                            </div>
                            <div className="font-style-text">
                                <div className="body-posts-item-bottom">
                                    <b>Michał Kawa</b> on April 30, 2019
                                </div>
                            </div>
                        </div>
                        <div className="body-posts-item">
                            <div className="body-posts-item-top">
                                <img src={profilowe} alt="zdjecie Michała Kawy" />
                                <div className="font-style-title">
                                    <div className="title-2">kategoria</div>
                                </div>
                            </div>
                            <div className="body-posts-item-middle">
                                <div className="font-style-title">new trends</div>
                                <div className="font-style-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                            </div>
                            <div className="font-style-text">
                                <div className="body-posts-item-bottom">
                                    <b>Michał Kawa</b> on April 30, 2019
                                </div>
                            </div>
                        </div>
                        <div className="body-posts-item">
                            <div className="body-posts-item-top">
                                <img src={profilowe} alt="zdjecie Michała Kawy" />
                                <div className="font-style-title">
                                    <div className="title-3">kategoria</div>
                                </div>
                            </div>
                            <div className="body-posts-item-middle">
                                <div className="font-style-title">new trends</div>
                                <div className="font-style-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                            </div>
                            <div className="font-style-text">
                                <div className="body-posts-item-bottom">
                                    <b>Michał Kawa</b> on April 30, 2019
                                </div>
                            </div>
                        </div>
                    </div>
                    <button>zobacz wszystkie posty</button>
                </div>
            </div>
        </div>
    );
}

export default Body;