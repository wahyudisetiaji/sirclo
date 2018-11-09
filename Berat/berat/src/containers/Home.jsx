import React, { Component } from 'react'
import { connect }from 'react-redux'
import { getAllBerat } from '../store/actions/getAllBerat'
import { getTotal } from '../store/actions/getTotal'
import TableBerat from '../components/TableBerat'
class Home extends Component {

    componentDidMount () {
        this.props.getAllData()
        this.props.getTotalData()
    }

    render() {
        return (
        <div className="container">
            <h3>Table Berat</h3>
            <TableBerat data={this.props.dataBerat} total={this.props.dataTotal}></TableBerat>
        </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isLoading: state.getAllBerat.isLoading,
        dataBerat: state.getAllBerat.data,
        dataTotal: state.getTotal.total
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAllData: () => dispatch(getAllBerat()),
        getTotalData: () => dispatch(getTotal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)

