import React from 'react';
import Navbar from "../component/Navbar";
import Carousel from "react-bootstrap/Carousel";
import '../component/style/Home.css'
import carru1 from '../Images/0451.jpeg'
import carru2 from '../Images/0452.jpeg'
import carru3 from '../Images/0453.jpeg'
import carru4 from '../Images/0454.jpeg'
import FooterCompo from '../component/FooterCompo';

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
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="imgcarusel" src={carru2}/>
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="imgcarusel" src={carru3}/>
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="imgcarusel" src={carru4}/>
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <FooterCompo />
            </React.Fragment>
        )
    }
}

export default Home;