import React from "react";
import './style/FooterCompo.css';

export default function FooterCompo(props) {

        return (
            <React.Fragment>
                <div className="fontFooter divFooterPrincipal">
                    <br/>
                    <p className="Text1">Copyright © Todos los Derechos Reservados.<br/></p>
                    <br/>
                    <ul style={{display:"inline-flex"}}>
                        <a href="https://www.instagram.com/lacuevastudio.arquitectos/">
                            <li className={props.clase1? props.clase1:"ftletra fontposition1"}>Instagram</li>
                        </a>
                        <a href="https://www.pinterest.com.mx/lacuevastudio_Arq/_saved/">
                            <li className={props.clase2? props.clase2:"ftletra fontposition2"}>linkedin</li>
                        </a>
                        <a href="https://www.linkedin.com/company/la-cueva-studio/?viewAsMember=true">
                            <li className={props.clase3? props.clase3:"ftletra fontposition3"}>pinterest</li>
                        </a>
                    </ul>
                </div>
            </React.Fragment>
        )
    }