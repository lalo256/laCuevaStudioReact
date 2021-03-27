import React from "react";

import Insta from '../Images/instagram-brands.svg';
import pinter from '../Images/pinterest-brands.svg';
import linke from '../Images/linkedin-in-brands.svg';
import './style/FooterCompo.css';

class FooterCompo extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="fontFooter divFooterPrincipal">
                    <p className="Text1">Copyright © Todos los Derechos Reservados.<br/></p>
                    <a href="https://www.instagram.com/lacuevastudio_arq/">
                        <img className="instaImg" src={Insta}/>
                    </a>
                    <a href="https://www.pinterest.com.mx/lacuevastudio_Arq/_saved/">
                        <img className="instaImg" src={pinter}/>
                    </a>
                    <a href="https://www.linkedin.com/company/la-cueva-studio/?viewAsMember=true">
                        <img className="instaImg" src={linke}/>
                    </a>
                    <a href="https://www.homify.com.mx/profesionales/8234663/la-cueva-studio" target="_blank"><img
                        alt="La Cueva Studio en homify"
                        src="https://www.homify.com.mx/assets/badges/standard/90x32_black.png"/></a>
                </div>
                <br/><br/>
            </React.Fragment>
        )
    }
}

export default FooterCompo;