import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

class Navbar extends Component {
    state = {
        background: 'none',
        height: 'auto',
        transition: '',
    }

    listenScrollEvent = () => {
        if (window.scrollY > 1) {
            this.setState({ background: '#35353B', heigth: 'auto', transition: '0.3s all' })

        } else {
            this.setState({ background: 'none', transition: '0.3s all' })
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
                        <div className="navbar-top" style={{ background: this.state.background, height: this.state.height, transition: this.state.transition }}>
                            <div className="navbar-links">
                                <label for="menu-toggle">☰</label>
                                <input type="checkbox" id="menu-toggle"></input>
                                <ul>
                                    <li ><a href="#homepage"><span style={{ color: this.state.color }}>Home</span></a></li>
                                    <li><a href="#about"><span style={{ color: this.state.color }}>O mnie</span></a></li>
                                    <li><a href="#awards"><span style={{ color: this.state.color }}>Doświadczenie</span></a></li>
                                    <li><a href="#portfolio"><span style={{ color: this.state.color }}>Portfolio</span></a></li>
                                    <li><a href="#partners"><span style={{ color: this.state.color }}>Współpraca</span></a></li>
                                    <li><a href="#posts"><span style={{ color: this.state.color }}>Pasje</span></a></li>
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
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Navbar;

