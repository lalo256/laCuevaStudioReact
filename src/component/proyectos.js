import React from "react";
import Carousel from "react-bootstrap/Carousel";
import P14_1 from "../Images/p01400.jpeg";
import P14_2 from "../Images/p01401.jpeg";
import P14_3 from "../Images/p01402.jpeg";
import P14_4 from "../Images/p01403.jpeg";
import P14_5 from "../Images/p01404.jpeg";
import P15_1 from "../Images/p01500.jpeg";
import P15_2 from "../Images/p01501.jpeg";
import P15_3 from "../Images/p01502.jpeg";
import P15_4 from "../Images/p01503.jpeg";
import P15_5 from "../Images/p01504.jpeg";

export function Casa_Sociale() {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-4">
                    <Carousel>
                        <Carousel.Item interval={3000}>
                            <img className="imgcaruselP" src={P14_1} alt=""/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="imgcaruselP" src={P14_2} alt=""/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="imgcaruselP" src={P14_3} alt=""/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="imgcaruselP" src={P14_4} alt=""/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="imgcaruselP" src={P14_5} alt=""/>
                        </Carousel.Item>
                    </Carousel>
                    <h5 className="titleProject">Casa Sociale</h5>
                </div>
                <div className="col-8">
                    <p className="descripcionProject1">
                        Una vivienda de interés social con una superficie total de 95 m2, creada para evocar la
                        sencillez , la mínima superficie habitable. varios muebles y closet’s , es del mismo material
                        (concreto) que el de la vivienda al igual que sus muros, sellados para evitar la filtración de
                        humedad. Los materiales se eligieron por su disponibilidad y bajo costo. Se usaron elementos
                        cuyo sistema constructivo y características les brindan resistencia sísmica y confort térmico a
                        las viviendas.
                    </p>
                </div>

            </div>
        </React.Fragment>
    );
}

export function casa_Selvaggio() {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-4">
                    <Carousel>
                        <Carousel.Item interval={3000}>
                            <img className="imgcaruselP" src={P15_1} alt=""/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="imgcaruselP" src={P15_2} alt=""/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="imgcaruselP" src={P15_3} alt=""/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="imgcaruselP" src={P15_4} alt=""/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="imgcaruselP" src={P15_5} alt=""/>
                        </Carousel.Item>
                    </Carousel>
                    <h5 className="titleProject">Casa Selvaggio</h5>
                </div>
                <div className="col-8">
                    <p className="descripcionProject1">
                        Cuenta con una armoniosa combinación de materiales y por su forma se obtienen ambientes
                        interiores frescos e iluminados.
                        Para la construcción de esta casa para climas cálidos se eligieron materiales como la madera y
                        el concreto aparente que resaltan su interior.
                        Cuenta con una doble altura que genera que el calor salga del hogar y el uso de sus ventanales
                        genera un ambiente de confort, relajación y ventilación natural.


                    </p>
                </div>

            </div>
        </React.Fragment>
    );
}