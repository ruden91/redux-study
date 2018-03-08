import React, { Component } from 'react';

export default class Counter extends Component {
  constructor() {
    super();

    this.state = {
      count: 0
    }
  }

  handleIncrement = () => {
    this.setState((prevState, b) => {
      return {
        count: prevState.count + 1
      }
    })
  }

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  handleReset = () => {
    this.setState({
      count: 0
    })
  }
  get hello() {
    return 'hello';
  }
  render() {
    const { count } = this.state;

    return (
      <section className="counter">
        <p>{ this.hello }</p>
        <h1>{ count }</h1>    
        <button onClick={ this.handleIncrement } >Increment</button>
        <button onClick={ this.handleDecrement } >Decrement</button>
        <button onClick={ this.handleReset } >reset</button>
      </section>
    )
  }
}