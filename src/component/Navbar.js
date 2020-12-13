import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './style/Navbar.css'
import logo from '../Images/1451.png'

class Navbar extends React.Component{
    render() {
        return (
            <React.Fragment>
                <div className="container border-bottom">
                    <nav className="navbar navbar-expand-md bg-transparent navbar-light">
                        <a className="navbar-brand" href="/Home"><img src={logo}/> </a>
                        <a className="navbar-brand styleNavbar" href="/Home">La Cueva Studio</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav styleNavbar">
                                <li className="nav-item">
                                    <a className="nav-link text-danger" href="/nosotros">NOSOTROS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-danger" href="/proyecto">PROYECTO</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-danger" href="/producto">PRODUCTO</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-danger" href="/contacto">CONTACTO</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </React.Fragment>
        )
    }
}
export default Navbar;