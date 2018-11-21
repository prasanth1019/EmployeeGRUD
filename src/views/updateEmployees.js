import React, { Component } from "react";
import { connect } from 'react-redux'
import { Form, FormGroup, Button, Table } from 'react-bootstrap';
import { getUpdateEmployee, updateEmployee, updateEmployeeResponseById, getUpdateRec } from '../actions';
import { store } from '../store';


const INITIAL_STATE = {
  "Id": 0,
  'Name': '',
  'City': '',
  'Email':'',
  'formState': false,
  'allowAlert': false,
  'formHide': false
}

const formParam = {
  width: "35%",
  margin: "0 auto",
  border: "5px solid dodgerblue",
  textAlign:"center"
}

const showHideForm = {
  display: "none"
}

const hideShowForm = {
  display: "block"
}

const btnStyle = {
  border: "1px solid #ccc7c7",
  margin: "0 auto"
}

const aliCtr = {
  textAlign: "center"
}

class UpdateEmployees extends Component {

  constructor(props) {
    super(props)
    this.state = INITIAL_STATE;
  }

  handleIdChange = (e) => {
    this.setState({Id: e.target.value})
    console.log(this.state);
    // this.state.formState = (this.state.Id.length >= 3) ? false : true
  }

  getRecords = function() {
      if (this.state.Id.length >= 3) {
        store.dispatch(getUpdateEmployee('updateEmp', this.state))
        .then((results) => {
            store.dispatch(updateEmployee(results["posts"]))
        })
      }
  }

  getUpdateRecords = (e) => {
    var temp = {"Id": Number(this.state.Id), "Name": this.state.Name, "City": this.state.City, "Email": this.state.Email }
    console.log(temp)
    store.dispatch(getUpdateRec('updateRec', temp))
    .then((results) => {
      this.props.history.push('/readEmp')
    })
  }

  showUpdateForm = function(item) {
      this.setState({"formHide": true})
      this.setState({"Name": item[0]["Name"]})
      this.setState({"City": item[0]["City"]})
      this.setState({"Email": item[0]["Email"]})
      store.dispatch(updateEmployeeResponseById(item))
      console.log(this.state.Name)
  }

  handleNameChange = (e) => {
      this.setState({ Name: e.target.value })
    }

  handleCityChange = (e) => {
      this.setState({ City: e.target.value })
    }

  handleEmailChange = (e) => {
      this.setState({ Email: e.target.value })
    }

  handleUpdateIdChange = (e) => {
      this.setState({Id: e.target.value})
    }

  render() {
    return (
      <div>
      <Form style={formParam} >
        <span style={aliCtr}><h3>Update Record</h3></span><br/>
        <FormGroup controlId="formUpdateText" >
          <input
          type="text"
          name="ID"
          className="form-control"
          placeholder="Enter ID to update record"
          value={this.state.Id}
          onChange={this.handleIdChange}
          autoFocus />
          <br/>
          <Button style={btnStyle} onClick={(event) => this.getRecords()} disabled = {this.state.formState} >Get the Rec</Button>
          </FormGroup>
        </Form>
        <Table striped bordered condensed hover style={formParam} >
          <thead>
            <tr><th>ID</th><th>City</th><th>Name</th><th>Email</th></tr>
          </thead>
              <tbody>
              {this.props.userData.map((item, index) => {
                  return <tr onClick={(event) => this.showUpdateForm([item])} key={item.Id}><td>{item.Id}</td><td>{item.City}</td><td>{item.Name}</td><td>{item.Email}</td></tr>
              })}
              </tbody>
        </Table>
        <Form style={(this.state.formHide) ? hideShowForm : showHideForm }>
          <FormGroup controlId="updateForm" style={formParam}>
            <input
            type="text"
            name="ID"
            className="form-control"
            placeholder="Enter ID to update record"
            value={this.state.Id}
            onChange={this.handleUpdateIdChange}
            autoFocus />
            <br/>
            <input
            type="text"
            name="Name"
            className="form-control"
            placeholder="Enter Name to update record"
            value={this.state.Name}
            onChange={this.handleNameChange}
            autoFocus />
            <br/>
            <input
            type="text"
            name="City"
            className="form-control"
            placeholder="Enter City to update record"
            value={this.state.City}
            onChange={this.handleCityChange}
            autoFocus />
            <br/>
            <input
            type="text"
            name="Email"
            className="form-control"
            placeholder="Enter Email to update record"
            value={this.state.Email}
            onChange={this.handleEmailChange}
            autoFocus />
            <br/>
            <Button style={btnStyle} onClick={(event) => this.getUpdateRecords()} >Update</Button>
          </FormGroup>
        </Form>
        </div>
          )
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.userData
  }
}

export default connect (mapStateToProps)(UpdateEmployees)
