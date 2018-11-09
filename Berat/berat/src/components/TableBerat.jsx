import React from 'react';
import { Table, Button } from 'reactstrap';
import { Link } from "react-router-dom";
import axios from 'axios'
import { connect }from 'react-redux'
import { getAllBerat } from '../store/actions/getAllBerat'
import { getTotal } from '../store/actions/getTotal'

class TableBerat extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            Max: 0,
            Min: 0,
            Perbedaan: 0,
            isLoaded: false
        }
    }

    deleteBerat = (id) => {
        axios({
            method: 'DELETE',
            url: `http://localhost:4000/berat/delete/${id}`
        })
        .then((result) => {
            this.props.getAllData()
            this.props.getTotalData()
        })
        .catch((err) => {
            console.log(err)
        });
    }

  render() {
    return (
        
        <div className = "container">
            <Table>
            <thead>
                <tr>
                <th>Tanggal</th>
                <th>Max</th>
                <th>Min</th>
                <th>Perbedaan</th>
                <th>Actions</th>
                </tr>
            </thead>
                {
                    this.props.data.map((berat, index) => (
                        <tbody key = {berat._id}>
                            <tr>
                            <td>{berat.tanggal}</td>
                            <td>{berat.max}</td>
                            <td>{berat.min}</td>
                            <td>{Number(berat.max) - Number(berat.min)}</td>
                            <td> <Link to={'/detail/'+ berat._id} data={berat}><Button>Show</Button></Link> <Link to={'/update/'+ berat._id}><Button>Update</Button></Link> <Button onClick={ () => this.deleteBerat(berat._id)}>Delete</Button> </td>
                            </tr>
                        </tbody>
                        
                    ))
                }
             <tbody>
                <tr>
                <td>Rata-Rata</td>
                <td>{(this.props.total.max / this.props.total.dataLength).toFixed(1)}</td>
                <td>{(this.props.total.min / this.props.total.dataLength).toFixed(1)}</td>
                <td>{(this.props.total.perbedaan / this.props.total.dataLength).toFixed(1)}</td>
                </tr>
            </tbody>
            {/* <h1>{JSON.stringify(this.props.total)}</h1> */}
         </Table>  
        </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAllData: () => dispatch(getAllBerat()),
        getTotalData: () => dispatch(getTotal())
    };
};

export default connect(null, mapDispatchToProps)(TableBerat)