import React, { Component } from "react";
import "../Board/Board.scss";
import Task from "../Task/Task";
import { task_status } from "../MainPage/MainPage";

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.getBackgroundHeader = this.getBackgroundHeader.bind(this);
  }
  getBackgroundHeader = (status) => {
    let color = "#cccc00";

    // eslint-disable-next-line default-case
    switch (status) {
      case task_status.todo:
        color = "#cccc00";
        break;
      case task_status.progress:
        color = "#29cce5";
        break;
      case task_status.done:
        color = "#009900";
        break;
    }
    return { backgroundColor: `${color}` };
  };

  render() {
    const { status, tasks, deleteCard, onHandleEdit } = this.props;
    // console.log("task,", tasks);

    const taskRender = tasks.map((task, index) => (
      <Task
        key={index}
        ticket={task}
        status={task.status}
        deleteCard={deleteCard}
        // editCard={editCard}
        onHandleEdit={onHandleEdit}
      ></Task>
    ));

    return (
      <div>
        <div className="main">
          <div className="row">
            <div className="col ">
              <div className="col-top" style={this.getBackgroundHeader(status)}>
                <p className="col-top__title">{this.props.children}</p>
              </div>
              <div className="col-bottom">{taskRender}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
