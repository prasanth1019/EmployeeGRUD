import React, { Component } from "react";
import { connect } from 'react-redux'
import { Form, Radio, Button, Table, Glyphicon } from 'react-bootstrap';
import { getPostMethods, readEmployee, getDeleteRecord } from '../actions';
import { store } from '../store';

const INITIAL_STATE = {
  "Id": 0,
  "formState": true
}

const deleteContainer = {
  "width": "70%",
  "margin": "10px auto"
}

class DeleteEmployee extends Component {

  constructor(props) {
    super(props)
    this.state = INITIAL_STATE
    store.dispatch(getPostMethods('readEmp'))
    .then((results) =>
    store.dispatch(readEmployee(results["posts"])))
  }

  getDelete = (e) => {
      console.log(this.state);
      store.dispatch(getDeleteRecord('deleteEmp', this.state))
    .then((results) =>
      this.props.history.push('/readEmp'))
  }

  onRadioChanged = (e) => {
    if (e.target.value.length == 3) {
      this.setState({"formState": false});
      this.setState({"Id": e.target.value});
    }
  }

  render() {
    return(
      <div style={deleteContainer}>
        <Button onClick={this.getDelete} disabled={this.state.formState} >Delete</Button>
        <br/>
        <br/>
        <Table striped bordered condensed hover>
          <thead>
            <tr><th>RB</th><th>ID</th><th>City</th><th>Name</th><th>Email</th></tr>
          </thead>
              <tbody>
              {this.props.UserData.map( (item, index) => {
                  return<tr key={item.Id}><td><input type="radio" name="site_name" value={item.Id || ""} onChange={this.onRadioChanged}/></td><td>{item.Id}</td><td>{item.City}</td><td>{item.Name}</td><td>{item.Email}</td></tr>
              })}
              </tbody>
        </Table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      UserData: state.userData
    }
}

export default connect (mapStateToProps)(DeleteEmployee)
