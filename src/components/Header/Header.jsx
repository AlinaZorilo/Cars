import React from "react";
import InputController from "../../containers/Input";
import styled from "styled-components";

const Header = styled(props => {
  return (
    <header className={props.className}>
      <h3>Проверка авто по номерному знаку</h3>
      <InputController />
    </header>
  );
})`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  background: blue;
  color: white;
  padding: 20px 50px;
  box-sizing: border-box;
  h3 {
    width: 100%;
    display: table;
    margin: 0 auto;
  }
`;
export default Header;
