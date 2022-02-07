import React from "react";
import carru1 from '../Images/portada1.jpeg';
import './Inicio.css';
import {Container} from "react-bootstrap";
import imagen1 from "../Images/noso.jpeg";
import logo from '../Images/nombre2.png';

export default function Inicio() {
    return (
        <React.Fragment>
            <img src={logo} alt={'imagen1'} className={'imgLogoEnInicio'}/>
            <div className={'backgroundInicio'}>
                <img className="imgPrincipal" src={carru1} alt="imgCarusel1" width={'100%'}/>
                <Container>
                    <p className={'InicioDescrip'}>
                        Ayudamos a crear espacios únicos, sustentables, inteligentes y eficientes para viviendas
                        unifamiliares, mejorando la calidad de vida de las personas.
                    </p>
                </Container>

            </div>
        </React.Fragment>
    );
}