import React, { Component } from 'react'
import FormUpdate from '../components/FormUpdate'
import { connect }from 'react-redux'
import { getOneBerat } from '../store/actions/getOneBerat'

class Create extends Component {

    componentDidMount () {
        let idBerat = this.props.match.params.id
        this.props.getOneData(idBerat)
    }

    render() {
        return (
        <div className="container">
            <h3>Update Berat</h3>
            <FormUpdate></FormUpdate>
        </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isLoading: state.getOneBerat.isLoading,
        dataOneBerat: state.getOneBerat.data
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getOneData: (id) => dispatch(getOneBerat(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Create)
