import React, { Component } from 'react'

export  class Increment extends Component {
    componentWillUnmount(){
        console.log('unmouned counter')
    }
  render() {
    return (
      <div>
        <h2>That's the maximum value</h2>
      </div>
    )
  }
}

export  class Decrement extends Component {
  componentWillUnmount(){
      console.log('unmouned counter')
  }
  render() {
    return (
      <div>
        <h2>That's the minimum value</h2>
      </div>
    )
  }
}