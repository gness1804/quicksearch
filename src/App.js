// note: line 67 below is adapted from https://jsbin.com/wahuzo/edit?html,js,console,output

import React, { Component } from 'react';
import './App.css';
import Row from './Row';
import randomize from './helpers/randomize';
import dynamic from './helpers/dynamic';

class App extends Component {
  constructor() {
    super();
    this.state = {
      rows: [],
    };
  }

  addRow () {
    const rng = randomize()
    const newRow = {
      key: rng,
      id: rng,
      categoryBoxValue: 'user_email',
      selectorVal: 'starts_with',
      filterVal: null,
      secondFilterVal: null,
    }
    this.setState({ rows: [
      ...this.state.rows,
      newRow,
    ] });
  }

  doSearch = () => {
    const refs = this.refs
    if (!Object.keys(refs).length) {
      alert(
       'Error: You cannot run the search until there is at least one row of data.'
      )
      return
    }
    for (var ref in refs) {
      if (refs.hasOwnProperty(ref)) {
        this.refs[ref].doSearch()
      }
    }
  }

  removeRow = (id) => {
    this.setState({ rows: this.state.rows.filter((row) => {
        return row.id !== id
      }) })
  }

  render() {

    const { rows } = this.state

    return (
      <div className="App">
        <div className="header">
          <h2>Search for Sessions</h2>
        </div>
        <hr />
          <div id="input-container">
            {rows.length ? rows.map((row) => {
              return <Row
                {...row}
                removeRow={this.removeRow}
                ref={`child${dynamic()}`}
                />
            }) :
            <p id="no-rows-message">
              No rows to display. Please add at least one query using the "And" button.
            </p>}
          </div>
        <button
          id="add-row-button"
          onClick={() => {this.addRow()} }
        >
          And
        </button>
        <button
          id="master-search-button"
          onClick={() => this.doSearch()}
        >
          Search All
        </button>
      </div>
    );
  }
}

export default App;
