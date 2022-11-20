import React, { Component } from "react";
import Board from "../Board/Board";
import FormTask from "../FormTask/FormTask";
import "./MainPage.scss";

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          id: 1,
          tittle: "a",
          deadline: "20-11-2022",
          description: "abc",
          status: task_status.todo,
        },
        {
          id: 2,
          tittle: "b",
          deadline: "20-11-2022",
          description: "bcd",
          status: task_status.progress,
        },
        {
          id: 3,
          tittle: "c",
          deadline: "20-11-2022",
          description: "def",
          status: task_status.done,
        },
      ],
    };
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  onHandleSubmit(tittle, deadline, description) {
    if (tittle && deadline && description) {
      let currentTasks = this.state.tasks;

      let idi = lastItemId(currentTasks);
      let newTask = {
        id: idi,
        tittle: tittle || "",
        deadline: deadline || "",
        description: description || "",
        status: task_status.todo,
      };
      console.log(newTask);

      currentTasks.push(newTask);
      this.setState({ tasks: currentTasks });
    }
  }
  deleteCard = (cardId) => {
    let currentTasks = this.state.tasks;
    const newTasks = currentTasks.filter((card) => card.id !== cardId);
    this.setState({ tasks: newTasks });
  };
  
  editCard = (cardId) => {
    let currentTask = this.state.tasks;
    const editTask = currentTask.filter((card) => card.id === cardId);
    <FormTask key={cardId} editTask={editTask}></FormTask>
    // this.setState({task:editTask});
    return editTask;
  };

  render() {
    const { todoTasks, progressTasks, doneTasks } = taskDivisor(
      this.state.tasks
    );
    // console.log("object", todoTasks);

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
          <Board
            tasks={todoTasks}
            status={task_status.todo}
            deleteCard={this.deleteCard}
            editCard={this.editCard}
          >
            To do
          </Board>
          <Board
            tasks={progressTasks}
            status={task_status.progress}
            deleteCard={this.deleteCard}
            editCard={this.editCard}
          >
            Processing
          </Board>
          <Board
            tasks={doneTasks}
            status={task_status.done}
            deleteCard={this.deleteCard}
            editCard={this.editCard}
          >
            Done
          </Board>
        </div>
        <div className="tag"></div>
      </div>
    );
  }
}

const taskDivisor = (tasks) => {
  let todoTasks = [];
  let progressTasks = [];
  let doneTasks = [];
  for (const task of tasks) {
    // eslint-disable-next-line default-case
    switch (task.status) {
      case task_status.todo:
        todoTasks.push(task);
        break;
      case task_status.progress:
        progressTasks.push(task);
        break;
      case task_status.done:
        doneTasks.push(task);
        break;
    }
  }

  return { todoTasks, progressTasks, doneTasks };
};

const lastItemId = (newTask) => {
  if (newTask) {
    return newTask[newTask.length - 1].id + 1;
  } else {
    return 1;
  }
};
const task_status = {
  todo: 1,
  progress: 2,
  done: 3,
};

export { taskDivisor, lastItemId, task_status };
