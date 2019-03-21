import React, { Component } from "react";
import Input from "../components/Header/Input";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { LOAD_DATA } from "../actions/cars";

export default connect(null, mapDispatchToProps)(
  class InputController extends Component {
    state = {
      value: ""
    };

    onSubmit = e => {
      e.preventDefault();

      this.props.LOAD_DATA(this.state.value);
    };

    onChange = e => {
      this.setState({
        value: e.currentTarget.value
      });
    };

    render() {
      return (
        <Input
          value={this.state.value}
          onSubmit={this.onSubmit}
          onChange={this.onChange}
        />
      );
    }
  }
);

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      LOAD_DATA
    },
    dispatch
  );
}
