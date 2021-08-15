import React from "react";
import './style/FooterCompo.css';

export default function FooterCompo(props) {

    return (
        <React.Fragment>
            <div className="divPrincipalFooter container-fluid">
                <table style={{width: "100%"}}>
                        <tr>
                            <td>
                                <a href="https://www.instagram.com/lacuevastudio.arquitectos/">
                                    <ul><li className="links">Instagram</li></ul>
                                </a>
                            </td>
                            <td>
                                <a href="https://www.linkedin.com/company/la-cueva-studio/?viewAsMember=true">
                                    <ul><li className="links">Linkedin</li></ul>
                                </a>
                            </td>
                            <td>
                                <a href="https://www.pinterest.com.mx/lacuevastudio_Arq/_saved/">
                                    <ul><li className="links">Pinterest</li></ul>
                                </a>
                            </td>
                            <td>
                                <a href="https://www.facebook.com/lacuevastudioarq">
                                    <ul><li className="links">Facebook</li></ul>
                                </a>
                            </td>
                            <td>
                                <h6 className="CopyR">Copyright © Todos los Derechos Reservados.</h6>
                            </td>
                        </tr>
                </table>
            </div>
        </React.Fragment>
    )
}