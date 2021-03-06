import React from "react";
import emailjs from "emailjs-com";
import Navbar from "../component/Navbar";
import FooterCompo from "../component/FooterCompo";
import Conta1 from '../Images/2451.jpeg';
import Conta2 from '../Images/2452.1.jpeg';
import Conta3 from '../Images/2453.1.jpeg';
import logo from '../Images/1451.jpg';
import '../component/style/Contacto.css';

class Contacto extends React.Component{

    constructor(props) {
        super(props);
        this.state ={
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
                <Navbar />
                <br/>
                <div>
                    <div className="container">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-6">
                                    <img className="imgContacto imgContactoSm" src={Conta1}/>
                                    <img className="imgContacto imgContactoSm" src={Conta2}/>
                                    <img className="imgContacto imgContactoSm" src={Conta3}/>
                                </div>

                                <div className="col-5 container-fluid ocultar-divs">
                                    <form onSubmit={this.handleSubmit}>
                                        <div>
                                            <h1 className="titleContac text-danger">Contáctanos</h1>

                                            <div className="col-6 col-sm-6">
                                            <table className="tablaContacto table-borderless">
                                                <tr>
                                                    <td>nombre: </td>
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
                                                    <td Style="padding:10px;"></td>
                                                </tr>
                                                <tr>
                                                    <td>Email: </td>
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
                                                    <td Style="padding:10px;"></td>
                                                </tr>
                                                <tr>
                                                    <td>Telefono:</td>
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
                                                    <td Style="padding:10px;"></td>
                                                </tr>
                                                <tr>
                                                    <td>Asunto:</td>
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
                                                    <td Style="padding:10px;"></td>
                                                </tr>
                                                <tr>
                                                    <td>Mensaje:</td>
                                                    <td>
                                                        <textarea
                                                            name="mensaje"
                                                            value={this.state.value}
                                                            onChange={this.handleChangemensaje}
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td Style="padding:10px;"></td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>
                                                        <input
                                                            type="submit"
                                                            value="Enviar"
                                                            className="btn btn-outline-dark"
                                                        />
                                                    </td>
                                                </tr>
                                            </table>
                                              </div>
                                            </div>

                                    </form>
                                </div>
                                {/* div de cel*/}
                                <div className="ocultar-div">
                                    <div className="col-sm-2 container-fluid">
                                        <form onSubmit={this.handleSubmitM}>
                                            <div>
                                                <h4 className="titleContac text-danger">Contáctanos</h4>
                                                <table>
                                                    <tr><td className="contactFont">nombre:</td></tr>
                                                </table>
                                                <table>
                                                    <tr><td> <input
                                                        type="text"
                                                        name="nombre"
                                                        size="13"
                                                        className="inputStyleSm"
                                                        value={this.state.value}
                                                        onChange={this.handleChangenameM}
                                                    /></td></tr>
                                                </table>
                                                <table>
                                                    <tr><td>Email *</td></tr>
                                                </table>
                                                <table>
                                                    <tr>
                                                        <td>
                                                            <input
                                                                type="email"
                                                                name="email"
                                                                size="13"
                                                                value={this.state.value}
                                                                onChange={this.handleChangeemailM}
                                                            />
                                                        </td>
                                                    </tr>
                                                </table>
                                                <table>
                                                    <tr>
                                                        <td>Telefono</td>
                                                    </tr>
                                                </table>
                                                <table>
                                                    <tr>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                name="fon"
                                                                size="13"
                                                                value={this.state.value}
                                                                onChange={this.handleChangefonM}
                                                            /></td>
                                                    </tr>
                                                </table>
                                                <table>
                                                    <tr><td>Asunto</td></tr>
                                                </table>
                                                <table>
                                                    <tr>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                name="asunto"
                                                                size="13"
                                                                value={this.state.value}
                                                                onChange={this.handleChangeasuntoM}
                                                            />
                                                        </td>
                                                    </tr>
                                                </table>
                                                <table>
                                                    <tr><td>Mensaje</td></tr>
                                                </table>
                                                <table>
                                                    <tr>
                                                        <td>
                                                        <input
                                                            name="mensaje"
                                                            size = "13"
                                                            value={this.state.value}
                                                            onChange={this.handleChangemensajeM}
                                                        />
                                                        </td>
                                                    </tr>
                                                </table>
                                                <table>
                                                    <tr>
                                                        <br/>
                                                        <td>
                                                            <input
                                                                type="submit"
                                                                value="Enviar"
                                                                className="btn btn-outline-dark"
                                                            />
                                                        </td>
                                                    </tr>
                                                </table>

                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <FooterCompo />
            </React.Fragment>
        )
    }
}
export default Contacto;