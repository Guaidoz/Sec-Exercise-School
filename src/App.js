import React, { Component } from 'react';


class App extends Component {
	
  state = {  
	  counter: 0
  }
  render() {
	  
    return (
	  <div  id="i">
		  <h1> contatore: {this.state.counter}</h1>
			  <button onClick={() => this.setState({counter: this.state.counter + 1})}>
			  incrementa
			  </button>
			  <button onClick={() => this.setState({counter: this.state.counter - 1})}>
			  decrementa	
			  </button>
	  </div>
    );
  }
}

export default App; 