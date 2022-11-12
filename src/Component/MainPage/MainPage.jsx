import React, { Component } from "react";
import Board from "../Board/Board";
import ListTask from "../Data/ListTask";
import FormTask from "../FormTask/FormTask";
import "./MainPage.scss";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: [],
    };
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  onHandleSubmit(tittle, deadline, description) {
    if (tittle && deadline && description) {
      let newTask = {
        id: lastItemId,
        tittle: tittle || "",
        deadline: deadline || "",
        description: description || "",
      };
      let currentTask = this.state.task;
      currentTask.push(newTask);
      this.setState({task: currentTask})
    }
  }

  render() {
    let tasks = this.state.task || [];

    const taskRender = tasks.map((task) => (
      <ListTask key={task.index} task={task}></ListTask>
    ));

    return (
      <div>
        <div className="board">
          <h1 className="board-tittle">Todo List Board</h1>
        </div>
        <div className="formTask">
          <FormTask dataSubmit={this.onHandleSubmit} />
        </div>
        <div className="mainPage">
          {/* <Board />; */}
          <Board taskRender={taskRender}>To do</Board>
          <Board>Processing</Board>
          <Board>Done</Board>
        </div>
        <div className="tag"></div>
      </div>
    );
  }
}

const lastItemId = (items) => {
  if (items) {
    return items[items.length - 1].id + 1;
  } else return 1;
};

export default MainPage;
