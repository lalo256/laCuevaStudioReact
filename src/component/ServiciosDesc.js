import React from "react";
import './style/Servicios.css';
import {faChair, faTools} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAccusoft} from "@fortawesome/free-brands-svg-icons";

export default function ServiciosDesc() {
    return (
        <React.Fragment>
            <div className="container-fluid divprincipalServicio">
                <p className="serviciosTitle">Servicios</p>
                <div className="container-fluid">
                    <p className="descripcionServicios">
                        Nuestra arquitectura, interiorismo y remodelaciones esta enfocada y pensada para ti, adaptándola
                        a tus necesidades, gustos y costrubres, todo a tu medida y sin ningún tipo de complicaciones en
                        el proceso.

                        te guiaremos y asesoraremos a tomar las mejores decisiones, adaptándolo a tu estilo de vida.
                        contando con con tigo en todo momento en el proyecto, adaptándonos a tu presupuesto, gustos y
                        necesidades.

                        Nos encargaremos del diseño como de la construcción. Eso incluye la gestión de las licencias, de
                        los permisos necesarios, de los documentos técnicos y todos los trámites burocráticos
                        correspondientes antes, durante y después de la obra.

                        Todo esto a un precio fijo y en tiempo determinado, para que no tengas ningún imprevistos en
                        mudarte a tu nuevo hogar.
                        <br/><br/>
                        ¡ llegaste al lugar indicado nosotros te ayudamos ¡
                    </p>
                </div>
                <br/>
                <div className="row container">
                    <div className="col-4">
                        <FontAwesomeIcon icon={faAccusoft} className="iconStyleService"/>
                        <h1 className="letra">Arquitectura</h1>
                    </div>
                    <div className="col-4">
                        <FontAwesomeIcon icon={faChair} className="iconStyleService"/>
                        <h1 className="letra">Diseño interior</h1>
                    </div>
                    <div className="col-4">
                        <FontAwesomeIcon icon={faTools} className="iconStyleService"/>
                        <h1 className="letra">Remodelación</h1>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
