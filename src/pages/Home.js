import React from 'react';
import Navbar from "../component/Navbar";
import '../component/style/Home.css';
import Carousel from "react-bootstrap/Carousel";
import carru1 from '../Images/portada1.jpg';
import carru2 from '../Images/portada2.jpg';
import carru3 from '../Images/portada3.jpg';
import FooterCompo from "../component/FooterCompo";

export default function Home() {

    return (
        <React.Fragment>
            <Navbar/>
            <div>
                <Carousel>
                    <Carousel.Item interval={3000}>
                        <img className="imgcarusel" src={carru1} style={{width:"100%"}} alt="imgCarusel1"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="imgcarusel" src={carru2} style={{width:"100%"}} alt="imgCarusel2"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="imgcarusel" src={carru3} style={{width:"100%"}} alt="imgCarusel3"/>
                    </Carousel.Item>
                </Carousel>
            </div>
            <footer>
                <FooterCompo/>
            </footer>
        </React.Fragment>
    )
}

