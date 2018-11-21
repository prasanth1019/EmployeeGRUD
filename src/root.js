import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import EmpDashboard from './views/employeeDashboard'
import App from './App'
import CreateEmp from './views/createEmployee'
import ReadEmp from './views/readEmployees'
import UpdateEmployees from './views/updateEmployees'
import DeleteEmployee from './views/deleteEmployee'
import { store } from './store';

const Root = () => (
  <Provider store={store} >
    <Router>
      <div>
        <Route path="/:filter?" component={App} />
        <Route path="/employeeOperation" component={EmpDashboard} />
        <Route path="/createEmp" component={CreateEmp} />
        <Route path="/readEmp" component={ReadEmp} />
        <Route path="/updateEmp" component={UpdateEmployees} />
        <Route path="/deleteEmp" component={DeleteEmployee} />
      </div>
    </Router>
  </Provider>
)


export default Root
