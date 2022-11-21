import React, { Component } from "react";
import { Input } from "reactstrap";
// import Board from "../Board/Board";
import MainPage from "../MainPage/MainPage";
import "./title.scss";

class title extends Component {
  card() {
    <div className="col-over__bottom">
      <div className="col-bottom">
        <div className="col-bottom__title1">
          <div className="col-bottom__title1__main">
            <p className="col-bottom__title1__main__text">[title]</p>
          </div>
          <div className="col-bottom__title1__main__des">
            <Input
              className="col-bottom__title1__main__des1"
              type="text"
              placeholder="Description abc ..."
            ></Input>
            <p className="col-bottom__title1__main__des2">T5 - 20/11/2022</p>
          </div>
        </div>
      </div>
    </div>;
  }
  render() {
    return (
      <>
        <MainPage card={this.card}></MainPage>
      </>
    );
  }
}

export default title;
