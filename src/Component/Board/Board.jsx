import React, { Component } from "react";
import "../Board/Board.scss";
import ListTask from "../Data/ListTask";
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
    const { status, tasks, deleteCard, editCard } = this.props;
    // console.log("task,", tasks);

    const taskRender = tasks.map((task, index) => (
      <ListTask
        key={index}
        ticket={task}
        status={task.status}
        deleteCard={deleteCard}
        editCard={editCard}
      ></ListTask>
    ));

    return (
      <div>
        <div className="main">
          <div className="row">
            <div className="col ">
              <div className="col-top" style={this.getBackgroundHeader(status)}>
                <p className="col-top__tittle">{this.props.children}</p>
              </div>
              <div className="col-bottom">{taskRender}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
