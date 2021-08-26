import calculadora from './icone.png';
import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
    number1:'', 
    operador:'', 
    number2:'',
    resultado: null
  }

  handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    this.setState({[name]:value});
    //console.log(`name => ${name}`)
    //console.log(`value => ${value}`)
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    const {number1, operador, number2} = this.state
    console.log("a =>", number1)
    console.log("c =>", operador)
    console.log("b =>", number2)
    
    const resultado = this.calculation(number1, operador, number2)
    console.log("resultado =>", resultado)

    this.setState({
      ...this.state,
      resultado
    })
  }

  calculation = (number1, operador, number2) => {
      number1 = parseInt(number1)
      number2 = parseInt(number2)
      let resultado = null

    if (operador === '+') {
        resultado = number1 + number2
    } else if (operador === '-') {
        resultado = number1 - number2 
    } else if (operador === '/') {
        resultado = number1 / number2
    } else if (operador === '*') {
        resultado = number1 * number2 
    } else if (operador === 'M') {
        resultado = number1 % number2
    }
    
    return resultado
  }

  render () {
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={calculadora} className="App-logo" alt="logo"/>
        <form onChange = {this.handleChange} onSubmit = {this.handleSubmit}>
          <input name="number1" placeholder="digite um valor" value = {this.state.input1} aria-label="number1"></input>
          <select id="op" name="operador" aria-label="operador">
          <option value={this.state.operator}>Operador</option>
          <option value={this.state.operator}>+</option>
          <option value={this.state.operator}>-</option>
          <option value={this.state.operator}>/</option>
          <option value={this.state.operator}>*</option>
          <option value={this.state.operator}>M</option>
          </select>
          
          <input name="number2" placeholder="digite um valor" value = {this.state.input2} aria-label="number2"></input>
          <button aria-label="calcule">Calcule</button>
        </form>
        <p aria-label="resultado">Resultado: {this.state.resultado}</p>
        <a href="https://github.com/seabravitor/Calculator_App" target="blank">Open-source code by Vitor Seabra</a>
      </header>
    </div>
  )};
}

export default App;


