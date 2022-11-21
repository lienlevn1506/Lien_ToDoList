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
          title: "a",
          deadline: "20-11-2022",
          description: "abc",
          status: task_status.todo,
        },
        {
          id: 2,
          title: "b",
          deadline: "20-11-2022",
          description: "bcd",
          status: task_status.progress,
        },
        {
          id: 3,
          title: "c",
          deadline: "20-11-2022",
          description: "def",
          status: task_status.done,
        },
      ],
      editTicket: [],
    };
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
    this.onHandleEdit = this.onHandleEdit(this);
  }

  onHandleSubmit(title, deadline, description) {
    if (title && deadline && description) {
      let currentTasks = this.state.tasks;

      let idi = lastItemId(currentTasks);
      let newTask = {
        id: idi,
        title: title || "",
        deadline: deadline || "",
        description: description || "",
        status: task_status.todo,
      };
     

      currentTasks.push(newTask);
      console.log("newTask", newTask);
      this.setState({ tasks: currentTasks });
    }
  }
  deleteCard = (cardId) => {
    let currentTasks = this.state.tasks;
    const newTasks = currentTasks.filter((card) => card.id !== cardId);
    this.setState({ tasks: newTasks });
  };

  // editCard = (cardId) => {
  //   let currentTask = this.state.tasks;
  //   const editTask = currentTask.filter((card) => card.id === cardId);
  //   <FormTask key={cardId} editTask={editTask}></FormTask>;
  //   // this.setState({task:editTask});
  //   return editTask;
  // };
  onHandleEdit(id, title, deadline, description, status) {
    let editData = {
      id: id,
      title: title,
      deadline: deadline,
      description: description,
      status: task_status.todo,
    };
    this.setState({ editTicket: editData });
  }

  render() {
    const { todoTasks, progressTasks, doneTasks } = taskDivisor(
      this.state.tasks
    );
    // const { editTicket } = this.state;
    // console.log("editTicket", editTicket);
    // console.log("object", todoTasks);

    return (
      <div>
        <div className="board">
          <h1 className="board-title">Todo List Board</h1>
        </div>
        <div className="formTask">
          <FormTask
            dataSubmit={this.onHandleSubmit}
            editData={this.editTicket}
          />
        </div>
        <div className="mainPage">
          {/* <Board />; */}
          <Board
            tasks={todoTasks}
            status={task_status.todo}
            deleteCard={this.deleteCard}
            onHandleEdit={this.onHandleEdit}
            // editCard={this.editCard}
          >
            To do
          </Board>
          <Board
            tasks={progressTasks}
            status={task_status.progress}
            deleteCard={this.deleteCard}
            // editCard={this.editCard}
            onHandleEdit={this.onHandleEdit}
          >
            Processing
          </Board>
          <Board
            tasks={doneTasks}
            status={task_status.done}
            deleteCard={this.deleteCard}
            // editCard={this.editCard}
            onHandleEdit={this.onHandleEdit}
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
