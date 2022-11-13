import React, { Component } from "react";
import "../Data/ListTask.scss";
import { task_status } from "../MainPage/MainPage";

class ListTask extends Component {
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
    // let tasks = this.state.tasks || [];

    const { ticket, status } = this.props;

    return (
      <div>
        <div className="task">
          <div className="task-main__tittle">
            {/* {this.props.children} */}

            <p
              className="task-main__tittle__text"
              style={this.getBackgroundHeader(status)}
            >
              {ticket.tittle}
              <button className="clear">X</button>
            </p>
            <p className="task-main__tittle__des1" type="text">
              {ticket.description}
            </p>
            <p className="task-main__tittle__des2">{ticket.deadline}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ListTask;
