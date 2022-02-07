import React from "react";
import './Secciones.css';
import {Col, Row} from "react-bootstrap";
import imagen1 from '../Images/proSoli.jpeg';
import {ToContacto} from "./FootSeccion";


export default function Seccion4() {
    return (
        <React.Fragment>
            <div className={'SeccionPar'}>
                <Row className='show-grid'>
                    <Col md={1}/>
                    <Col md={4}>
                        <h2 className={'TituloSecciones'}>Proyectos solidarios</h2>
                        <p className={'contenidoSecciones'}>
                            Trabajamos activamente por hacer compatible nuestra actividad con proyectos que trabajen por
                            hacer del mundo un lugar mejor, en el que se reduzcan las desigualdades sociales y la
                            vivienda digna sea una prioridad.
                        </p>

                        <ToContacto/>
                    </Col>
                    <Col md={7}>
                        <img src={imagen1} width={'100%'} alt={'imagen1'}/>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    );
}