import React from "react";
import {Col, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faLinkedin, faPinterest} from "@fortawesome/free-brands-svg-icons";
import './Secciones.css';
import {useHistory} from "react-router-dom";
import {faArrowCircleRight} from "@fortawesome/free-solid-svg-icons";
import logoSoftware from '../Images/LCSSoftware.jpeg';

export default function FootSeccion() {
    return (
        <React.Fragment>
            <div className={'SeccionPar'}>
                <Row className='show-grid'>
                    <Col md={3}>
                        <div style={{display: 'inline-flex'}} className={'footerHover'}>
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
                        <p>La Cueva Studio ©2022</p>
                    </Col>
                    <Col md={3}>
                        <p>Powered By <br/><img src={logoSoftware} alt={'logoSoftware'} className={'logoSofware'}/></p>
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
            <div className={'btnContactoPosition'}>
                <button className={!props.seccionImpar ? 'btn btn-outline-dark' : 'btn btn-outline-light'}
                        onClick={toContacto}>
                    <FontAwesomeIcon icon={faArrowCircleRight} className={'iconFooter1'}/><span
                    className={'contactoBtn'}>Contactanos </span><br/>
                </button>
            </div>
        </React.Fragment>
    );
}