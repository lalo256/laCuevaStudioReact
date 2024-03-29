import React from "react";
import './Secciones.css';
import {Col, Row} from "react-bootstrap";
import imagen1 from '../Images/arqDis.jpeg';
import {ToContacto} from "./FootSeccion";


export default function Seccion2() {
    return (
        <React.Fragment>
            <div className={'SeccionPar'}>
                <Row className='show-grid'>
                    <Col md={1}/>
                    <Col md={4}>
                        <h2 className={'TituloSecciones'}>Arquitectura+interiorismo</h2>
                        <p className={'contenidoSecciones'}>
                            Nos especializamos en la realización de proyectos para viviendas unifamiliares, con técnicas
                            en 2D así como en 3D, utilizando una combinación de bocetos a mano, software de computadora
                            y modelos físicos para dar una impresión clara de los espacios que estamos creando. adaptado
                            las necesidades y presupuesto de nuestros clientes, contando con ellos en todo momento ,
                            creando espacios significativos que tienen un impacto en su forma de vida.
                            <br/>
                            Tanto para viviendas de obra nueva así como en remodelaciones, realizamos un proyecto de
                            interiorismo, en armonía con la propuesta arquitectónica creada, Nos encargamos de gestionar
                            la compra, el transporte, montaje del mobiliario y los materiales que conforman el
                            interiorismo.

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