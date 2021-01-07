import React from "react";
import Insta from '../Images/instagram-brands.svg';
import pinter from '../Images/pinterest-brands.svg';
import './style/FooterCompo.css';

class FooterCompo extends React.Component{
    render() {
        return(
            <React.Fragment>
                <div className="fontFooter">
                    <p>Copyright © Todos los Derechos Reservados. </p>
                    <a href="https://www.instagram.com/lacuevastudio_arq/"><img className="instaImg" src={Insta}/></a>
                    <a href="https://www.pinterest.com.mx/lacuevastudio_Arq/_saved/"><img className="instaImg" src={pinter}/></a>
                </div>
                <br/><br/>
            </React.Fragment>
        )
    }
}
export default FooterCompo;