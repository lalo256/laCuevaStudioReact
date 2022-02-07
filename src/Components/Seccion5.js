import React from "react";
import './Secciones.css';
import {Col, Row} from "react-bootstrap";
import imagen1 from '../Images/noso.jpg';
import logo from '../Images/nombre2.png';
import {ToContacto} from "./FootSeccion";


export default function Seccion5() {
    return (
        <React.Fragment>
            <div className={'SeccionImpar'}>
                <Row className='show-grid'>
                    <Col md={7}>
                        <img src={imagen1} width={'100%'} alt={'imagen1'}/>
                    </Col>
                    <Col md={4}>
                        <img src={logo} width={'100%'} alt={'logo'}/>
                        <p className={'contenidoSecciones'}>
                            La fuerza de nuestro equipo viene de superar nuestras individualidades y formar bajo el
                            mismo concepto, La Cueva Studio Arquitectos.
                        </p>
                        <ToContacto seccionImpar={true}/>
                    </Col>
                    <Col md={1}/>
                </Row>
            </div>
        </React.Fragment>
    );
}