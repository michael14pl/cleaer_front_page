import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

class Navbar extends Component {
    state = {
        color: 'white',
        background: 'none',
        height: 'auto',
    }

    listenScrollEvent = () => {
        if (window.scrollY > 1) {
            this.setState({ color: 'black', background: '#E0412C', heigth: 'auto' })

        } else {
            this.setState({ color: 'white', background: 'none' })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    render() {
        return (
            <div className="navbar" id="homepage">
                <div className="navbar-background ">
                    <div className="navbar-body">
                        <div className="navbar-top" style={{ background: this.state.background, height: this.state.height }}>
                            <div className="navbar-sign">
                                <p style={{ color: this.state.color }}>K</p>
                            </div>
                            <div className="navbar-links">
                                <ul>
                                    <li ><a href="#homepage"><span style={{ color: this.state.color }}>Home</span></a></li>
                                    <li><a href="#about"><span style={{ color: this.state.color }}>O mnie</span></a></li>
                                    <li><a href="#awards"><span style={{ color: this.state.color }}>Statystyki</span></a></li>
                                    <li><a href="#portfolio"><span style={{ color: this.state.color }}>Portfolio</span></a></li>
                                    <li><a href="#skils"><span style={{ color: this.state.color }}>Informacje</span></a></li>
                                    <li><a href="#partners"><span style={{ color: this.state.color }}>Pracowałem dla</span></a></li>
                                    <li><a href="#posts"><span style={{ color: this.state.color }}>Blog</span></a></li>
                                    <li><a href="#contact"><span style={{ color: this.state.color }}>Kontakt</span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="navbar-center">
                            <div className="navbar-center-names">
                                <p>Michał</p>
                                <p>Kawa</p>
                            </div>
                            <div className="navbar-center-description">
                                <p>front-end developer</p>
                            </div>
                            <button>Pobierz moje CV</button>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Navbar;

