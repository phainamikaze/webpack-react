import React, { Component } from 'react'
import { render } from 'react-dom'

export default class HelloWorld extends Component {
  render() {
    return (
      <h1>Hello World55555555</h1>
    )
  }
}

render(<HelloWorld />, document.getElementById('app'))