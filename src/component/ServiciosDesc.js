import React from "react";
import './style/Servicios.css';
import {faChair, faCouch, faTools} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAccusoft} from "@fortawesome/free-brands-svg-icons";
import FooterCompo from "./FooterCompo";

export default function ServiciosDesc() {
    return (
        <React.Fragment>
            <div className="container-fluid divprincipalServicio">
                <p className="serviciosTitle">Servicios</p>
                <div className="container-fluid">
                    <p className="descripcionServicios">
                        Trabajamos cada uno de nuestros proyectos con técnicas en 2D asi como en 3D, utilizando una
                        combinación de bocetos a mano, software de computadora y modelos físicos para dar una impresión
                        clara de los espacios que estamos creando.
                        adaptámos las necesidades, gustos, costumbres, y presupuesto de nuestros clientes,
                        contando con ellos en todo momento y creando espacios significativos que tienen un impacto en su
                        forma de vida.
                        <br/><br/>
                        Si está buscando crear una historia única para tu vida, estamos aquí para escuchar.
                    </p>
                </div>
                <br/>
                <div className="row container-fluid serviciosIconsDiv">
                    <div className="col-3">
                        <FontAwesomeIcon icon={faAccusoft} className="iconStyleService"/>
                        <h1 className="letra">Arquitectura</h1>
                    </div>
                    <div className="col-3">
                        <FontAwesomeIcon icon={faChair} className="iconStyleService"/>
                        <h1 className="letra">Diseño interior</h1>
                    </div>
                    <div className="col-3">
                        <FontAwesomeIcon icon={faCouch} className="iconStyleService"/>
                        <h1 className="letra mobiliario">Mobiliario</h1>
                    </div>
                    <div className="col-3">
                        <FontAwesomeIcon icon={faTools} className="iconStyleService"/>
                        <h1 className="letra">Remodelación</h1>
                    </div>
                    <div style={{padding: "40px"}}/>
                    <div style={{bottom: "0", position: "relative"}}>
                    </div>
                </div>
                <FooterCompo/>
            </div>
        </React.Fragment>
    );
}
