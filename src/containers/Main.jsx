import React, { Component } from "react";
import Main from "../components/Main/Main";
import Table from "../components/Table";
import { connect } from "react-redux";

class MainController extends Component {
  render() {
    if (this.props.loader) {
      return <Main>Загрузка...</Main>;
    } else if (this.props.error) {
      return <Main>Неправильный номер автомобиля</Main>;
    } else if (this.props.car) {
      return (
        <Main position="flex-start">
          <Table car={this.props.car} />
        </Main>
      );
    }

    return (
      <Main>
        Введите номерной знак автомобиля (например АА9999AI) и нажмите Enter
      </Main>
    );
  }
}

function mapStateToProps({ Cars }, props) {
  return {
    ...props,
    ...Cars
  };
}

export default connect(mapStateToProps)(MainController);
