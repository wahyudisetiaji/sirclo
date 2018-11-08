import React from 'react';
import { Table, Button } from 'reactstrap';
import { Link } from "react-router-dom";

export default class Example extends React.Component {
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Tanggal</th>
            <th>Max</th>
            <th>Min</th>
            <th>Perbedaan</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>11/11/2018</td>
            <td>31</td>
            <td>30</td>
            <td>1</td>
            <td> <Link to="/detail/1"><Button>Show</Button></Link> <Link to="/update/1"><Button>Update</Button></Link> <Button>Delete</Button> </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>11/11/2018</td>
            <td>32</td>
            <td>30</td>
            <td>2</td>
            <td> <Link to="/detail/2"><Button>Show</Button></Link> <Link to="/update/2"><Button>Update</Button></Link> <Button>Delete</Button> </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>11/11/2018</td>
            <td>32</td>
            <td>30</td>
            <td>3</td>
            <td> <Link to="/detail/3"><Button>Show</Button></Link> <Link to="/update/2"><Button>Update</Button></Link> <Button>Delete</Button> </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}