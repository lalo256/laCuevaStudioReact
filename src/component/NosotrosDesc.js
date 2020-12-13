import React, {useState} from "react";
import Noso1 from '../Images/2451.jpeg';
import Noso2 from '../Images/2452.1.jpeg';
import Noso3 from '../Images/2453.1.jpeg';


class NosotrosDesc extends React.Component{
    constructor(){
        super()
        this.state = {
            showMe1 : false,
            showMe2 : false,
            showme3 :false
        }
    }
    operation1(){
        this.setState({
            showMe1:!this.state.showMe1,
            showMe2:false,
            showMe3:false
        })
    }
    operation2(){
        this.setState({
            showMe1:false,
            showMe2:!this.state.showMe2,
            showMe3:false
        })
    }
    operation3(){
        this.setState({
            showMe1:false,
            showMe2:false,
            showMe3:!this.state.showMe3
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div>
                        <div className="container botonesNombre">
                            <button type="button" className="btn btn-dark" data-target="#CarlosC"
                                     onClick={() => this.operation1()}>Carlos Cuevas
                            </button>--
                            <button type="button" className="btn btn-dark" data-target="#JesusC"
                                     onClick={() => this.operation2()}>Jesus Cuevas
                            </button>--
                            <button type="button" className="btn btn-dark" data-target="#EduardoC"
                                     onClick={() => this.operation3()}>Eduardo Cuevas
                            </button>

                            {this.state.showMe1?
                            <div>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <img src={Noso1} />
                                        </div>
                                        <div className="col-sm-8">
                                            <p className="descripcionNoso">
                                                Curso sus estudios de arquitectura en la universidad
                                                tecnologica de mexico, con especilizacion en el diseño
                                                de interiores.
                                                enfocado a los proyecyos habitacionales y proyectos
                                                de impacto social.
                                                buscando siempre sustentabilidad, bajo costo de las obras
                                                y el confort de las personas.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             :null}

                            {this.state.showMe2?
                            <div >
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-sm-1"></div>
                                        <div className="col-sm-3">
                                            <img src={Noso2} />
                                        </div>
                                        <div className="col-sm-8">
                                            <p className="descripcionNoso">
                                                Cursa sus estudios en contaduría en la universidad tecnológica
                                                de México , enfocado en el area economico-administrativa para
                                                una mejor canalización de los recursos.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :null}

                            {this.state.showMe3?
                            <div>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-sm-2"></div>
                                        <div className="col-sm-2">
                                            <img src={Noso3} />
                                        </div>
                                        <div className="col-sm-1"></div>
                                        <div className="col-sm-7">
                                            <p className="descripcionNoso">
                                                Ingeniero en sistemas, enfocado a nuevas tecnologías
                                                capaces de automatizar una vivienda o edificación de
                                                cualquier tipo.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :null}


                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}
export default NosotrosDesc;