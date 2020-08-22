import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeypadComponent from './components/KeypadComponent';

class App extends Component {
  constructor(){
    super();

    this.state = {
      result: ""
    }
  }

  onClick = button => {
    if(button === "="){
      this.calculate()
    }

    else if(button === "AC"){
      this.reset()
    }

    else {
      this.setState({
        result: this.state.result + button
      })
    }
  };

  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || "" ) + ""
      })
    } catch (e) {
      this.setState({
        result: "Error!"
      })
    }
  }; 

  reset = () => {
    this.setState({
      result: ""
    })
  }; 

  render() {
    return (
      <div>
        <div className="calculator-body">
          <h1>React-Calculator</h1>
          <ResultComponent result={this.state.result}/>
          <KeypadComponent onClick={this.onClick}/>
        </div>
      </div>
    );
  }
}

export default App;
