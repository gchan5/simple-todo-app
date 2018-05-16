import React, { Component } from 'react';

class ItemInput extends Component {
  render() {
    return (
      <form onSubmit={(e) => {this.props.addItem(document.getElementById('todo').value); e.preventDefault();}}>
          <div className="form-group row">
            <div className="col-10">
              <input type="text" className="form-control" id="todo"/>
            </div>
            <button className="btn btn-primary">Add</button>
          </div>
      </form>
    );
  }
}

export default ItemInput;
