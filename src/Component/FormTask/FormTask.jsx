import React, { Component } from "react";
import { Col, FormGroup, Input } from "reactstrap";
import "./FormTask.scss";

class FormTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      deadline: "",
      description: "",
    };
  }

  onHandleChangetitle(event) {
    this.setState({
      title: event.target.value,
    }); //đây chỉ lưu giá trị nhé
  }
  onHandleChangeDeadline(event) {
    this.setState({
      deadline: event.target.value,
    }); //đây chỉ lưu giá trị nhé
  }
  onHandleChangeDescription(event) {
    this.setState({
      description: event.target.value,
    }); //đây chỉ lưu giá trị nhé
  }

  render() {
    // const { theWork } = this.props;
    const { dataSubmit, editData } = this.props;
    const { lastItemId, title, deadline, description } = editData;

    return (
      <div>
        <div className="formTask">
          <div className="formTask-top">
            <p className="formTask-top__title">Form Task</p>
          </div>
          <div className="formTask-main">
            <FormGroup className="formTask-main__input" row>
              <Col sm={10}>
                <Input
                  className="formTask-main__input__box"
                  id="title"
                  name="title"
                  type="text"
                  placeholder="title"
                  value={lastItemId ? title : this.state.title}
                  onChange={(event) => this.onHandleChangetitle(event)}
                />
              </Col>
            </FormGroup>
            <FormGroup className="formTask-main__input" row>
              <Col sm={10}>
                <Input
                  className="formTask-main__input__box"
                  id="deadline"
                  name="deadline"
                  type="date"
                  placeholder="Deadline"
                  value={lastItemId ? deadline : this.state.deadline}
                  onChange={(event) => this.onHandleChangeDeadline(event)}
                />
              </Col>
            </FormGroup>
            <FormGroup className="formTask-main__input" row>
              <Col sm={10}>
                <Input
                  className="formTask-main__input__box"
                  id="description"
                  name="description"
                  type="text"
                  placeholder="Description"
                  value={lastItemId ? description : this.state.description}
                  onChange={(event) => this.onHandleChangeDescription(event)}
                />
              </Col>
            </FormGroup>

            <Col className="formTask-main__button" sm={10}>
              <button
                onClick={() =>
                  dataSubmit(
                    this.state.title,
                    this.state.deadline,
                    this.state.description
                  )
                }
                type="submit"
                className="formTask-main__button__save"
              >
                Save
              </button>
              <button className="formTask-main__button__edit">Edit</button>
              <button className="formTask-main__button__delete">Delete</button>
            </Col>
          </div>
        </div>
      </div>
    );
  }
}

export default FormTask;
