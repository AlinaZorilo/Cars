import React from "react";
import styled from "styled-components";

const Table = styled(props => {
  const car = props.car;

  return (
    <table className={props.className}>
      <tbody>
        <tr>
          <td>Владелец:</td>
          <td>{car.owner}</td>
        </tr>
        <tr>
          <td>Год производства:</td>
          <td>{car.year}</td>
        </tr>
        <tr>
          <td>Колличество владельцев:</td>
          <td>{car.crashesCount}</td>
        </tr>
        <tr>
          <td>Факты ДДП:</td>
          <td>{car.ownersCount}</td>
        </tr>
      </tbody>
    </table>
  );
})`
  max-width: 1200px;
  width: 100%;
  margin-top: 120px;
  border-collapse: collapse;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  tr td {
    border: 1px solid #ccc;
    width: 50%;
    padding: 5px;
    box-sizing: border-box;
    border-left: none;
    border-right: none;
  }
`;

export default Table;
