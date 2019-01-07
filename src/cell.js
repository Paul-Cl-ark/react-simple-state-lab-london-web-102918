import React, { Component } from 'react';

export default class Matrix extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colour: this.props.value
    }
  }

  handleClick = () => {
    this.setState({
      colour: '#333'
    })
  }

  render() {
    return (
      <div
        className="cell"
        style={{backgroundColor: this.state.colour}}
        onClick={this.handleClick}>
      </div>
    )
  }
}
