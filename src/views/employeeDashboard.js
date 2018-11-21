import React from "react";
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom'

const cusPad = {
  padding: '10px 0px'
}

const wellStyles = {
  maxWidth: 400,
  margin: '10px auto 10px'
};

const btnStyle = {
  background: 'black',
  color: 'blue'
}

const EmpDashboard = () => {
  return(
  /* <Grid>
    <Row className="show-grid">
      <Col xs={12} md={12} style={cusPad} >
        <span> Create </span>
      </Col>
      <Col xs={12} md={12} style={cusPad} >
        <span> Update </span>
      </Col>
      <Col xs={12} md={12}  style={cusPad} >
        <span> Read </span>
      </Col>
      <Col xs={12} md={12}  style={cusPad} >
        <span> Delete </span>
      </Col>
    </Row>
  </Grid> */

  <div className="well" style={wellStyles}>
    <Link to="/createEmp">
      <Button bsSize="large" block style={btnStyle}>
        Create
      </Button>
    </Link>
    <Link to="/readEmp">
      <Button bsSize="large" block style={btnStyle}>
        Read
      </Button>
    </Link>
    <Link to="/updateEmp">
      <Button bsSize="large" block style={btnStyle} >
        Update
      </Button>
    </Link>
    <Link to="/deleteEmp">
      <Button bsSize="large" block style={btnStyle} >
        Delete
      </Button>
    </Link>
  </div>
  )
}

export default EmpDashboard
