import React, { Component } from "react";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.input = React.createRef();
    this.desc = React.createRef();
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Enter a task" ref={this.input} />
        <input type="text" placeholder="Enter a description" ref={this.desc} />
        <button class = "low"
          onClick={() => {
            this.props.addTodoItem(
              this.input.current.value + "[ low ] ",
              this.desc.current.value
            );
            this.input.current.value = "";
            this.desc.current.value = "";
          }}
        >
          {" low "}
        </button>

        <button class = "medium"
          onClick={() => {
            this.props.addTodoItem(
              this.input.current.value +
                ("[ medium ]" + <p> this.desc.current.value </p>)
            );
            this.input.current.value = "";
            this.desc.current.value = "";
          }}
        >
          {" medium "}
        </button>

        <button class = "high"
          onClick={() => {
            this.props.addTodoItem(
              this.input.current.value +
                ("[ high ]" + <p> this.desc.current.value </p>)
            );
            this.input.current.value = "";
          }}
        >
          {" high "}
        </button>
      </div>
    );
  }
}

export default TodoForm;
