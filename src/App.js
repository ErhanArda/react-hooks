import React, { Component } from 'react';
import "./App.css"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light"
    };
  }

  render() {
    return (
      <div className={this.state.theme} >
        <button onClick={()=>{this.setState({
          theme: "light"
        })}} >Light</button>
        <button onClick={()=>{this.setState({
          theme: "dark"
        })}}>Dark</button>
      </div>
    );
  }
}

export default App;
