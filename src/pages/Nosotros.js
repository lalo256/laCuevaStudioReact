import React from "react";
import Navbar from "../component/Navbar";
import FooterCompo from "../component/FooterCompo";
import '../component/style/Nosotros.css'
import NosotrosDesc from '../component/NosotrosDesc';
import videopc from '../Images/pagina.mp4';

class Nosotros extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/><br/><br/><br/><br/>
                <div style={{width: "100%", height: "100%", background: "black", left: "0"}}
                     className="container-fluid row NosotrosDiv">
                    <div className={"col-lg-6 col-md-12 NosotrosCont"}>
                        <video loop autoPlay width="100%" height="100%" style={{margin: "0 0 10px 0"}}>
                            <source src={videopc}/>
                        </video>
                    </div>
                    <div className={"col-lg-6 col-md-12 NosotrosCont"}>
                        <h1 className="presentacinTitulo">Nosotros</h1>
                        <p className="nosotrosPresentacion">
                            Ayudamos y asesoramos a nuestros clientes en la construcción de su
                            hogar ideal desde el proceso creativo hasta la entrega de sus llaves, Incluyéndolos en cada
                            parte, decisión y acción de su nuevo hogar, enfocándonos en proyectos de diseño arquitectónico,
                            construcción, remodelación, diseño de interiores y mobiliario. <br/>Evitando el estrés y
                            complicaciones que este proceso genera.
                            {/*
                            <h2 className="lema">"Arquitectura como tu digas, como tu quieras y como tu decidas”</h2>
                            */}
                        </p>
                    </div>

                </div>
                <NosotrosDesc/>
                <br/>
                <div className="divFootNosotros">
                    <FooterCompo/>
                </div>

            </React.Fragment>
        )
    }
}

export default Nosotros;