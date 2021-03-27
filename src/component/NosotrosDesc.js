import React, {useState} from "react";
import './style/Nosotros.css'
import Crs from '../Images/2451.jpeg';
import Jesus from '../Images/2452.1.jpeg';
import Eduardo from '../Images/2453.1.jpeg';

function NosotrosDesc() {

    return (
        <React.Fragment>
            <div className="container Principales ocultarPc">
                <div className="row div1">
                    <div className="col-2">
                        <h4>Principales</h4>
                    </div>
                    <div className="col-1">
                        <h6>Carlos Cuevas</h6>
                    </div>
                    <div className="col-2">
                        <img src={Crs} className="imgPrincipal"/>
                    </div>

                    <div className="col-1">
                        <h6>Jesus Cuevas</h6>
                    </div>
                    <div className="col-2">
                        <img src={Jesus} className="imgPrincipal"/>
                    </div>

                    <div className="col-1">
                        <h6>Eduardo Cuevas</h6>
                    </div>
                    <div className="col-2">
                        <img src={Eduardo} className="imgPrincipal"/>
                    </div>


                </div>
            </div>

            {/*seccion movil*/}
            <div className="container Principales ocultarMovil">
                <div className="row div1">
                    <div className="col-12">
                        <h4>Principales</h4>
                    </div>
                    <div className="col-6">
                        <h3>Carlos Cuevas</h3>
                    </div>
                    <div className="col-6">
                        <img src={Crs} className="imgPrincipal"/>
                    </div>

                    <div className="col-6">
                        <h3>Jesus Cuevas</h3>
                    </div>
                    <div className="col-6">
                        <img src={Jesus} className="imgPrincipal"/>
                    </div>

                    <div className="col-6">
                        <h3>Eduardo Cuevas</h3>
                    </div>
                    <div className="col-6">
                        <img src={Eduardo} className="imgPrincipal"/>
                    </div>


                </div>
            </div>

        </React.Fragment>
    );
}


export default NosotrosDesc;