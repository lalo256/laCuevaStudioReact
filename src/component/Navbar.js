import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './style/Navbar.css';
import {useHistory} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGripLines, faTimes} from "@fortawesome/free-solid-svg-icons";
import Logo from '../Images/nombre2.png';
//import Ailerons from '../assets/fonts/Ailerons_Regular.ttf';

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

    function logoClick() {
        history.push("/home");
    }

    return (
        <React.Fragment>
            {menu ?
                <Modal show={menu} onHide={handleClose} size={"lg"}>
                    <Modal.Body className="bodyMenu">
                        <div>
                            <table onClick={handleSelect} style={{width: "100%"}}>
                                <tr>
                                    <td><img src={Logo} id={1} alt="logoMenu"
                                             style={{width: "20%", cursor: "pointer"}}/></td>
                                    <td><FontAwesomeIcon icon={faTimes} style={{
                                        color: "whitesmoke",
                                        fontSize: "30px",
                                        cursor: "pointer"
                                    }} onClick={handleClose}/></td>
                                </tr>
                                <tr>
                                    <td id={2} className="tdNavbar linea1">NOSOTROS</td>
                                </tr>
                                <tr>
                                    <td id={3} className="tdNavbar linea1">SERVICIOS</td>
                                </tr>
                                <tr>
                                    <td id={4} className="tdNavbar linea1">PROYECTOS</td>
                                </tr>
                                <tr>
                                    <td id={5} className="tdNavbar linea1">PRODUCTOS</td>
                                </tr>
                                <tr>
                                    <td id={6} className="tdNavbar linea1">CONTACTO</td>
                                </tr>
                            </table>
                        </div>
                    </Modal.Body>

                </Modal> : null}

            <div className="row-cols-1">
                <div className="col-2">
                    <img src={Logo} className="logImg" onClick={logoClick} alt={"logo"}/>
                </div>
                <div className="col-4">

                </div>
                <div className="col-2 divMenuNavbar" style={{right: "0", position: "absolute", zIndex: "1"}}>
                    <table style={{background:"whitesmoke",width:"4rem",marginTop:"8px", borderRadius:"15px"}}>
                        <tr>
                            <td onClick={butonSelect}>
                                <FontAwesomeIcon icon={faGripLines} className="iconStyle"
                                                 style={{color: "black",cursor:"pointer",paddingLeft:"15px"}}/>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </React.Fragment>
    )
}

