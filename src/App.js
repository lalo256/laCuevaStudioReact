import './App.css';
import {BrowserRouter , Switch , Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Contacto from "./Pages/Contacto";

function App() {
  return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/contacto" component={Contacto} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
