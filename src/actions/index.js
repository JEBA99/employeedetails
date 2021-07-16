import { LOGIN_CREDENTIALS } from "./types.js"
import { EMPLOYEE_DETAILS } from "./types.js"

export const loginCredentials = (credentials)=> ({
    type: LOGIN_CREDENTIALS,
    payload: credentials
});

export const employeeDetails = (employeedetails)=> ({
    type: EMPLOYEE_DETAILS,
    payload: employeedetails
});