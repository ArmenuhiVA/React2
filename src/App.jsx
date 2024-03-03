import React from "react";
import { Decrement, Increment } from "./messages";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      minVal: -10,
      maxVal: 10
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment(){
    this.setState({
      counter: this.state.counter + 1
    })
  }
  decrement(){
    this.setState({
      counter: this.state.counter - 1
    });
  }
  componentDidMount(){
    console.log("Mounted", this.state.isCounterShow)
  }

  shouldComponentUpdate(){
     return true
  }

  componentDidUpdate(){
    console.log("update", this.state.counter)
  }

  render() {
    console.log('render')
    return (
      <>
      <h1>Counter:{this.state.counter}</h1>
      {this.state.counter < this.state.maxVal ? <button onClick={this.increment}>Increment</button> : <button disabled>Increment</button>}
      {this.state.counter > this.state.minVal ? <button onClick={this.decrement}>Decrement</button>: <button disabled>Increment</button>}
      {this.state.counter >= 10 ? <Increment/> : null}
      {this.state.counter <= -10 ? <Decrement/> : null}
      </>
    )
  }
}

export default App;