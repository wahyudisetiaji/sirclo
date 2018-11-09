import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from "react-router-dom";
import { connect }from 'react-redux'
import { getAllBerat } from '../store/actions/getAllBerat'
import axios from 'axios'

class FormCreate extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            tanggal: '',
            max: 0,
            min: 0,
            isLoaded: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.createBerat = this.createBerat.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    createBerat = (event) => {
        event.preventDefault()
        axios({
            method: 'POST',
            url: `http://localhost:4000/berat/create`,
            data: {
                tanggal: this.state.tanggal,
                max: this.state.max,
                min: this.state.min
            }
        })
        .then((result) => {
            this.props.getAllData()
            this.setState({
                tanggal: '',
                max: 0,
                min: 0
            })
        })
        .catch((err) => {
            console.log(err)
        });
    }

  render() {
    return (
      <Form onSubmit={this.createBerat}>
        <FormGroup>
          <Label for="exampleEmail">Tanggal</Label>
          <Input type="date" name="tanggal" id="exampleDate" value={this.state.tanggal} placeholder="Date" onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleMax">Max</Label>
          <Input type="number" name="max" id="exampleMin" value={this.state.max} placeholder="Max" onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleMax">Min</Label>
          <Input type="number" name="min" id="exampleMin" value={this.state.min} placeholder="Min" onChange={this.handleChange}/>
        </FormGroup>
        <Button>Submit</Button> <Link to="/"><Button>Back</Button></Link>
      </Form>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAllData: () => dispatch(getAllBerat()),
    };
};

export default connect(null, mapDispatchToProps)(FormCreate)