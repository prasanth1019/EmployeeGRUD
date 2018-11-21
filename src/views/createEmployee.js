import React, { Component } from "react";
import { connect } from 'react-redux'
import { Form, FormGroup, Button, Alert } from 'react-bootstrap';
import { getCreateEmployee, createEmployee } from '../actions';
import { store } from '../store';

const INITIAL_STATE = {
  'Name': '',
  'City': '',
  'Email':'',
  'formState': true,
  'allowAlert': false
}

const formParam = {
  width: "35%",
  margin: "0 auto",
  border: "5px solid dodgerblue"
}

const btnStyle = {
  border: "1px solid #ddd",
  borderRadius: "0px"
}

const borderSty = {
  border: "1px solid #FF0000",
}

class CreateEmp extends Component {

  constructor(props){
    super(props)
    this.state = INITIAL_STATE;
  }

  handleNameChange = (e) => {
      this.setState({ Name: e.target.value });
    }

  handleCityChange = (e) => {
      this.setState({ City: e.target.value });
    }

  handleEmailChange = (e) => {
      this.setState({ Email: e.target.value });
    }

  entrolForm = (e) => {
      store.dispatch(getCreateEmployee('createEmp', this.state))
      .then((results) =>{
          store.dispatch(createEmployee(results))
          this.props.history.push('/readEmp')
      } )
    }

  cancelForm = (e) => {
      // this.setState({ 'Name': '', 'City': '', 'Email':'', 'formState': true });
      this.state.name = ""
    }

  getValidationState = () => {
      const rE = new RegExp(/^[a-zA-Z0-9#*_!]+\@[a-z]+\.[a-z]{2,3}$/);
      this.state.formState = (rE.test(this.state.Email)) ? false : true;
    }

      render() {
          return (
            <Form style={formParam}>
              <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
                  <br/>
                  <input type = "text"
                  name = "Name"
                  className = "form-control"
                  placeholder = "Enter name"
                  value = { this.state.name }
                  onChange = { this.handleNameChange }
                  autoFocus / >
                  <br/>
                  <input type = "text"
                  name = "City"
                  className = "form-control"
                  placeholder = "Enter City"
                  value = { this.state.city }
                  onChange = { this.handleCityChange }
                  autoFocus / >
                  <br/>
                  <input type = "text"
                  name = "Email"
                  value = { this.state.email }
                  className = "form-control"
                  placeholder = "Enter Email"
                  onChange = { this.handleEmailChange }
                  autoFocus / >
                  <br/>
                    {'\u00A0'}{'\u00A0'}{'\u00A0'}
                    <Button style={btnStyle} onClick={(event) => this.entrolForm()} disabled = { this.state.formState } > Entrol </Button>
                    {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                    <Button style={btnStyle} onClick={this.cancelForm} >Cancel</Button>
              </FormGroup>
              {this.state.allowAlert ? <Alert bsStyle="success" > <span>Hi! Record Inserted Successfully!</span> </Alert> : null }
            </Form>

          )
    }
}

const mapStateToProps = function(state){
  return {
    City: state.City,
    Name: state.Name
  }
}

export default connect(mapStateToProps)(CreateEmp)
