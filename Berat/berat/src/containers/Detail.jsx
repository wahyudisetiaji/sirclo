import React, { Component } from 'react'
import { connect }from 'react-redux'
import DetailBerat from '../components/DetailBerat'
import { getOneBerat } from '../store/actions/getOneBerat'

class Home extends Component {

    componentDidMount () {
        let idBerat = this.props.match.params.id
        this.props.getOneData(idBerat)
    }

    render() {
        return (
        <div className="container">
            <DetailBerat></DetailBerat>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)