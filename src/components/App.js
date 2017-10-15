import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
      <h1> Block Physics </h1>
      <hr />
      <div className="row">
        <p>9	Una molla de constant de rigidesa 1,0·102 N·m-1 es troba recolzada sobre una taula i es comprimeix horitzontalment 0,15 m.
      <ul>
        <li>(a)	Quina energia potencial acumula la molla?</li>
        <p> Ep = 1/2 · k · x^2 </p>
        <p> Ep = 1/2 · 102 · 0.15^2</p>
        <li>(b)	Aquesta compressió es fa servir per a llençar un objecte de 2,0 g. Amb quina velocitat sortirà?</li>
        <li>(c)	Amb quina velocitat sortirà un objecte amb el doble de massa?</li>
        <li>(d)	Demostreu que la velocitat de sortida és proporcional a la compressió inicial de la molla.</li>
      </ul>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
