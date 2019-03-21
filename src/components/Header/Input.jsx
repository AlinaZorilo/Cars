import React from "react";
import styled from "styled-components";

const Input = styled(props => {
  return (
    <div className={props.className}>
      <form onSubmit={props.onSubmit}>
        <input
          type="text"
          required
          value={props.value}
          onChange={props.onChange}
          placeholder="Номерной знак авто"
          pattern="[A-ZА-Я]{2}[0-9]{4}[A-ZА-Я]{2}"
          minLength="8"
          maxLength="8"
        />
      </form>
    </div>
  );
})`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 20px;
  form {
    width: 100%;
    text-align: center;
    display: flex;
    input {
      width: 100%;
      padding: 15px;
      &:placeholder {
        font-size: 14px;
      }
    }
  }
`;

export default Input;
