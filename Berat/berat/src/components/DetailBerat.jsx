import React from 'react';
import { Table, Button } from 'reactstrap';
import { Link } from "react-router-dom";

export default class Example extends React.Component {
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>Tanggal</th>
            <th>Max</th>
            <th>Min</th>
            <th>Perbedaan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>11/11/2018</td>
            <td>31</td>
            <td>30</td>
            <td>1</td>
          </tr>
        </tbody>
        <Link to="/"><Button>Back</Button></Link>
      </Table>
    );
  }
}