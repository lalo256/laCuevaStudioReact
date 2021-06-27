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
                <div style={{width: "100%", height: "100%", background: "black", left: "0"}} className="container-fluid">
                    <h1 className="presentacinTitulo">Nosotros</h1>
                    <p className="nosotrosPresentacion">
                        Nacimos bajo la necesidad de ayudar y asesorar a nuestros clientes en la construcción de su
                        hogar ideal desde el proceso creativo hasta la entrega de sus llaves, Incluyéndolos en cada
                        parte, decisión y acción de su nuevo hogar, enfocado en el diseño, construcción, remodelación,
                        gestión y diseño de interiores. Evitando el estrés y complicaciones que este proceso genera.


                        <h2 className="lema">"Arquitectura como tu digas, como tu quieras y como tu decidas”</h2>
                    </p>
                </div>
                <NosotrosDesc/>
                <br/>
                <div className="divFootNosotros">
                    <FooterCompo clase1={"nosotrosConfig fontposition1"} clase2={"nosotrosConfig fontposition2"} clase3={"nosotrosConfig fontposition3"}/>
                </div>

            </React.Fragment>
        )
    }
}

export default Nosotros;