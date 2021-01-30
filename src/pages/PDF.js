import React, {Component} from "react";
import '../component/style/PDf.css';
import PDF1 from '../assets/Doc/LaCuevaStudio(free).pdf';

class PDF extends Component{

    componentDidMount() {
        if(typeof window.orientation !== "undefined"){
            document.getElementById('descargaPDF').click();
            window.close();
        }
    }

    render() {
        return(
            <React.Fragment>
                <div className="PDFStyle">
                    <object
                        data={PDF1}
                        type="application/pdf"
                        className="PDFDoc"
                    >
                     <a href={PDF1} id="descargaPDF" download="LaCuevaStudio(free).pdf">
                         Tu dispositivo no puede visualizar PDF, da click para descargarlo
                     </a>
                    </object>
                </div>
            </React.Fragment>
        )
    }
}

export default PDF;