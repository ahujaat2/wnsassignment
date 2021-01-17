import React, {useEffect, useState} from 'react'
import '../styles/Table.css'

function Table(props) {

    let [employees, setEmployees] = useState([])

    useEffect(() => {
        setEmployees(props.employees)
    }, [props.employees])

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Employee Name</th>
                        <th>Employee Salary</th>
                        <th>Employee Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((employee) => <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.employee_name}</td>
                            <td>{employee.employee_salary}</td>
                            <td>{employee.employee_age}</td>
                        </tr>
                        )}
                </tbody>
            </table>
        </div>
    )
}

export default Table
