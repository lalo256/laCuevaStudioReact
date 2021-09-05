import React from "react";
import Navbar from "../component/Navbar";
import FooterCompo from "../component/FooterCompo";
import '../component/style/producto.css';
import pdf from '../Images/PDF001.jpg';

class Producto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prueba: 1,
        }
    }

    render() {
        return (
            <React.Fragment>
                <Navbar/><br/><br/><br/><br/>
                <div className="" style={{height: "100%", width: "100%"}}>
                    <div style={{height:"400px"}}>
                        <div className="container-fluid">
                            <div className="">
                                <h6 className="titleProduct1">Mini-guia</h6>
                                <a href="/producto/pdf" target="_blank">
                                    <img src={pdf} className="ImgProduct" alt={"fd"}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <br/><br/><br/><br/><br/>
                <div>
                    <FooterCompo/>
                </div>
            </React.Fragment>
        )
    }
}

export default Producto;