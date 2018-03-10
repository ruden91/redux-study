import React, { Component } from 'react';

import Store from './store';
import * as actions from './actions';

class Caculator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { numberOfPeople, slicesPerPerson } = this.props;
    const { onReset, updateNumberOfPeople, updateSlicesPerPerson } = this.props;
    return (
      <div className="app-caculator">
        <input type="number" value={ numberOfPeople } onChange={ updateNumberOfPeople } />
        <input type="number" value={ slicesPerPerson } onChange={ updateSlicesPerPerson } />
        <button onClick={ onReset }>reset button</button>
      </div>
    )
  }
}

export default class App extends Component {
  state = Store.getState();

  updateNumberOfPeople = (e) => {
    actions.updateNumberOfPeople(parseInt(e.target.value || 0));
  }

  updateSlicesPerPerson = (e) => {
    actions.updateSlicesPerPerson(parseInt(e.target.value || 0));
  }

  onReset = () => {
    actions.reset();
  }

  updateState = () => {
    this.setState(Store.getState());
  }

  componentDidMount() {
    Store.on('change', this.updateState);
  }

  componentWillUnmount() {
    Store.off('change', this.updateState);
  }

  render() { 
    return (
      <div>
        <Caculator 
          { ...this.state }
          updateNumberOfPeople={ this.updateNumberOfPeople }
          updateSlicesPerPerson={ this.updateSlicesPerPerson }
          onReset={ this.onReset }
        />
      </div>
    )
  }
}