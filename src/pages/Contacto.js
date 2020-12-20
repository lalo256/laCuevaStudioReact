import React from "react";
import emailjs from "emailjs-com";
import Navbar from "../component/Navbar";
import FooterCompo from "../component/FooterCompo";
import Conta1 from '../Images/2451.jpeg';
import Conta2 from '../Images/2452.1.jpeg';
import Conta3 from '../Images/2453.1.jpeg';
import '../component/style/Contacto.css';

class Contacto extends React.Component{

    constructor(props) {
        super(props);
        this.state ={
            nombre: '',
            email: '',
            telefono: '',
            asunto: '',
            mensaje: ''
        }
        this.handleChangename = this.handleChangename.bind(this);
        this.handleChangeemail = this.handleChangeemail.bind(this);
        this.handleChangefon = this.handleChangefon.bind(this);
        this.handleChangeasunto = this.handleChangeasunto.bind(this);
        this.handleChangemensaje = this.handleChangemensaje.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit(e) {
        e.preventDefault();

        emailjs.sendForm('service_1sx21f8', 'template_3ipxu2b', e.target, 'user_jW4lzGf9jxdT65vioUnDZ')
            .then((result) => {
                console.log(result.text);
                alert('simon');
            }, (error) => {
                console.log(error.text);
                alert('no simon');
            });
        e.target.reset();
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
                                    <img className="imgContacto" src={Conta1}/>
                                    <img className="imgContacto" src={Conta2}/>
                                    <img className="imgContacto" src={Conta3}/>
                                </div>
                                <div className="col-6 container-fluid">
                                    <form onSubmit={this.handleSubmit}>
                                        <div>
                                            <h1 className="titleContac text-danger">Contactanos</h1>
                                            <table className="tablaContacto table-borderless">
                                                <tr>
                                                    <td>nombre *</td>
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
                                                    <td>Email *</td>
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
                                                    <td>Telefono</td>
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
                                                    <td>Asunto</td>
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
                                                    <td>Mensaje</td>
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
                                    </form>
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