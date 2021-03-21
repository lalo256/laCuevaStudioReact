import React from "react";
import Carousel from "react-bootstrap/Carousel";
import P11_1 from "../Images/p01100.jpeg";
import P11_2 from "../Images/p01101.jpeg";
import P11_3 from "../Images/p01102.jpeg";
import P10_1 from "../Images/p01000.jpeg";
import P10_2 from "../Images/p01001.jpeg";
import P10_3 from "../Images/p01002.jpeg";
import P12_1 from "../Images/p01200.jpeg";
import P12_2 from "../Images/p01201.jpeg";
import P12_3 from "../Images/p01202.jpeg";
import P9_1 from "../Images/p0900.jpeg";
import P9_2 from "../Images/p0901.jpeg";
import P9_3 from "../Images/p0902.jpeg";
import P6_1 from "../Images/p0600.jpeg";
import P6_2 from "../Images/p0601.jpeg";
import P5_1 from "../Images/p0500.jpeg";
import P5_2 from "../Images/p0501.jpeg";
import P4_1 from "../Images/p0400.jpeg";
import P4_2 from "../Images/p0401.jpeg";
import P7_1 from "../Images/p0700.jpeg";
import P7_2 from "../Images/p0701.jpeg";
import P8_1 from "../Images/p0800.jpeg";
import P8_2 from "../Images/p0801.jpeg";
import P1_1 from "../Images/p0100.jpg";
import P1_2 from "../Images/p0101.jpg";
import P1_3 from "../Images/p0102.jpg";
import P2_1 from "../Images/p0200.jpg";
import P2_2 from "../Images/p0201.jpg";
import P2_3 from "../Images/p0202.jpg";
import P3_1 from "../Images/p0300.jpeg";
import P3_2 from "../Images/p0301.jpeg";


export function Casa_T() {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-4">
                    <Carousel>
                        <Carousel.Item interval={3000}>
                            <img className="imgcaruselP" src={P11_1}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="imgcaruselP" src={P11_2}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="imgcaruselP" src={P11_3}/>
                        </Carousel.Item>
                    </Carousel>
                    <h5 className="titleProject">Casa T</h5>
                </div>
                <div className="col-8">
                    <p className="descripcionProject1">
                        Casa habitación para una familia pequeña, donde su terreno a desnivel, permite que su fachada
                        principal sea en nivel de calle y el patio interior a un nivel abajo, junto con las
                        habitaciones.
                        Enmarcando un volado en el nivel de calle que genera una vista en 3D del paisaje.

                    </p>
                </div>

            </div>
        </React.Fragment>
    )
}

export function Casa_Piccola() {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-4">
                    <Carousel>
                        <Carousel.Item interval={3000}>
                            <img className="imgcaruselP" src={P10_1}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="imgcaruselP" src={P10_2}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="imgcaruselP" src={P10_3}/>
                        </Carousel.Item>
                    </Carousel>
                    <h5 className="titleProject">Casa Piccola</h5>
                </div>
                <div className="col-8">
                    <p className="descripcionProject1">
                        una casa simple en sus formas, lineas y colores. Los espacios interiores con vista al
                        exterior que en sus colores, texturas y materiales crean un ambiente calido.
                        Generando una sutil iluminación y con la fosforescencia de la piscina que proyecta los
                        interiores,
                        crea una atmósferas de luz y paz.
                    </p>
                </div>

            </div>
        </React.Fragment>
    );
}

export function Casa_da_luce() {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-4">
                    <Carousel>
                        <Carousel.Item interval={3000}>
                            <img className="imgcaruselP" src={P9_1}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="imgcaruselP" src={P9_2}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="imgcaruselP" src={P9_3}/>
                        </Carousel.Item>
                    </Carousel>
                    <h5 className="titleProject">Casa da luce</h5>
                </div>
                <div className="col-8">
                    <p className="descripcionProject1">
                        La casa cuenta con una limpieza visual en sus formas sustrayendo bloques de sus fachadas.
                        El interiorismo es sobrio y en colores neutros, dejando que la luz natural entre y matice el
                        espacio, con una doble altura en cocina-comedor.
                        Su patio exterior se diseño para la convivencia y el ocio.

                    </p>
                </div>

            </div>
        </React.Fragment>
    );
}

export function Casa_Purpura() {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-4">
                    <Carousel>
                        <Carousel.Item interval={3000}>
                            <img className="imgcaruselP" src={P6_1}/>
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
        </React.Fragment>
    );
}

export function Stanza_Bianca() {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-4">
                    <Carousel>
                        <Carousel.Item interval={3000}>
                            <img className="imgcaruselP" src={P5_1}/>
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
                        El interiorismo es elegante, sobrio, de diseño simple y acabados neutros .
                    </p>
                </div>

            </div>
        </React.Fragment>
    );
}

export function Puntos_Altos() {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-4">
                    <Carousel>
                        <Carousel.Item interval={3000}>
                            <img className="imgcaruselP" src={P4_1}/>
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
        </React.Fragment>
    );
}

export function Casa_Ciotola() {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-4">
                    <Carousel>
                        <Carousel.Item interval={3000}>
                            <img className="imgcaruselP" src={P7_1}/>
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
                        sencillas utilizando materiales que buscan la simplicidad en los colores, pocas texturas y
                        accesorios. Cada espacio proyecta, limpieza, amplitud y sencillez para lo que se
                        implementan materiales ecológicos que inspiran el regreso a lo natural, sin
                        olvidar elementos que conecten con la modernidad
                    </p>
                </div>

            </div>
        </React.Fragment>
    );
}

export function Casa_di_contrasto() {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-4">
                    <Carousel>
                        <Carousel.Item interval={3000}>
                            <img className="imgcaruselP" src={P8_1}/>
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
        </React.Fragment>
    );
}

export function Casa_Matiz() {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-4">
                    <Carousel>
                        <Carousel.Item interval={3000}>
                            <img className="imgcaruselP" src={P2_1}/>
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
        </React.Fragment>
    );
}

export function Casa_Della_Natura() {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-4">
                    <Carousel>
                        <Carousel.Item interval={3000}>
                            <img className="imgcaruselP" src={P12_1}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="imgcaruselP" src={P12_2}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="imgcaruselP" src={P12_3}/>
                        </Carousel.Item>
                    </Carousel>
                    <h5 className="titleProject">Casa Della Natura</h5>
                </div>
                <div className="col-8">
                    <p className="descripcionProject1">
                        Casa habitación con una chochera interior en un nivel inferior,
                        donde el espacio se aprovecha con un jardín interior, lo que le otorga
                        un toque fresco y natural.
                        cuenta con un pequeño salón de usos múltiples, el aprovechamiento de
                        la luz natural es fundamental en la casa lo que resalta sus tonalidades en
                        blanco y su doble altura en su estancia que genera mas confort en el espacio.

                    </p>
                </div>

            </div>
        </React.Fragment>
    );
}

export function segunda11() {
    return (
        <React.Fragment>

        </React.Fragment>
    );
}