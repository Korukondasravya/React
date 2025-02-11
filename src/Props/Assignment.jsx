import React from "react";
class Assignment extends React.Component {
  render() {
    return (
      <>
        <h1> Props..using the parent component in child component</h1>
        <h1> I am {this.props.name}</h1>
        <h1> and i am {this.props.age} years old..</h1>
        <h1>
          {" "}
          I am currently pursuing my under grad in CSE from MRUH with roll no
          {this.props.roll_no}
        </h1>
      </>
    );
  }
}
export default Assignment;