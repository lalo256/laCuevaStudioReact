import React from "react";
import './Secciones.css';
import {Col, Row} from "react-bootstrap";
import imagen1 from '../Images/tecnoSustent.jpeg';
import {ToContacto} from "./FootSeccion";


export default function Seccion3() {
    return (
        <React.Fragment>
            <div className={'SeccionImpar'}>
                <Row className='show-grid'>
                    <Col md={7}>
                        <img src={imagen1} width={'100%'} alt={'imagen1'}/>
                    </Col>
                    <Col md={4}>
                        <h2 className={'TituloSecciones'}>Sustentabilidad+Tecnologia</h2>
                        <p className={'contenidoSecciones'}>
                            Contribuimos significativamente a mejorar la calidad de vida de nuestros clientes, mediante
                            el diseño de proyectos responsables y sostenibles, aprovechado al máximo las tecnologías
                            actuales para el desarrollo de procesos constructivos, instalaciones, sistemas de control,
                            calidad de los materiales etc, en beneficio del ambiente, consumo de energía en la
                            construcción y la salud de nuestros clientes.

                        </p>
                        <ToContacto seccionImpar={true}/>
                    </Col>
                    <Col md={1}/>
                </Row>
            </div>
        </React.Fragment>
    );
}