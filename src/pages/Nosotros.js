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
                        <p className="nosotrosPresentacion">
                            Ayudamos y asesoramos en la construcción de tu hogar ideal, adaptando cada diseño a tu
                            personalidad.

                            En cada proyecto te Incluimos para formar parte, decisión y acción de nuestros diseños, de
                            esta manera, habilitamos espacios para contar historias, aportando un enfoque, personal y
                            único a cada proyecto.
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