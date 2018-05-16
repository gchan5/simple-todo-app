import React, { Component } from 'react';
import ItemInput from './ItemInput';
import Title from './Title';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    }
  }

  addItem(item) {
    let newItems = this.state.items.slice();
    newItems.push(item);

    this.setState({
      items: newItems
    })

    document.getElementById('todo').value = "";
  }

  deleteItem(index) {
    let newItems = this.state.items.slice();
    newItems.splice(index, 1);

    this.setState({
      items: newItems
    })
  }

  render() {
    const list = this.state.items;

    const items = list.map(function(item, place) {
      return (
        <Item key={place} todo={item} position={place} deleteItem={(index) => this.deleteItem(index)} />
      )
    }, this)

    return (
      <div className="App">
        <div className="container">
          <Title />
          <ItemInput addItem={(item) => this.addItem(item)}/>
          {items}
        </div>
      </div>
    );
  }
}

export default App;
