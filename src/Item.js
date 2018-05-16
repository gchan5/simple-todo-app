import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <div className="card spacing">
        <div className="card-body">
          <div className="row">
            <div className="col-11">
              <span className="align-middle">{this.props.todo}</span>
            </div>
            <div className="col-1">
              <button type="button" className="btn btn-light white" onClick={() => this.props.deleteItem(this.props.position)}>
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
