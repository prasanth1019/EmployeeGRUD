import React, { Component } from "react";
import { connect } from 'react-redux'

import { Table } from 'react-bootstrap';
import { getPostMethods, readEmployee } from '../actions';
import { store } from '../store';

const INITIAL_STATE = { 'userData': [{ Id: "", Name: "", City: "" }] }

class ReadEmp extends Component {

  constructor(props) {
    super(props)
    this.state = INITIAL_STATE;
    store.dispatch(getPostMethods('readEmp'))
    .then((results) =>
      store.dispatch(readEmployee(results["posts"]))
     )
  }

  componenetDidMount() {
    console.log('Getting employees from DB...');
  }

  render() {
    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr><th>ID</th><th>City</th><th>Name</th><th>Email</th></tr>
        </thead>
            <tbody>
            {this.props.UserData.map( (item, index) => {
                return<tr key={item.Id}><td>{item.Id}</td><td>{item.City}</td><td>{item.Name}</td><td>{item.Email}</td></tr>
            })}
            </tbody>
      </Table>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    UserData: state.userData
  }
}

export default connect(mapStateToProps)(ReadEmp)
