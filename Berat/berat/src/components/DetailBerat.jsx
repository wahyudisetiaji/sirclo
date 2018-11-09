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
            <td>{this.props.data.tanggal}</td>
            <td>{this.props.data.max}</td>
            <td>{this.props.data.min}</td>
            <td>{this.props.data.max - this.props.data.min}</td>
          </tr>
        </tbody>
        <Link to="/"><Button>Back</Button></Link>
      </Table>
    );
  }
}