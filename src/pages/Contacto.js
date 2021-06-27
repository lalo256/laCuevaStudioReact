import React from "react";
import emailjs from "emailjs-com";
import Navbar from "../component/Navbar";
import FooterCompo from "../component/FooterCompo";
import '../component/style/Contacto.css';
import Contact from '../Images/contacImg.jpeg';
import ContactMovil from '../Images/contacImg2.jpeg';

class Contacto extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            email: '',
            telefono: '',
            asunto: '',
            mensaje: '',
            //movil
            nombreM: '',
            emailM: '',
            telefonoM: '',
            asuntoM: '',
            mensajeM: ''
        }
        this.handleChangename = this.handleChangename.bind(this);
        this.handleChangeemail = this.handleChangeemail.bind(this);
        this.handleChangefon = this.handleChangefon.bind(this);
        this.handleChangeasunto = this.handleChangeasunto.bind(this);
        this.handleChangemensaje = this.handleChangemensaje.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //movil
        this.handleChangenameM = this.handleChangenameM.bind(this);
        this.handleChangeemailM = this.handleChangeemailM.bind(this);
        this.handleChangefonM = this.handleChangefonM.bind(this);
        this.handleChangeasuntoM = this.handleChangeasuntoM.bind(this);
        this.handleChangemensajeM = this.handleChangemensajeM.bind(this);
        this.handleSubmitM = this.handleSubmitM.bind(this);
    }

    handleChangename(event) {
        this.setState({nombre: event.target.value});
    }

    handleChangeemail(event) {
        this.setState({email: event.target.value});
    }

    handleChangefon(event) {
        this.setState({telefono: event.target.value});
    }

    handleChangeasunto(event) {
        this.setState({asunto: event.target.value});
    }

    handleChangemensaje(event) {
        this.setState({mensaje: event.target.value});
    }

    handleChangenameM(event1) {
        this.setState({nombreM: event1.target.value});
    }

    handleChangeemailM(event1) {
        this.setState({emailM: event1.target.value});
    }

    handleChangefonM(event1) {
        this.setState({telefonoM: event1.target.value});
    }

    handleChangeasuntoM(event1) {
        this.setState({asuntoM: event1.target.value});
    }

    handleChangemensajeM(event1) {
        this.setState({mensajeM: event1.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();

        emailjs.sendForm('service_1sx21f8', 'template_3ipxu2b', e.target, 'user_jW4lzGf9jxdT65vioUnDZ')
            .then((result) => {
                console.log(result.text);
                alert('Gracias por contactar a La Cueva Studio, pronto nos pondremos en contacto');
            }, (error) => {
                console.log(error.text);
                alert('Error al mandar correo, intentelo mas tarde');
            });
        e.target.reset();
    }

    handleSubmitM(e1) {
        e1.preventDefault();

        emailjs.sendForm('service_1sx21f8', 'template_3ipxu2b', e1.target, 'user_jW4lzGf9jxdT65vioUnDZ')
            .then((result) => {
                console.log(result.text);
                alert('Gracias por contactar a La Cueva Studio, pronto nos pondremos en contacto');
            }, (error) => {
                console.log(error.text);
                alert('Error al mandar correo, intentelo mas tarde');
            });
        e1.target.reset();
    }

    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <div className="divContenidoContacto">
                    <div style={{display: "inline-flex", marginTop: "15px"}}>
                        <span className="spanContactoMovil1 movilView">Tel Contacto: 55 85 09 18 87</span><br/>
                        <span className="spanContactoMovil2 movilView">lacuevastudio.arq@gmail.com</span>
                        <div style={{width: "60%"}} className="pcView">
                            <img src={Contact} width="100%" alt={"fd"}/>
                        </div>
                        <div style={{width: "100%",position:"absolute",top:"10px"}} className="movilView">
                            <img src={ContactMovil} width="100%" alt={"fd"}/>
                        </div>
                        <div style={{width: "40%"}}>
                            <p className="tituloContacto">Contacto</p>
                            {/*inicio formulario*/}
                            <div className="divFormulario pcView">
                                <span className="spanContacto">Tel Contacto: 55 85 09 18 87</span><br/>
                                <span className="spanContacto">lacuevastudio.arq@gmail.com</span>
                                <table className="tablaContacto table-borderless" style={{marginTop: "15px"}}>
                                    <tr>
                                        <td className="tdTittle">Nombre:</td>
                                        <td>
                                            <input
                                                type="text"
                                                name="nombre"
                                                value={this.state.value}
                                                onChange={this.handleChangename}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td Style="padding:10px;"/>
                                    </tr>
                                    <tr>
                                        <td className="tdTittle">Email:</td>
                                        <td>
                                            <input
                                                type="email"
                                                name="email"
                                                value={this.state.value}
                                                onChange={this.handleChangeemail}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td Style="padding:10px;"/>
                                    </tr>
                                    <tr>
                                        <td className="tdTittle">Telefono:</td>
                                        <td>
                                            <input
                                                type="text"
                                                name="fon"
                                                value={this.state.value}
                                                onChange={this.handleChangefon}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td Style="padding:10px;"/>
                                    </tr>
                                    <tr>
                                        <td className="tdTittle">Asunto:</td>
                                        <td>
                                            <input
                                                type="text"
                                                name="asunto"
                                                value={this.state.value}
                                                onChange={this.handleChangeasunto}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td Style="padding:10px;"/>
                                    </tr>
                                    <tr>
                                        <td className="tdTittle">Mensaje:</td>
                                        <td>
                                            <textarea
                                                name="mensaje"
                                                value={this.state.value}
                                                onChange={this.handleChangemensaje}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td Style="padding:10px;"/>
                                    </tr>
                                    <tr>
                                        <td/>
                                        <td>
                                            <input
                                                type="submit"
                                                value="Contacto"
                                                className="btn btn-outline-light btnContacto"
                                            />
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            {/*fin formulario pc*/}
                            {/*formulario movil*/}
                            <div className="divFormulario movilView">
                                <table className="tablaContacto table-borderless" style={{marginTop: "15px"}}>
                                    <tr>
                                        <td className="tdTittle">Nombre:</td>
                                        <td>
                                            <input
                                                type="text"
                                                name="nombre"
                                                value={this.state.value}
                                                onChange={this.handleChangename}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td Style="padding:10px;"/>
                                    </tr>
                                    <tr>
                                        <td className="tdTittle">Email:</td>
                                        <td>
                                            <input
                                                type="email"
                                                name="email"
                                                value={this.state.value}
                                                onChange={this.handleChangeemail}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td Style="padding:10px;"/>
                                    </tr>
                                    <tr>
                                        <td className="tdTittle">Telefono:</td>
                                        <td>
                                            <input
                                                type="text"
                                                name="fon"
                                                value={this.state.value}
                                                onChange={this.handleChangefon}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td Style="padding:10px;"/>
                                    </tr>
                                    <tr>
                                        <td className="tdTittle">Asunto:</td>
                                        <td>
                                            <input
                                                type="text"
                                                name="asunto"
                                                value={this.state.value}
                                                onChange={this.handleChangeasunto}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td Style="padding:10px;"/>
                                    </tr>
                                    <tr>
                                        <td className="tdTittle">Mensaje:</td>
                                        <td>
                                            <textarea
                                                name="mensaje"
                                                value={this.state.value}
                                                onChange={this.handleChangemensaje}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td Style="padding:10px;"/>
                                    </tr>
                                    <tr>
                                        <td/>
                                        <td>
                                            <input
                                                type="submit"
                                                value="Contacto"
                                                className="btn btn-outline-light btnContacto"
                                            />
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            {/*fin formulario movil*/}
                        </div>

                    </div>
                    <div className="divFootContacto">
                        <FooterCompo/>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default Contacto;