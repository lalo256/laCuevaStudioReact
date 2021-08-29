import React from "react";
import Navbar from "../component/Navbar";
import FooterCompo from "../component/FooterCompo";
import '../component/style/producto.css';
import pdf from '../Images/PDF001.jpg';

class Producto extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            prueba:1,
        }
    }
    render() {
        return (
            <React.Fragment>
                <Navbar /><br/><br/><br/><br/>
                <div className="row" style={{height:"100%"}}>
                    <div className="container">
                        <div className="col-4">
                            <h6 className="titleProduct1">Mini-guia</h6>
                            <a href="/producto/pdf" target="_blank">
                            <img src={pdf} className="ImgProduct" alt={"fd"}/>
                            </a>
                        </div>
                    </div>
                </div>
                <br/>
                <div style={{bottom:"0"}}>
                    <FooterCompo />
                </div>
            </React.Fragment>
        )
    }
}
export default Producto;