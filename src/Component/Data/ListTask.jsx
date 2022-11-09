import React, { Component } from "react";
import "../Data/ListTask.scss";

class ListTask extends Component {
  render() {
    const { task} = this.props;


    return (
      <div>
        <div className="task">
          <div className="task-main__tittle">
            {/* {this.props.children} */}
            <p className="task-main__tittle__text">{task.tittle}</p>
            <p className="task-main__tittle__des1" type="text">
              {task.description}
            </p>
            <p className="task-main__tittle__des2">{task.deadline}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ListTask;
