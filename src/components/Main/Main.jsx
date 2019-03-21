import React from "react";
import styled from "styled-components";

const Main = styled(props => (
  <main className={props.className}>{props.children}</main>
))`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  align-items: ${props => props.position || "center"};
  height: calc(100vh - 134px);
  color: grey;
`;

export default Main;
