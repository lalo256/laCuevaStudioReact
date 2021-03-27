import React from "react";
import Navbar from "../component/Navbar";
import FooterCompo from "../component/FooterCompo";
import '../component/style/Nosotros.css'
import NosotrosDesc from '../component/NosotrosDesc';

class Nosotros extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <div className="container">
                    <h1 className="presentacinTitulo">Nosotros</h1>
                    <p className="nosotrosPresentacion">
                        La Cueva Studio con sede en ciudad de México y Cuautla Morelos
                        enfocado en el diseño, construcción, remodelación y diseño de interiores
                        de viviendas unifamiliares y proyectos con poco presupuesto, garantizando
                        la calidad de la obra.

                        <br/><br/>
                        Fundado por Carlos Cuevas, Eduardo Cuevas Y Jesus Cuevas.

                        <h2 className="lema">"Arquitectura al alcance de todos"</h2>
                    </p>
                </div>
                <NosotrosDesc/>
                <br/>
                <FooterCompo/>
            </React.Fragment>
        )
    }
}

export default Nosotros;