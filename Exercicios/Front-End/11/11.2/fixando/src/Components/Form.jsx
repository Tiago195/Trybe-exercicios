import React, { Component } from 'react'

export default class Form extends Component {
  constructor() {
    super()

    this.handleValue = this.handleValue.bind(this)

    this.state = {
      typeText: '',
      typeNumber: '',
      estado: 'SP',
      textArea: '',
      checkBox: '',
    }
  }

  handleValue({target}) {
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({[target.name]: value})
  }

  render() {
    return (
      <form>
        <select name='estado' onChange={this.handleValue}>
          <option value="SP">Sao Paulo</option>
          <option value="RJ">Rio de Janeiro</option>
        </select>
        <input type='text' name='typeText' id='typeText' onChange={this.handleValue}></input>
        <input type='number' name='typeNumber' id='typeNumber' onChange={this.handleValue} ></input>
        <input type="checkbox" name="checkBox" id="check" />
        <textarea name='textArea' onChange={this.handleValue} ></textarea>
      </form>
    )
  }
}
