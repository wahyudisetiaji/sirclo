import React, { Component } from 'react'
import { connect }from 'react-redux'
import TableBerat from '../components/TableBerat'
import { getAllBerat } from '../store/actions/getAllBerat'
class Home extends Component {

    componentDidMount () {
        this.props.getAllData()
     }

    render() {
        return (
        <div className="container">
            <h3>Table Berat</h3>
            <TableBerat data={this.props.dataBerat}></TableBerat>
        </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isLoading: state.getAllBerat.isLoading,
        dataBerat: state.getAllBerat.data
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAllData: () => dispatch(getAllBerat()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)

