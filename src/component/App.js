import './style/App.css';
import {BrowserRouter , Switch , Route } from 'react-router-dom';
import Home from '../pages/Home'
import Nosotros from '../pages/Nosotros';

function App() {
  return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/" component={Home} />
            <Route exact path="/nosotros" component={Nosotros} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
