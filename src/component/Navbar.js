import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './style/Navbar.css';
import {useHistory} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGripLines} from "@fortawesome/free-solid-svg-icons";

import {Modal} from "react-bootstrap";

export default function Navbar() {
    const [menu, setMenu] = useState(false);
    const history = useHistory();

    function handleSelect(e) {
        switch (Number(e.target.id)) {
            case 1:
                history.push("/home");
                break;
            case 2:
                history.push("/nosotros");
                break;
            case 3:
                history.push("/servicios");
                break;
            case 4:
                history.push("/proyecto");
                break;
            case 5:
                history.push("/producto");
                break;
            case 6:
                history.push("/contacto");
                break;
            default:

        }
    }

    function butonSelect() {
        console.log(menu);
        if (menu) {
            setMenu(false);
        }
        if (!menu) {
            setMenu(true);
        }
    }

    const handleClose = () => setMenu(false);

    return (
        <React.Fragment>
            {menu ?
                <Modal show={menu} onHide={handleClose}>
                    <Modal.Body className="bodyMenu">
                        <div>
                            <table onClick={handleSelect}>
                                <tr>
                                    <td id={1} className="tdNavbar">HOME</td>
                                </tr>
                                <tr>
                                    <td id={2} className="tdNavbar">NOSOTROS</td>
                                </tr>
                                <tr>
                                    <td id={3} className="tdNavbar">SERVICIOS</td>
                                </tr>
                                <tr>
                                    <td id={4} className="tdNavbar">PROYECTOS</td>
                                </tr>
                                <tr>
                                    <td id={5} className="tdNavbar">PRODUCTOS</td>
                                </tr>
                                <tr>
                                    <td id={6} className="tdNavbar">CONTACTO</td>
                                </tr>
                            </table>
                        </div>
                    </Modal.Body>

                </Modal> : null}
            <div>
                <div className="divPrincipalNavbar" style={{position:"relative",top:"0",background:"whitesmoke"}}>
                    <div className="" >
                        <h3 className="tituloNavbar" style={{fontFamily:"Ailerons"}}>LA CUEVA STUDIO</h3>
                    </div>
                    <div className="">
                        <div className="divMenu">
                            <div className="">
                                <p className="tituloMenu">
                                    <span className="displaypc">ARQUITECTURA Y DISEÑO</span>
                                    <span className="displatmovil">ARQUITECTURA <br/>Y DISEÑO</span>
                                </p>
                            </div>
                            <div style={{right: "5px", position: "absolute"}}>
                                <button className="BtnMenu" onClick={butonSelect}>
                                    <FontAwesomeIcon icon={faGripLines} className="iconStyle" style={{color:"whitesmoke"}}/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

