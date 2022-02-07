import React from "react";
import {Col, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faLinkedin, faPinterest} from "@fortawesome/free-brands-svg-icons";
import './Secciones.css';
import {useHistory} from "react-router-dom";
import {faArrowCircleRight, faHome} from "@fortawesome/free-solid-svg-icons";

export default function FootSeccion() {
    return (
        <React.Fragment>
            <div className={'SeccionPar'}>
                <Row className='show-grid'>
                    <Col md={3}>
                        <div style={{display: 'inline-flex'}}>
                            <a href="https://www.facebook.com/lacuevastudioarq">
                                <FontAwesomeIcon icon={faFacebook} className={'iconFooter'}/>
                            </a>
                            <a href="https://www.instagram.com/lacuevastudio.arquitectos/">
                                <FontAwesomeIcon icon={faInstagram} className={'iconFooter'}/>
                            </a>
                            <a href="https://www.linkedin.com/company/la-cueva-studio/?viewAsMember=true">
                                <FontAwesomeIcon icon={faLinkedin} className={'iconFooter'}/>
                            </a>
                            <a href="https://www.pinterest.com.mx/lacuevastudio_Arq/_saved/">
                                <FontAwesomeIcon icon={faPinterest} className={'iconFooter'}/>
                            </a>
                        </div>
                    </Col>
                    <Col md={3}>

                    </Col>
                    <Col md={3}>

                    </Col>
                    <Col md={3}>
                        <p>La Cueva Studio ©2022</p>
                        <p>Powered By LaCuevaStudio/Software</p>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    );
}


export function ToContacto(props) {
    const history = useHistory();

    function toContacto() {
        history.push('/contacto');
    }

    return (
        <React.Fragment>
            <button className={!props.seccionImpar? 'btn btn-outline-dark': 'btn btn-outline-light'} onClick={toContacto}>
                <FontAwesomeIcon icon={faArrowCircleRight} className={'iconFooter1'}/><span
                className={'contactoBtn'}>Contactanos </span><br/>
            </button>
        </React.Fragment>
    );
}