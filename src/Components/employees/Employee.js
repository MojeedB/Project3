import axios from 'axios';
import { useState, useEffect } from 'react';
import Loading from '../loading/Loading';

function Employee({ selectedEmployee }) {

    const [selectedEmployeeData, setSelectedEmployeeData] = useState(null);

    useEffect(() => {
        axios.get(`http://statenweb.mockable.io/employee/${selectedEmployee}`).then((res) => setSelectedEmployeeData(res.data));
    }, [selectedEmployee]);

    if (!selectedEmployeeData) {
        return <Loading />;
    }

    const {
        name,
        startDate,
        role,
        department,
        photo
    } = selectedEmployeeData;

    return <div className='text-center my-5 d-flex justify-content-center'>
        <div className='card' style={{ width: '18rem' }} >
            <img className='card-img-top' src={photo} alt={name} />
            <div className='card-body'>
                <h4 className='card-header'>{name}</h4>
                <h5 className='card-subtitle my-2'>{role}</h5>
                <p className='card-text'>{department}</p>
                <p className='card-text'>{startDate}</p>
            </div>
        </div>
    </div>
}

export default Employee;