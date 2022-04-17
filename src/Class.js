import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Class extends Component {
  state = {
    currentInput: '',
    num: '',
    num1: '',
    op: '',
    result: ''
  };
   getBtnValue = (e) => {
    if (this.state.op === '') {
      this.setState({num: this.state.num+e.target.textContent})
    } else {
      this.setState({ num1: this.state.num+e.target.textContent });
    }
    this.setState({
      currentInput: this.state.num + this.state.op + this.state.num1,
    });
}

getOp = (e) =>{
    this.setState({op: e.target.textContent})
  }

  getResult = ()=>{
      switch (this.state.op) {
        case "/":
          this.setState({result: parseInt(this.state.currentInput) / parseInt(this.state.num1)});
          break;
        case "-":
          this.setState({result: parseInt(this.state.currentInput) - parseInt(this.state.num1)});
          break;
        case "+":
          this.setState({result: parseInt(this.state.currentInput) + parseInt(this.state.num1)});
          break;
        case "X":
          this.setState({result: parseInt(this.state.currentInput) * parseInt(this.state.num1)});
          break;

        default:
          this.setState({result: ''});
          break;
      }
  }
    deleteAll = ()=>{
    this.setState({op: ''});
    this.setState({num: ""});
    this.setState({num1: ""});
    this.setState({currentInput: ""});
  }
//   componentDidUpdate(){
//       this.setState({
//         currentInput: this.state.num + this.state.op + this.state.num1,
//       });
//   }

  render() {
    return (
      <div className="calc">
        <Link to="/">Go to Functional Component Calculator</Link>
        <h2>Calculator</h2>
        <div className="cont">
          <div className="top">
            <div className="screen">
              <p className="res">{this.state.result}</p>
              <p className="inputs">{this.state.currentInput}</p>
            </div>
          </div>
          <div className="upbtns">
            <button onClick={this.deleteAll} className="btn">AC</button>
            <button onClick={this.deleteAll} className="btn">DEL</button>
          </div>
          <div className="mainbtns">
            <button onClick={this.getBtnValue} className="btn">7</button>
            <button onClick={this.getBtnValue} className="btn">8</button>
            <button onClick={this.getBtnValue} className="btn">9</button>
            <button onClick={this.getOp} className="btn">/</button>
            <button onClick={this.getBtnValue} className="btn">4</button>
            <button onClick={this.getBtnValue} className="btn">5</button>
            <button onClick={this.getBtnValue} className="btn">6</button>
            <button onClick={this.getOp} className="btn">X</button>
            <button onClick={this.getBtnValue} className="btn">1</button>
            <button onClick={this.getBtnValue} className="btn">2</button>
            <button onClick={this.getBtnValue} className="btn">3</button>
            <button onClick={this.getOp} className="btn">-</button>
            <button onClick={this.getBtnValue} className="btn">0</button>
            <button onClick={this.getBtnValue} className="btn">.</button>
            <button onClick={this.getResult} className="btn">=</button>
            <button onClick={this.getOp} className="btn">+</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Class