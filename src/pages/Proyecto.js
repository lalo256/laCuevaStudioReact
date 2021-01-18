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

class Proyecto extends React.Component{
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="container proyect">
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
                                Propuesta de un proyecto residencial diseñada bajo la premisa de construir una propiedad elegante de bajo costo, con una simpleza en sus formas.
                                Consta con dos volúmenes intersectados y su simpleza la hace resaltar en sus tonos blancos.
                            </p>
                        </div>

                    </div>
                    <br/>
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
                                Propuesta residencial que consta de 3 volúmenes invisibles a la vista,
                                resaltando sus tonalidades en grises, negros y blancos, generando un
                                espacio interior armónico y confortable.
                            </p>
                        </div>

                    </div>
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
                                Propuesta residencial para vacaciones, con un estilo moderno y
                                vanguardista, consta de solo una planta la cual facilita su construcción.
                                El blanco en su  fachada hace que el interior sea mas fresco de lo
                                habitual.
                            </p>
                        </div>

                    </div>
                </div>
                <br/>
                <FooterCompo />
            </React.Fragment>
        )
    }
}
export default Proyecto;