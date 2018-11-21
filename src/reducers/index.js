export default (state, action) => {
  switch (action.type) {
    case "CREATE_EMPLOYEE":
      return {
        ...state
            }
       break;
    case "READ_EMPLOYEE":
      return {
        ...state,
        userData : action.payload
            }
       break;
    case "UPDATE_EMPLOYEE":
      return {
        ...state,
        userData : action.payload
            }
       break;
    case "UPDATE_EMPLOYEE_RESPONSE_BY_ID":
      return {
        ...state,
        userData : action.payload
            }
       break;
    case "DELETE_EMPLOYEE":
      return {
        ...state,
        userData : action.payload
            }
       break;
     default:
  }
  return state;
}
