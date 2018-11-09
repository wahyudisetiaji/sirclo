import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from "react-router-dom";
import { connect }from 'react-redux'
import axios from 'axios'

class FormUpdate extends React.Component {

  constructor(props){
    super(props)
    this.state = {
        tanggal: '',
        max: 0,
        min: 0,
        isLoaded: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.updateBerat = this.updateBerat.bind(this)
  }

  handleChange(event) {
    this.setState({
        [event.target.name] : event.target.value
    })
  }

  updateBerat = (event) => {
      event.preventDefault()
      axios({
          method: 'PUT',
          url: `http://localhost:4000/berat/update/${this.props.dataOneBerat._id}`,
          data: {
              tanggal: this.state.tanggal,
              max: this.state.max,
              min: this.state.min
          }
      })
      .then((result) => {
          this.props.getAllData()
      })
      .catch((err) => {
          console.log(err)
      });
  }

  render() {
    return (
      <Form onSubmit={this.updateBerat}>
      <FormGroup>
        <Label for="exampleEmail">Tanggal</Label>
        <Input type="date" name="tanggal" id="exampleDate" defaultValue={this.props.dataOneBerat.tanggal} placeholder="Date" onChange={this.handleChange}/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleMax">Max</Label>
        <Input type="text" name="max" id="exampleMin" defaultValue={this.props.dataOneBerat.max} placeholder="Max" onChange={this.handleChange}/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleMax">Min</Label>
        <Input type="text" name="min" id="exampleMin" defaultValue={this.props.dataOneBerat.min} placeholder="Min" onChange={this.handleChange}/>
      </FormGroup>
      <Button>Submit</Button> <Link to="/"><Button>Back</Button></Link>
    </Form>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
      isLoading: state.getOneBerat.isLoading,
      dataOneBerat: state.getOneBerat.data
  };
};

export default connect(mapStateToProps, null)(FormUpdate)