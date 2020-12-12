import React from 'react';
import Navbar from "../component/Navbar";
import Carousel from "react-bootstrap/Carousel";
import '../component/style/Home.css'
import carru1 from '../Images/0451.jpeg'
import carru2 from '../Images/0452.jpeg'
import carru3 from '../Images/0453.jpeg'
import carru4 from '../Images/0454.jpeg'

class Home extends React.Component{
    render() {
        return(
            <React.Fragment>
                <Navbar />
                <div className="container">
                    <Carousel>
                        <Carousel.Item interval={3000}>
                            <img className="imgcarusel" src={carru1} />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img className="imgcarusel" src={carru2}/>
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="imgcarusel" src={carru3}/>
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="imgcarusel" src={carru4}/>
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>

            </React.Fragment>
        )
    }
}

export default Home;