import React, {useState} from "react";
import './Inicio.css';
import {faBars, faHome, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button, Modal} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useHistory} from "react-router-dom";


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
                <Modal.Body style={{background: "black"}}>
                    <ul>
                        <a href='#Seccion2' onClick={handleClose}>
                            <li>Arquitectura + interiorismo</li>
                        </a>
                        <a href='#Seccion3' onClick={handleClose}>
                            <li>Sustentabilidad + Tecnologia</li>
                        </a>
                        <a href='#Seccion4' onClick={handleClose}>
                            <li>Proyectos solidarios</li>
                        </a>
                        <a href='#Seccion5' onClick={handleClose}>
                            <li>ultima</li>
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
