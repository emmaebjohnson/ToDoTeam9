import React, { Component } from "react";

export class TodoItem extends Component {
  render() {
    // first, set up the local variables
    // that our JSX will use:
    const { id, title, desc} = this.props.todo;
    const cssStyle = {
      textDecoration: this.props.todo.completed ? "line-through" : "none", //if else statement
    };

    // Now generate the JSX (the HTML & JS)
    return (
      <div style={cssStyle}>
        <p>
          <input
            type="checkbox"
            onChange={
              // arrow function allows React to run our code later (when the checkbox changes)
              () =>
                // when React does run it, call markComplete with the id for this todo item:
                this.props.markComplete(id)
            }
          />{" "}
          {id } . {title} 
        </p>
        <p> {desc} </p>
      </div>
    );
  }
}

export default TodoItem;
