import React, { Component } from 'react';

class SecondBox extends Component {
  constructor() {
    super();
    this.state = {
      filterFieldType: '',
    };
  }

  detectRange = (e) => {
    if (e.target.value === 'range') {
      this.setState(
        { filterFieldType:
          <div className="input-container-for-range">
              <p className="is-indicator">is</p>
              <input
                type="number"
                onChange={(e) => {this.setFilterBox(e)} }
              />
              <p className="and-indicator">and</p>
              <input
                type="number"
                onChange={(e) => {this.setSecondFilterBox(e)} }
              />
          </div>
        })
    } else {
      this.setState({ filterFieldType: '' })
    }
    this.props.setSelectorBox(e.target.value)
  }

  getSelectorVal (e) {
    this.props.setSelectorBox(e.target.value)
  }

  setFilterBox (e) {
    this.props.setFilterBox(e.target.value)
  }

  setSecondFilterBox (e) {
    this.props.setSecondFilterBox(e.target.value)
  }

  render() {

  const type = this.props.directive
  let result
  let filterField

  if (type === 'user_email') {
    result = <select onChange={(e) => {this.getSelectorVal(e)} }>
              <option value="starts_with">Starts with</option>
              <option value="does_not_start_with">Does not start with</option>
              <option value="contains">Contains</option>
              <option value="does_not_contain">Does not contain</option>
              <option value="exactly_equals">Exactly equals</option>
            </select>
    filterField = <input type="text" onChange={(e) => {this.setFilterBox(e)} }/>
  } else if (type === 'screen_width') {
    result = <select onChange={(e) => {this.detectRange(e)} }>
              <option value="is_larger_than">Is larger than</option>
              <option value="is_less_than">Is less than</option>
              <option value="is_exactly">Is exactly</option>
              <option value="range">Range</option>
            </select>
    filterField = <input type="number" onChange={(e) => {this.setFilterBox(e)} }/>
  } else if (type === 'screen_height') {
    result = <select onChange={(e) => {this.detectRange(e)} }>
      <option value="is_larger_than">Is larger than</option>
      <option value="is_less_than">Is less than</option>
      <option value="is_exactly">Is exactly</option>
      <option value="range">Range</option>
            </select>
    filterField = <input type="number" onChange={(e) => {this.setFilterBox(e)} }/>
  } else if (type === 'visits') {
    result = <select onChange={(e) => {this.detectRange(e)} }>
      <option value="is_larger_than">Is larger than</option>
      <option value="is_less_than">Is less than</option>
      <option value="is_exactly">Is exactly</option>
      <option value="range">Range</option>
            </select>
    filterField = <input type="number" onChange={(e) => {this.setFilterBox(e)} }/>
  } else if (type === 'user_first_name') {
    result = <select onChange={(e) => {this.getSelectorVal(e)} }>
      <option value="starts_with">Starts with</option>
      <option value="does_not_start_with">Does not start with</option>
      <option value="contains">Contains</option>
      <option value="does_not_contain">Does not contain</option>
      <option value="exactly_equals">Exactly equals</option>
            </select>
    filterField = <input type="text" onChange={(e) => {this.setFilterBox(e)} }/>
  } else if (type === 'user_last_name') {
    result = <select onChange={(e) => {this.getSelectorVal(e)} }>
      <option value="starts_with">Starts with</option>
      <option value="does_not_start_with">Does not start with</option>
      <option value="contains">Contains</option>
      <option value="does_not_contain">Does not contain</option>
      <option value="exactly_equals">Exactly equals</option>
            </select>
    filterField = <input type="text" onChange={(e) => {this.setFilterBox(e)} }/>
  } else if (type === 'page_response') {
    result = <select onChange={(e) => {this.detectRange(e)} }>
      <option value="is_larger_than">Is larger than</option>
    <option value="is_less_than">Is less than</option>
    <option value="is_exactly">Is exactly</option>
    <option value="range">Range</option>
            </select>
    filterField = <input type="number" onChange={(e) => {this.setFilterBox(e)} }/>
  } else if (type === 'domain') {
    result = <select onChange={(e) => {this.getSelectorVal(e)} }>
      <option value="starts_with">Starts with</option>
      <option value="does_not_start_with">Does not start with</option>
      <option value="contains">Contains</option>
      <option value="does_not_contain">Does not contain</option>
      <option value="exactly_equals">Exactly equals</option>
            </select>
    filterField = <input type="text" onChange={(e) => {this.setFilterBox(e)} }/>
  } else if (type === 'path') {
    result = <select onChange={(e) => {this.getSelectorVal(e)} }>
      <option value="starts_with">Starts with</option>
      <option value="does_not_start_with">Does not start with</option>
      <option value="contains">Contains</option>
      <option value="does_not_contain">Does not contain</option>
      <option value="exactly_equals">Exactly equals</option>
            </select>
    filterField = <input type="text" onChange={(e) => {this.setFilterBox(e)} }/>
  }

    return (
      <div className="second-box-container">
        {result}
        {this.state.filterFieldType || filterField}
      </div>
    );
  }

}


export default SecondBox;
