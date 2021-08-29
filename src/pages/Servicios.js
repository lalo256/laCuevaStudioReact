import React from "react";
import ServiciosDesc from "../component/ServiciosDesc";
import Navbar from "../component/Navbar";
import '../component/style/Servicios.css';

export default class Servicios extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Navbar/><br/><br/><br/><br/>
                <div className="container-fluid">
                    <ServiciosDesc/>
                </div>
            </React.Fragment>
        );
    }
}