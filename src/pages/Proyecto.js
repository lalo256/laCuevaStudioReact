import React from "react";
import Navbar from "../component/Navbar";

import FooterCompo from "../component/FooterCompo";
import P1_1 from '../Images/p0100.jpg';
import P1_2 from '../Images/p0101.jpg';
import P1_3 from '../Images/p0102.jpg';
import P2_1 from '../Images/p0200.jpg';
import P2_2 from '../Images/p0201.jpg';
import P2_3 from '../Images/p0202.jpg';
import P3_1 from '../Images/p0300.jpeg';
import P3_2 from '../Images/p0301.jpeg';
import Carousel from "react-bootstrap/Carousel";
import '../component/style/proyecto.css'
import P5_1 from "../Images/p0500.jpeg";
import P5_2 from "../Images/p0501.jpeg";
import P4_1 from "../Images/p0400.jpeg";
import P4_2 from "../Images/p0401.jpeg";
import P6_1 from '../Images/p0600.jpeg';
import P6_2 from '../Images/p0601.jpeg';
import P7_1 from '../Images/p0700.jpeg';
import P7_2 from '../Images/p0701.jpeg';
import P8_1 from '../Images/p0800.jpeg';
import P8_2 from '../Images/p0801.jpeg';

class Proyecto extends React.Component{
    constructor(){
        super()
        this.state = {
            Page1 : true,
            Page2 : false,
            Page3 :false
        }
    }
    operation1(){
        this.setState({
            Page1:!this.state.Page1,
            Page2:false,
            Page3:false
        })
    }
    operation2(){
        this.setState({
            Page1:false,
            Page2:!this.state.Page2,
            Page3:false
        })
    }
    operation3(){
        this.setState({
            Page1:false,
            Page2:false,
            Page3:!this.state.Page3
        })
    }
    render() {
        {/*pagina 1*/}
        if(this.state.Page1 === true){
            return (
                <React.Fragment>
                    <Navbar />
                    <div className="container proyect">
                        {/*proyecto 1*/}
                        <div className="row">
                            <div className="col-4">
                                <Carousel>
                                    <Carousel.Item interval={3000}>
                                        <img className="imgcaruselP" src={P6_1} />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="imgcaruselP" src={P6_2}/>
                                    </Carousel.Item>
                                </Carousel>
                                <h5 className="titleProject">Casa Purpura</h5>
                            </div>
                            <div className="col-8">
                                <p className="descripcionProject1">
                                    Se compone de 3 volúmenes principales en su fachada, que le provee una estética única.
                                    La iluminación de los interiores enfatiza los grandes ventanales que coronan
                                    la estructura.Se rige por las líneas rectas y los colores neutrales en
                                    el exterior como en su interior, llamando la atención por su belleza y
                                    sencillez.
                                </p>
                            </div>

                        </div>
                        <br/>

                        {/*proyecto2*/}
                        <div className="row">
                            <div className="col-4">
                                <Carousel>
                                    <Carousel.Item interval={3000}>
                                        <img className="imgcaruselP" src={P5_1} />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="imgcaruselP" src={P5_2}/>
                                    </Carousel.Item>
                                </Carousel>
                                <h5 className="titleProject">Stanza Bianca</h5>
                            </div>
                            <div className="col-8">
                                <p className="descripcionProject1">
                                    Residencia que tiene como premisa de diseño, La limpieza visual.
                                    El  interiorismo  es elegante, sobrio, de diseño simple y acabados neutros .
                                </p>
                            </div>

                        </div>
                        <br/>

                        {/*proyecto3*/}
                        <div className="row">
                            <div className="col-4">
                                <Carousel>
                                    <Carousel.Item interval={3000}>
                                        <img className="imgcaruselP" src={P4_1} />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="imgcaruselP" src={P4_2}/>
                                    </Carousel.Item>
                                </Carousel>
                                <h5 className="titleProject">Puntos Altos</h5>
                            </div>
                            <div className="col-8">
                                <p className="descripcionProject1">
                                    Residencia que en su fachada
                                    se observa líneas puras y simples en color blanco
                                    que inunda tanto el interior como el exterior de la residencia.
                                    Que conforma una vivienda moderna y simple, con terrazas y ventanales
                                    en la parte trasera que genera la entrada natural de los rayos del sol.
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="paginationDiv container">
                        <ul className="pagination">
                            <li className="page-item page-link active" onClick={() => this.operation1()}>1</li>
                            <li className="page-item page-link text-danger" onClick={() => this.operation2()}>2</li>
                            <li className="page-item page-link text-danger" onClick={() => this.operation3()}>3</li>
                            <li className="page-item page-link text-danger" onClick={() => this.operation2()}>Next</li>
                        </ul>
                    </div>
                    <FooterCompo />
                </React.Fragment>
            )
        }
        {/*pagina 2*/}
        if(this.state.Page2 === true){
            return (
                <React.Fragment>
                    <Navbar />
                    <div className="container proyect">
                        {/*proyecto4*/}
                        <div className="row">
                            <div className="col-4">
                                <Carousel>
                                    <Carousel.Item interval={3000}>
                                        <img className="imgcaruselP" src={P7_1} />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="imgcaruselP" src={P7_2}/>
                                    </Carousel.Item>
                                </Carousel>
                                <h5 className="titleProject">Casa Ciotola</h5>
                            </div>
                            <div className="col-8">
                                <p className="descripcionProject1">
                                    Una vivienda que se caracteriza por un diseño con menos elementos y que sus formas son
                                    sencillas  utilizando materiales que buscan la simplicidad en los colores, pocas texturas y
                                    accesorios. Cada espacio proyecta, limpieza, amplitud y sencillez para lo que se
                                    implementan materiales ecológicos que inspiran el regreso a lo natural, sin
                                    olvidar elementos que conecten con la modernidad
                                </p>
                            </div>

                        </div>

                        {/*proyecto5*/}
                        <div className="row">
                            <div className="col-4">
                                <Carousel>
                                    <Carousel.Item interval={3000}>
                                        <img className="imgcaruselP" src={P8_1} />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="imgcaruselP" src={P8_2}/>
                                    </Carousel.Item>
                                </Carousel>
                                <h5 className="titleProject">Casa di contrasto</h5>
                            </div>
                            <div className="col-8">
                                <p className="descripcionProject1">
                                    Una casa cuyo revestimiento de madera le otorga un contraste muy
                                    peculiar en la fachada emulando la naturaleza, que incorpora la
                                    modernidad en su interior. Los tonos neutros, resaltando el gris y
                                    negro visten cada rincon de esta casa, dotandola de una elegancia y
                                    naturalidad.
                                </p>
                            </div>

                        </div>

                        {/*proyecto6*/}
                        <div className="row">
                            <div className="col-4">
                                <Carousel>
                                    <Carousel.Item interval={3000}>
                                        <img className="imgcaruselP" src={P1_1} />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="imgcaruselP" src={P1_2}/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="imgcaruselP" src={P1_3}/>
                                    </Carousel.Item>
                                </Carousel>
                                <h5 className="titleProject">Casa Marte</h5>
                            </div>
                            <div className="col-8">
                                <p className="descripcionProject1">
                                    Residencia diseñada bajo la premisa de construir una propiedad elegante de bajo costo, con una simpleza en sus formas.
                                    Consta con dos volúmenes intersectados y su simpleza la hace resaltar en sus tonos blancos.
                                </p>
                            </div>

                        </div>

                        <div className="paginationDiv container">
                            <ul className="pagination">
                                <li className="page-item page-link text-danger"onClick={() => this.operation1()}>Previous</li>
                                <li className="page-item page-link text-danger" onClick={() => this.operation1()}>1</li>
                                <li className="page-item page-link active" onClick={() => this.operation2()}>2</li>
                                <li className="page-item page-link text-danger" onClick={() => this.operation3()}>3</li>
                                <li className="page-item page-link text-danger" onClick={() => this.operation3()}>Next</li>
                            </ul>
                        </div>
                        <FooterCompo />
                        </div>
                </React.Fragment>
            )
        }
        {/*pagina 3*/}
        if(this.state.Page3 === true){
            return(
                <React.Fragment>
                    <Navbar />
                    <div className="container proyect">
                        {/*proyecto7*/}
                        <div className="row">
                            <div className="col-4">
                                <Carousel>
                                    <Carousel.Item interval={3000}>
                                        <img className="imgcaruselP" src={P2_1} />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="imgcaruselP" src={P2_2}/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="imgcaruselP" src={P2_3}/>
                                    </Carousel.Item>
                                </Carousel>
                                <h5 className="titleProject">Casa Matiz</h5>
                            </div>
                            <div className="col-8">
                                <p className="descripcionProject1">
                                    Residencia que consta de 3 volúmenes invisibles a la vista,
                                    resaltando sus tonalidades en grises, negros y blancos, generando un
                                    espacio interior armónico y confortable.
                                </p>
                            </div>

                        </div>

                        {/*proyecto8*/}
                        <div className="row">
                            <div className="col-4">
                                <Carousel>
                                    <Carousel.Item interval={3000}>
                                        <img className="imgcaruselP" src={P3_1} />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="imgcaruselP" src={P3_2}/>
                                    </Carousel.Item>
                                </Carousel>
                                <h5 className="titleProject">Casa Spring</h5>
                            </div>
                            <div className="col-8">
                                <p className="descripcionProject1">
                                    Residencia para vacaciones, con un estilo moderno y
                                    vanguardista, consta de solo una planta la cual facilita su construcción.
                                    El blanco en su  fachada hace que el interior sea mas fresco de lo
                                    habitual.
                                </p>
                            </div>

                        </div>

                        <div className="paginationDiv container">
                            <ul className="pagination">
                                <li className="page-item page-link text-danger"onClick={() => this.operation2()}>Previous</li>
                                <li className="page-item page-link text-danger" onClick={() => this.operation1()}>1</li>
                                <li className="page-item page-link text-danger" onClick={() => this.operation2()}>2</li>
                                <li className="page-item page-link active" onClick={() => this.operation3()}>3</li>
                            </ul>
                        </div>
                    </div>
                    <FooterCompo />
                </React.Fragment>
            )
        }
    }

    }

export default Proyecto;