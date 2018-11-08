import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Tanggal</Label>
          <Input type="date" name="date" id="exampleDate" placeholder="Date" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleMax">Max</Label>
          <Input type="text" name="Min" id="exampleMin" placeholder="Max" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleMax">Min</Label>
          <Input type="text" name="Min" id="exampleMin" placeholder="Min" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}