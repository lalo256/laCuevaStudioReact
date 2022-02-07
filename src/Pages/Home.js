import React from "react";
import Inicio from "../Components/Inicio";
import NavbarMenu from "../Components/NavbarMenu";
import Seccion2 from "../Components/Seccion2";
import {Container} from "react-bootstrap";
import Seccion3 from "../Components/Seccion3";
import Seccion4 from "../Components/Seccion4";
import Seccion5 from "../Components/Seccion5";
import FootSeccion from "../Components/FootSeccion";

export default function Home() {
    return (
        <React.Fragment>
            <NavbarMenu/>
            <a name='Inicio'>
                <Inicio/>
            </a>
            <Container style={{height: '2.5rem', borderBottom: '2px solid black', marginBottom: '2.5rem'}}/>
            <a name='Arquitectura+interiorismo'>
                <Seccion2/>
            </a>
            <Container style={{height: '2.5rem', borderBottom: '2px solid black', marginBottom: '2.5rem'}}/>
            <a name='Sustentabilidad+Tecnologia'>
                <Seccion3/>
            </a>
            <Container style={{height: '2.5rem', borderBottom: '2px solid black', marginBottom: '2.5rem'}}/>
            <a name='ProyectosSolidarios'>
                <Seccion4/>
            </a>
            <Container style={{height: '2.5rem', borderBottom: '2px solid black', marginBottom: '2.5rem'}}/>
            <a name='Equipo'>
                <Seccion5/>
            </a>
            <Container style={{height: '2.5rem', borderBottom: '2px solid black', marginBottom: '2.5rem'}}/>
            <FootSeccion/>
        </React.Fragment>
    );
}