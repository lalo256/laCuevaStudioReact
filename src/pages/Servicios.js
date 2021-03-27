import React from "react";
import ServiciosDesc from "../component/ServiciosDesc";
import Navbar from "../component/Navbar";
import FooterCompo from "../component/FooterCompo";
import '../component/style/Servicios.css';

export default class Servicios extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <div className="container">
                    <ServiciosDesc/>
                </div>
                <FooterCompo/>
            </React.Fragment>
        );
    }
}