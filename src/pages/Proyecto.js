import React from "react";
import Navbar from "../component/Navbar";

//import FooterCompo from "../component/FooterCompo";
import '../component/style/proyecto.css'
import {
     casa_Selvaggio, Casa_Sociale,
} from "../component/proyectos";


class Proyecto extends React.Component {
    constructor() {
        super()
        this.state = {
            Page1: true,
            Page2: false,
            Page3: false
        }
    }

    operation1() {
        this.setState({
            Page1: !this.state.Page1,
            Page2: false,
            Page3: false
        })
    }

    operation2() {
        this.setState({
            Page1: false,
            Page2: !this.state.Page2,
            Page3: false
        })
    }

    operation3() {
        this.setState({
            Page1: false,
            Page2: false,
            Page3: !this.state.Page3
        })
    }

    render() {
        if (this.state.Page1 === true) {// eslint-disable-next-line
            return (
                <React.Fragment>
                    <Navbar/>
                    <div className="container proyect">

                        {casa_Selvaggio()}
                        {Casa_Sociale()}

                    </div>
                    {/*
                    <div className="paginationDiv container">
                        <ul className="pagination">
                            <li className="page-item page-link active" onClick={() => this.operation1()}>1</li>
                            <li className="page-item page-link text-danger" onClick={() => this.operation2()}>2</li>
                            <li className="page-item page-link text-danger" onClick={() => this.operation3()}>3</li>
                            <li className="page-item page-link text-danger" onClick={() => this.operation2()}>Next</li>
                        </ul>
                    </div>
                    */}

                </React.Fragment>
            )
        }

        if (this.state.Page2 === true) {// eslint-disable-next-line
            return (
                <React.Fragment>
                    <Navbar/>
                    <div className="container proyect">


{/*
<div className="paginationDiv container">
                            <ul className="pagination">
                                <li className="page-item page-link text-danger"
                                    onClick={() => this.operation1()}>Previous
                                </li>
                                <li className="page-item page-link text-danger" onClick={() => this.operation1()}>1</li>
                                <li className="page-item page-link active" onClick={() => this.operation2()}>2</li>
                                <li className="page-item page-link text-danger" onClick={() => this.operation3()}>3</li>
                                <li className="page-item page-link text-danger" onClick={() => this.operation3()}>Next
                                </li>
                            </ul>
                        </div>
*/}

                    </div>
                </React.Fragment>
            )
        }

        if (this.state.Page3 === true) {// eslint-disable-next-line
            return (
                <React.Fragment>
                    <Navbar/>
                    <div className="container proyect">


{/*
<div className="paginationDiv container">
                            <ul className="pagination">
                                <li className="page-item page-link text-danger"
                                    onClick={() => this.operation2()}>Previous
                                </li>
                                <li className="page-item page-link text-danger" onClick={() => this.operation1()}>1</li>
                                <li className="page-item page-link text-danger" onClick={() => this.operation2()}>2</li>
                                <li className="page-item page-link active" onClick={() => this.operation3()}>3</li>
                            </ul>
                        </div>
*/}

                    </div>
                </React.Fragment>
            )
        }
    }

}

export default Proyecto;