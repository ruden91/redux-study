import React, { Component } from 'react';

import CountDown from './components/CountDown';
import NewItem from './components/NewItem';
import Items from './components/Items';
import { uniqueId, filter, remove, map } from 'lodash';
const defaultState = [
  { value: 'Pants', id: uniqueId(), packed: false },
  { value: 'Jacket', id: uniqueId(), packed: false },
  { value: 'iPhone Charger', id: uniqueId(), packed: false },
  { value: 'MacBook', id: uniqueId(), packed: false },
  { value: 'Sleeping Pills', id: uniqueId(), packed: true },
  { value: 'Underwear', id: uniqueId(), packed: false },
  { value: 'Hat', id: uniqueId(), packed: false },
  { value: 'T-Shirts', id: uniqueId(), packed: false },
  { value: 'Belt', id: uniqueId(), packed: false },
  { value: 'Passport', id: uniqueId(), packed: true },
  { value: 'Sandwich', id: uniqueId(), packed: true },
];

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      items: []
    }
  }

  onSubmit = (value) => {
    let items = this.state.items.concat({ value: value, id: uniqueId(), packed: false })

    this.setState({
      items
    })
  }

  handleCheckButton = (selectedItem) => {
    let items = map(this.state.items, (item) => {
      if (item.id === selectedItem.id) {
        item.packed = !item.packed
      }
      return item;
    })
    
    this.setState({
      items
    })
  }

  handleRemoveButton = (selectedItem) => {
    let items = remove(this.state.items, (item) => item.id !== selectedItem.id);

    this.setState({
      items
    })
  }

  clearUnpackedButton = () => {
    let items = map(this.state.items, (item) => {
      item.packed = false;
      return item;
    })

    this.setState({
      items
    })
  }

  componentDidMount() {
    this.setState({
      items: defaultState
    })
  }

  render() {
    const { items } = this.state;
    return (
      <div className="app">
        <NewItem onSubmit={ this.onSubmit }/>
        <CountDown />
        <Items 
          title="Unpacked Items" 
          items={ filter(items, item => !item.packed) } 
          handleCheckButton={ this.handleCheckButton }
          handleRemoveButton={ this.handleRemoveButton }
        />
        <Items 
          title="Packed Items" 
          items={ filter(items, item => item.packed) } 
          handleCheckButton={ this.handleCheckButton }
          handleRemoveButton={ this.handleRemoveButton }          
        />
        <button className="button full-width" onClick={ this.clearUnpackedButton }>Mark All As Unpacked</button>      
      </div>
    )
  }
}