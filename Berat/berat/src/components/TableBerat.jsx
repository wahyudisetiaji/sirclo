import React from 'react';
import { Table, Button } from 'reactstrap';
import { Link } from "react-router-dom";
import axios from 'axios'
import { connect }from 'react-redux'
import { getAllBerat } from '../store/actions/getAllBerat'
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
        })
        .catch((err) => {
            console.log(err)
        });
    }

   total = () => {

        this.props.data.forEach(element => {
            this.state.Max += Number(element.max)
            this.state.Min += Number(element.min)
            this.state.Perbedaan += Number(element.perbedaan)
        });
        
   }

  render() {
    this.total()
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
                    this.props.data.length === 0 ? <img src="http://www.andrew.cmu.edu/user/okarabas/w/wp-content/plugins/wp-1-slider/images/loader/loading2.gif" className="App-logo" alt="loading" />:  
                    (this.props.data.map((berat, index) => (
                        <tbody key = {berat._id}>
                            <tr>
                            <td>{berat.tanggal}</td>
                            <td>{berat.max}</td>
                            <td>{berat.min}</td>
                            <td>{berat.max - berat.min}</td>
                            <td> <Link to={'/detail/'+ berat._id} data={berat}><Button>Show</Button></Link> <Link to="/update/1"><Button>Update</Button></Link> <Button onClick={ () =>this.deleteBerat(berat._id)}>Delete</Button> </td>
                            </tr>
                        </tbody>
                        
                    )))
                }
             <tbody>
                <tr>
                <td>Rata-Rata</td>
                <td>{(this.state.Max / this.props.data.length).toFixed(1)}</td>
                <td>{(this.state.Min / this.props.data.length).toFixed(1)}</td>
                <td>{(this.state.Perbedaan / this.props.data.length).toFixed(1)}</td>
                </tr>
            </tbody>
         </Table>  
        </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAllData: () => dispatch(getAllBerat()),
    };
};

export default connect(null, mapDispatchToProps)(TableBerat)