import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeDetails } from '../actions';

class EmployeeList extends Component {
    constructor(props) {
        super(props);
          this.state = {
           
          }
        }
    
    render() {
        {console.log("Employee Details", this.props.employeedetails);}
        return(
            <div className="mb-5">
                <h1>Employee Details</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Employee ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.employeedetails.user.map((employeeDetails, index) => {
                        return(
                            <tr key={index}>
                                <th scope="row">{employeeDetails.id}</th>
                                <td>{employeeDetails.name}</td>
                                <td>{employeeDetails.age}</td>
                                <td>{employeeDetails.gender}</td>
                                <td>{employeeDetails.email}</td>
                                <td>{employeeDetails.phoneNo}</td>
                            </tr>                        
                        )})}
                        
                    </tbody>
                </table>
            </div>
        )
    }   
}

const mapStateToProps = ({ logindetails }) => {
  const { employeedetails } = logindetails;
	return { employeedetails };
};

export default connect(mapStateToProps, { employeeDetails } )(EmployeeList);

