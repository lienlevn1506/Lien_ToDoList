import React, { Component } from "react";
import "../Board/Board.scss";


class Board extends Component {
  render() {
    const {taskRender}=this.props;
 
    return (
      <div>
        <div className="main">
          <div className="row">
            <div className="col ">
              <div className="col-top">
                <p className="col-top__tittle">{this.props.children}</p>
              </div>
              <div className="col-bottom">
                {taskRender}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
