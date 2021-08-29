import React, {/*useEffect, useRef, useState*/} from 'react';
import Navbar from "../component/Navbar";
import '../component/style/Home.css';
import Carousel from "react-bootstrap/Carousel";
import carru1 from '../Images/portada1.jpg';
import carru2 from '../Images/portada2.jpg';
import carru3 from '../Images/portada3.jpg';
import carru4 from '../Images/portada4.jpg';
import carru5 from '../Images/portada5.jpg';
import FooterCompo from "../component/FooterCompo";
//import {motion} from "framer-motion";

export default function Home() {
/*
    const outerRef = useRef(null);
    const [inViewport, setInViewport] = useState(true);

    useEffect(() => {
        const onChange = entries => {
            entries.forEach(entry => {
                if (entry.target === outerRef.current) {
                    if (entry.isIntersecting) {
                        setInViewport(true);
                    } else {
                        setInViewport(false);
                    }
                }
            });
        };
        const observer = new IntersectionObserver(onChange, {threshold: 0.5});
        observer.observe(outerRef.current);
    }, [outerRef]);

    const fadeInContainerWithStagger = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                type: "tween",
                ease: "easeIn",
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    }

    const prueba = {
        hidden: {
            opacity: 0,
            y: 40
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "fade"
            }
        }
    };

    function carrucelText1() {
        return (
            <div ref={outerRef} id="outer-box1">
                {inViewport && (
                    <motion.div variants={fadeInContainerWithStagger} initial="hidden"
                                animate="visible">
                        <motion.div variants={prueba}>
                            <h4 className="tituloImg1">{"CASA DOPPIA"}</h4>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        );
    }

    function carrucelText2() {
        return (
            <div ref={outerRef} id="outer-box2">
                {inViewport && (
                    <motion.div variants={fadeInContainerWithStagger} initial="hidden"
                                animate="visible">
                        <motion.div variants={prueba}>
                            <h4 className="tituloImg2">{"CASA \n D' ARTE"}</h4>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        );
    }

    function carrucelText3() {
        return (
            <div ref={outerRef} id="outer-box3">
                {inViewport && (
                    <motion.div variants={fadeInContainerWithStagger} initial="hidden"
                                animate="visible">
                        <motion.div variants={prueba}>
                            <h4 className="tituloImg3">{"VIVIENDAS SOCIALES"}</h4>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        );
    }

    function carrucelText4() {
        return (
            <div ref={outerRef} id="outer-box4">
                {inViewport && (
                    <motion.div variants={fadeInContainerWithStagger} initial="hidden"
                                animate="visible">
                        <motion.div variants={prueba}>
                            <h4 className="tituloImg4">{"CASA BIANCO-ROSE"}</h4>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        );
    }

    function carrucelText5() {
        return (
            <div ref={outerRef} id="outer-box5">
                {inViewport && (
                    <motion.div variants={fadeInContainerWithStagger} initial="hidden"
                                animate="visible">
                        <motion.div variants={prueba}>
                            <div className="tituloImg5">
                                CASA DI PIETRA
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        );
    }

 */

    return (
        <React.Fragment>
            <Navbar/>
            <div>
                <Carousel className="imgOpacity carousel-fade active">
                    <Carousel.Item interval={3000}>
                        <img className="imgcarusel" src={carru1} alt="imgCarusel1"/>
                        <Carousel.Caption>
                            {/*carrucelText1()*/}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="imgcarusel" src={carru2} alt="imgCarusel2"/>
                        <Carousel.Caption>
                            {/*carrucelText2()*/}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="imgcarusel" src={carru3} alt="imgCarusel3"/>
                        <Carousel.Caption>
                            {/*carrucelText3()*/}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="imgcarusel" src={carru4} alt="imgCarusel3"/>
                        <Carousel.Caption>
                            {/*carrucelText4()*/}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="imgcarusel" src={carru5} alt="imgCarusel3"/>
                        <Carousel.Caption>
                            {/*carrucelText5()*/}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <FooterCompo/>
            </div>
        </React.Fragment>
    )
}

