import './style/App.css';
import {BrowserRouter , Switch , Route } from 'react-router-dom';
import Home from '../pages/Home'
import Nosotros from '../pages/Nosotros';
import Proyecto from '../pages/Proyecto';
import Producto from "../pages/Producto";
import Contacto from '../pages/Contacto';
import PDF from '../pages/PDF';
import Servicios from "../pages/Servicios";

function App() {
  return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/" component={Home} />
            <Route exact path="/nosotros" component={Nosotros} />
            <Route exact path="/proyecto" component={Proyecto} />
            <Route exact path="/producto" component={Producto} />
            <Route exact path="/servicios" component={Servicios}/>
            <Route exact path="/contacto" component={Contacto} />
            <Route exact path="/producto/pdf" component={PDF}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
