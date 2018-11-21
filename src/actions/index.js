import fetch from 'cross-fetch';

export const createEmployeeData = (payload) => {
  return {
    "type": "CREATE_EMPLOYEE",
    "payload": payload
  }
}

export const readEmployee = (employeeData) => {
    return {
      "type": "READ_EMPLOYEE",
      "payload": employeeData
    }
  }

export const createEmployee = (response) => {
    return {
      "type": "CREATE_EMPLOYEE",
      "payload": response
    }
  }

export const updateEmployee = (response) => {
    return {
      "type": "UPDATE_EMPLOYEE",
      "payload": response
    }
  }

  export const updateEmployeeResponseById = (response) => {
      return {
        "type": "UPDATE_EMPLOYEE_RESPONSE_BY_ID",
        "payload": response
      }
    }

  // export const deleteEmployee = (response) => {
  //     return {
  //       "type": "DELETE_EMPLOYEE",
  //       "payload": response
  //     }
  //   }

function receivePosts(json) {
  return {
    type: "RECEIVE_POSTS",
    posts: json,
    receivedAt: Date.now()
  }
}

function receivePostResponse(json) {
  return {
    type: "RECEIVE_POSTS",
    posts: json,
    receivedAt: Date.now()
  }
}

export function getPostMethods(Url) {
  return function(dispatch) {
  return fetch("http://10.6.14.178:8080/"+Url)
     .then(
       response => response.json(),
       error => console.log('An error occurred.', error))
     .then(json =>
       dispatch(receivePosts(json))
     )
   }
 }

 export function getCreateEmployee(Url, userData) {
   return function(dispatch) {
     return fetch("http://10.6.14.178:8080/"+ Url, { method:'POST', body: JSON.stringify(userData)})
     .then(response => response["status"],
           error => console.log("Error with create employee", error))
     .then(response => dispatch(receivePostResponse(response)))
   }
 }

export function getUpdateEmployee(Url, Id) {
    return function(dispatch) {
      return fetch("http://10.6.14.178:8080/"+ Url, { method:'POST', body: JSON.stringify(Id)})
      .then(response => response.json(),
            error => console.log("Error with create employee", error))
      .then(response => dispatch(receivePostResponse(response)))
    }
}

export function getUpdateRec(Url, rec) {
    return function(dispatch) {
      return fetch("http://10.6.14.178:8080/"+ Url, { method:'POST', body: JSON.stringify(rec)})
      .then(response => response["status"],
            error => console.log("Error with Update employee", error))
      .then(response => dispatch(receivePostResponse(response)))
    }
}

export function getDeleteRecord(Url, record){
  return function(dispatch){
    return fetch("http://10.6.14.178:8080/"+ Url, { method:'POST', body: JSON.stringify(record)})
      .then(response => response["status"],
      error => console.log("Error with delete employee", error))
      .then(response => dispatch(receivePostResponse(response)))
  }
}
