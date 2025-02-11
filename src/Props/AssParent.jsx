import React from "react";
import Child from "./Child";
import Assignment from "./Assignment";
class AssParent extends React.Component {
  state = {
    username: "Bharadwaj",
    age: 21,
    roll_no: "2211CS010297",
  };
  render() {
    return (
      <>
        <Assignment
          name={this.state.username}
          age={this.state.age}
          roll_no={this.state.roll_no}
        />
      </>
    );
  }
}
export default AssParent;
