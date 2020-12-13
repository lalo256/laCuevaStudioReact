import React from "react";
import Insta from '../Images/instagram-brands.svg';
import './style/FooterCompo.css';

class FooterCompo extends React.Component{
    render() {
        return(
            <React.Fragment>
                <div className="fontFooter">
                    <p>Copyright © Todos los Derechos Reservados. </p>
                    <a href="https://www.instagram.com"><img className="instaImg" src={Insta}/></a>
                </div>
                <br/><br/>
            </React.Fragment>
        )
    }
}
export default FooterCompo;