import React from "react";

export default class ServiciosDesc extends React.Component {
    constructor() {
        super()
        this.state = {
            showMe1: true,
            showMe2: false,
            showme3: false
        }
    }

    operation1() {
        this.setState({
            showMe1: !this.state.showMe1,
            showMe2: false,
            showMe3: false
        })
    }

    operation2() {
        this.setState({
            showMe1: false,
            showMe2: !this.state.showMe2,
            showMe3: false
        })
    }

    operation3() {
        this.setState({
            showMe1: false,
            showMe2: false,
            showMe3: !this.state.showMe3
        })
    }


    render() {
        let class1 = "btn btn-outline-dark";
        let class2 = "btn btn-outline-dark";
        let class3 = "btn btn-outline-dark";
        if (this.state.showMe1) {
            class1 = "btn btn-outline-dark active"
            class2 = "btn btn-outline-dark";
            class3 = "btn btn-outline-dark";
        }
        if (this.state.showMe2) {
            class1 = "btn btn-outline-dark"
            class2 = "btn btn-outline-dark active";
            class3 = "btn btn-outline-dark";
        }
        if (this.state.showMe3) {
            class1 = "btn btn-outline-dark"
            class2 = "btn btn-outline-dark";
            class3 = "btn btn-outline-dark active";
        }
        return (
            <React.Fragment>
                <div className="row divServPrincipal">
                    <div className="col-3 divServIzq">
                        <h3 className="text-danger">Servicios</h3><br/>
                        <div className="container botonesNombre">
                            <button type="button" className={class1} data-target="#Arqui"
                                    onClick={() => this.operation1()}>Arquitectura
                            </button>
                            <br/><br/>
                            <button type="button" className={class2} data-target="#Remodel"
                                    onClick={() => this.operation2()}>Remodelación
                            </button>
                            <br/><br/>
                            <button type="button" className={class3} data-target="#Diseño"
                                    onClick={() => this.operation3()}>Diseño de interiores
                            </button>
                        </div>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-8">
                        {this.state.showMe1 ?
                            <div>
                                <div className="container">
                                    <h6 className="descripcionServicio fontM">
                                        Buscando siempre una arquitectura con identidad mexicana, limpia de
                                        contrastes y matices, con nuevas tecnologías , con espacios para
                                        disfrutar y vivir una experiencia intima en su interior, aislandose del
                                        exterior con condiciones de confort (térmicas, iluminación, acústicas y
                                        ergonomícas) y así trasmitir los deseos y necesidades de los usuarios a
                                        los espacios a habitar.
                                    </h6>
                                </div>
                            </div>
                            : null}

                        {this.state.showMe2 ?
                            <div>
                                <div className="container">
                                    <h6 className="descripcionServicio fontM">
                                        Mejoramos espacios con diseños innovadores y de la mejor calidad
                                        para satisfacer a cada uno de nuestros clientes sin importar cual sea su
                                        necesidad.
                                    </h6>
                                </div>
                            </div>
                            : null}

                        {this.state.showMe3 ?
                            <div>
                                <div className="container">
                                    <h5 className="descripcionServicio fontM">
                                        Ofrecemos originalidad, elegancia y vanguardia, proponiendo una opción
                                        para integrar tu personalidad a tu hogar , dándole a cada pieza una
                                        razón por la que tenga que ser usada , buscando en su interior líneas
                                        geométricas limpias. Una atmósfera suave, y con colores monocromáticos ,
                                        buscando que el espacio , interactúe con los objetos y lo defina.
                                    </h5>
                                </div>
                            </div>
                            : null}
                    </div>

                </div>
            </React.Fragment>
        );
    }
}
