import React, { Component } from 'react';
import SecondBox from './SecondBox';
import axios from 'axios';

class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      categoryBoxValue: this.props.categoryBoxValue,
      selectorVal: this.props.selectorVal,
      filterVal: this.props.filterVal,
      secondFilterVal: this.props.secondFilterVal,
    };
  }

  doSearch = () => {
    const category = this.state.categoryBoxValue
    const selector = this.state.selectorVal
    const filter = this.state.filterVal
    const secondFilterVal = this.state.secondFilterVal || 'none'

    if (!category || !selector || !filter) {
      alert(
        'Error: you are missing one or more fields. Please fill out all fields and try again'
      )
      return
    }

    if (selector === 'range' && secondFilterVal === 'none') {
      alert(
        'Error: the range must include values for both input fields. Please try again.'
      )
      return
    }

    axios.get(
      `/api/v1/session/${category}/1/${selector}/1/${filter}/1/${secondFilterVal}`
    )
    .then((response) => {console.log(response)})
  }

  removeRow = (id) => {
    this.props.removeRow(id)
  }

  setSelectorBox = (value) => {
    this.setState({ selectorVal: value })
  }

  setFilterBox = (value) => {
    this.setState({ filterVal: value })
  }

  setSecondFilterBox = (value) => {
    this.setState({ secondFilterVal: value })
  }

  updateBox1Value (e) {
    const boxVal = e.target.value
    this.setState({ categoryBoxValue: boxVal })
    if (boxVal === 'screen_width') {
      this.setState({ selectorVal: 'is_larger_than'})
    }
    if (boxVal === 'screen_height') {
      this.setState({ selectorVal: 'is_larger_than'})
    }
    if (boxVal === 'visits') {
      this.setState({ selectorVal: 'is_larger_than'})
    }
    if (boxVal === 'page_response') {
      this.setState({ selectorVal: 'is_larger_than'})
    }
  }

  render() {

    const { categoryBoxValue } = this.state
    const { id } = this.state

    return (
      <div className="row-container">
        <button
          className="remove-button"
          onClick={() => {this.removeRow(id)} }
        >
          -
        </button>
        <select
          className="first-box"
          onChange={(e) => {this.updateBox1Value(e)} }
        >
          <option value="user_email">User Email</option>
          <option value="screen_width">Screen Width</option>
          <option value="screen_height">Screen Height</option>
          <option value="visits"># of Visits</option>
          <option value="user_first_name">First Name</option>
          <option value="user_last_name">Last Name</option>
          <option value="page_response">Page Response Time (ms)</option>
          <option value="domain">Domain</option>
          <option value="path">Page Path</option>
        </select>
        <SecondBox
          directive={categoryBoxValue}
          setSelectorBox={this.setSelectorBox}
          setFilterBox={this.setFilterBox}
          setSecondFilterBox={this.setSecondFilterBox}
        />
        <button
          className="search-button-each-row"
          onClick={() => {this.doSearch()} }
        >
          Search Row
        </button>
      </div>
    );
  }

}


export default Row;
