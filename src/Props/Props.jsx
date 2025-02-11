import React, { Component } from 'react'

export default class Props extends Component {
  render() {
    return (
        <>
        {
            React.createElement("h1","null","Hello World")
        }
        {
            React.createElement("div",{id:"Demo"},React.createElement("span","null","I am span tag"))
        }
        <h1>HELLO WORLD </h1>
        <h1>{5*5}</h1>

        </>
    )
  }
}
