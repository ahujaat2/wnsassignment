import React, {useEffect, useState} from 'react'
import {Bar} from 'react-chartjs-2'

function Chart(props) {

    let [employees, setEmployees] = useState([])

    useEffect(() => {
        setEmployees(props.employees)
    }, [props.employees])

    const chartData = {
        labels: employees.map(employee => employee.employee_name),
        datasets: [
            {
                label: "Salaries",
                data: employees.map(employee => employee.employee_salary),
                backgroundColor: 'rgb(52, 66, 33)' 
            }
        ]
    }

    return (
        <div className='chart'>
            <Bar 
                data={chartData}
                options={{
                    title: {
                        text: 'Employee Salaries',
                        display: true,
                        fontSize: 25
                    }
                }}
            />
        </div>
    )
}

export default Chart
