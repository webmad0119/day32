import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  //state básico
  state = {
    name: "batman",
    year: 1995,
    director: "batman director",
    sent: false,
    nameIsValid: true
  }

  //función manejadora que clona el estado y establece el name nuevo pasado. 
  //dependiendo de la longitud queremos mostrar un feedback visual al usuario (menos de 4 caracteres es incorrecto)
  handleNameState = (e) => {
    let cloneStated = {
      ...this.state,
      name: e.target.value
    }

    if (e.target.value.length > 3) {
      cloneStated.nameIsValid = true
    } else {
      cloneStated.nameIsValid = false
    }

    this.setState(cloneStated)
  }

  //función manejadora que clona el estado y establece el director nuevo pasado. 
  handleDirectorState = (e) => {
    this.setState({
      ...this.state,
      director: e.target.value
    })
  }

  //función manejadora que clona el estado y establece el year nuevo pasado. 
  handleYearState = (e) => {
    this.setState({
      ...this.state,
      year: +e.target.value
    })
  }

  //esta función maneja qué sucede cuando haces submit en el formulario
  //puedes aprocvechar el state para actualizar el registro del que estamos hablando en tu API
  //ya que contiene toda la informació nque precisa ser actualizada
  handleSubmit = (e) => {
    //esto se utiliza para evitar una refresco de pantalla
    //tras el envío de formulario de manera clásica que es refrescando la pantalla
    //recuerda que estamos es una SPA
    e.preventDefault()
    //aquí harías tu envio por axios para actualizar los valores en tu base de datos usando tu API creada con nodejs/express
    //axios.put("http://localhost:3000/movie/update", this.state)
    
    
    //sent es para informar al usuario de que los datos han sido enviados mostrando un feedback visual
    this.setState({
      ...this.state,
      sent: true
    })
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <h1>Movies {this.state.name} ({this.state.year})</h1>
{/* 
          recuerda que cualquier controlled form item necesita tener un changeHandler porque 
          si no el estado no podría cambiar y no verías ninguna actualización al escribir en un campo */}

          {this.state.nameIsValid ? <span>Nombre correcto</span> : <span>Nombre incorrecto</span>}
          <input type="text" value={this.state.name} onChange={this.handleNameState}></input>
          <input type="text" value={this.state.year} onChange={this.handleYearState}></input>
          <input type="text" value={this.state.director} onChange={this.handleDirectorState}></input>

          <button>Submit change</button>
          {this.state.sent ? <span>Enviado</span> : ""}
        </form>
      </div>
    );
  }
}

export default App;
