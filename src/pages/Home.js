import React from 'react';
import Navbar from "../component/Navbar";
import '../component/style/Home.css';
import videopc from '../Images/fn.mp4';
import videoTablet from '../Images/fn2.mp4';
import videomovil from '../Images/fn3.mp4';
import FooterCompo from '../component/FooterCompo';

export default function Home(){

        return(
            <React.Fragment>
                <Navbar />
                <div className="videoPosition">
                    <video loop autoPlay className="video1" width="100%" height="100%">
                        <source src={videopc}/>
                    </video>
                    <video loop autoPlay className="video2" width="100%" height="100%">
                        <source src={videoTablet}/>
                    </video>
                    <video loop autoPlay className="video3" width="100%" height="100%">
                        <source src={videomovil}/>
                    </video>
                </div>
                <div>
                    <FooterCompo clase1={"homeConfig fontposition1"} clase2={"homeConfig fontposition2"} clase3={"homeConfig fontposition3"}/>
                </div>

            </React.Fragment>
        )
    }

