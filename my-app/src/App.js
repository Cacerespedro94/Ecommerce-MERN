import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import CargarProductos from './components/CargarProductos'
function App() {
  return (
    <div className="App">
          <Router>
    <div className="">
      <Navbar/>
     
      <Switch>
        <Route path="/" exact>
          <h1>Inicio</h1>
        </Route>
        <Route path="/CargarStock" exact>
        <h1>Cargar stock</h1>
        </Route>
        <Route path="/Productos" exact>
          <CargarProductos/>
        </Route>
      </Switch>
    </div>
  </Router>
      
    </div>
  );
}

export default App;
