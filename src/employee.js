import React from "react";
import {Navbar} from 'react-bootstrap';
// import EmpDashboard from './views/employeeDashboard';
import { Link } from "react-router-dom"
// import { store } from "./store";

const ParentCont = {
  width: '50%',
  margin: '0 auto',
  border: '1px solid red',
  background: '#333',
  color: '#fff'
}
const navBg = {
    background: 'black'
}

const Employee = ({initialData}) => {
  return (
    <div className="Emp">
    <Navbar style={navBg}>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/home"> Employee Database Connection </Link>
        </Navbar.Brand>
    </Navbar.Header>
        { <Link to="/employeeOperation"> CRUD </Link> }
    </Navbar>
    </div>
    )
}

export default Employee
