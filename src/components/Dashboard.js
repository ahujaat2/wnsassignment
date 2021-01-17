import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import '../styles/Dashboard.css'
import Table from './Table'
import Chart from './Chart'

function Dashboard() {

    const [employees, setEmployees] = useState([])
    const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem('username'))

    useEffect(() => {
        fetch('http://dummy.restapiexample.com/api/v1/employees')
        .then(res => res.json())
        .then(res => setEmployees(res.data))
    }, [])

    const handleLogout = () => {
        sessionStorage.removeItem('username')
        setLoggedIn(false)
    }

    if(!loggedIn) {
        return <Redirect to='/' />
    }

    return (
        <Router>
            <div>
                <nav>
                    <h1>Welcome, {sessionStorage.getItem('username')}</h1>
                    <Link className='logout' to='/'>
                        <button onClick={handleLogout}>Log Out</button>
                    </Link>
                </nav>
                <div className='dashboard-container'>
                    <div className='sidebar'>
                        <Link to='/table'>
                            <p>Table</p>
                        </Link>
                        <Link to='/chart'>
                            <p>Chart</p>
                        </Link>
                    </div>
                    <div className='content'>
                        <Switch>
                            <Route exact path='/table' render={(props) => <Table employees={employees}{...props} />}></Route>
                            <Route exact path='/chart' render={(props) => <Chart employees={employees}{...props} />}></Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default Dashboard
