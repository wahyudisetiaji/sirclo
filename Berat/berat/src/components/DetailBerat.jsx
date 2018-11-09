import React from 'react';
import { Table, Button } from 'reactstrap';
import { Link } from "react-router-dom";
import { connect }from 'react-redux'
class DetailTable extends React.Component {

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
            <td>{this.props.dataOneBerat.tanggal}</td>
            <td>{this.props.dataOneBerat.max}</td>
            <td>{this.props.dataOneBerat.min}</td>
            <td>{this.props.dataOneBerat.max - this.props.dataOneBerat.min}</td>
          </tr>
        </tbody>
        <Link to="/"><Button>Back</Button></Link>
      </Table>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isLoading: state.getOneBerat.isLoading,
        dataOneBerat: state.getOneBerat.data
    };
};

export default connect(mapStateToProps, null)(DetailTable)