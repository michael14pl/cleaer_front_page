import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

export default class Navbar extends React.Component {
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
            <div className="navbar">
                <div className="navbar-background ">
                    <div className="navbar-body">
                        <div className="navbar-top" style={{ background: this.state.background, height: this.state.height }}>
                            <div className="navbar-sign">
                                <p style={{ color: this.state.color }}>K</p>
                            </div>
                            <div className="navbar-links">
                                <ul>
                                    <li ><Link to="/"><div style={{ color: this.state.color }}>Home</div></Link></li>
                                    <li><a href="#about"><span style={{ color: this.state.color }}>O mnie</span></a></li>
                                    <li><Link to="/"><div style={{ color: this.state.color }}>Statystyki</div></Link></li>
                                    <li><Link to="/"><div style={{ color: this.state.color }}>Portfolio</div></Link></li>
                                    <li><Link to="/"><div style={{ color: this.state.color }}>Informacje</div></Link></li>
                                    <li><Link to="/"><div style={{ color: this.state.color }}>Pracowałem dla</div></Link></li>
                                    <li><Link to="/"><div style={{ color: this.state.color }}>Blog</div></Link></li>
                                    <li><Link to="/"><div style={{ color: this.state.color }}>Kontakt</div></Link></li>
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