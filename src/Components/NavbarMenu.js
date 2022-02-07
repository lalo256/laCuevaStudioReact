import React, {useState} from "react";
import './Inicio.css';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Modal} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavbarMenu(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <React.Fragment>
            <Modal show={show} onHide={handleClose} animation={false} size={"xl"} style={{color: "whitesmoke"}}>
                <Modal.Header style={{background: "black"}}>
                    <Modal.Title>
                        <span className={'tituloModal'}>La Cueva Studio</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{background: "black"}} className={'navbarHover'}>
                    <ul>
                        <a href='#Inicio' onClick={handleClose}>
                            <li>Inicio</li>
                        </a>
                        <a href='#Arquitectura+interiorismo' onClick={handleClose}>
                            <li>Arquitectura + interiorismo</li>
                        </a>
                        <a href='#Sustentabilidad+Tecnologia' onClick={handleClose}>
                            <li>Sustentabilidad + Tecnologia</li>
                        </a>
                        <a href='#ProyectosSolidarios' onClick={handleClose}>
                            <li>Proyectos solidarios</li>
                        </a>
                        <a href='#Equipo' onClick={handleClose}>
                            <li>Equipo</li>
                        </a>
                    </ul>
                </Modal.Body>

            </Modal>

            <span>
                <FontAwesomeIcon icon={faBars} className={'navIcon'} onClick={handleShow}/>
            </span>
        </React.Fragment>
    );
}
