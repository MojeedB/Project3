import axios from 'axios';
import { useState, useEffect } from 'react';
import Loading from '../loading/Loading';
import Employee from "./Employee";

function EmployeeList() {
    const [employeeData, setEmployeeData] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    useEffect(getEmployeeList, []);

    function getEmployeeList() {
        axios.get('https://statenweb.mockable.io/employees').then(function (res) {
            setEmployeeData(res.data);
        });
    }

    function getEmployeeId(id) {
        setSelectedEmployee(id);
    }

    if (employeeData.length === 0) {
        return <Loading />
    }

    if (selectedEmployee) {
        return <div className=''>
            <div className='text-center d-flex justify-content-center'>
                <Employee selectedEmployee={selectedEmployee} />
            </div>
            <div className='text-center'>
                <button className='btn-primary btn-lg' onClick={() => setSelectedEmployee(null)}>Reset</button>
            </div>
        </div>
    }

    return <div className='mx-5 px-5 text-center'>
        <h1 className='py-5 text-success'>Select an employee to view their information</h1>
        <div className='list'>
            {employeeData.map((employee) => <p key={employee.id}>
                <button className='btn-primary btn-lg' onClick={() => getEmployeeId(employee.id)}>{employee.name}</button>
            </p>)}
        </div>
    </div>


}

export default EmployeeList;