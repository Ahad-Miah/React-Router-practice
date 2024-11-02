import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const User = ({user}) => {
    const {name,id,email}=user;
    const navigate=useNavigate();

    const handleDetails=()=>{
        navigate(`/user/${id}`);
    }
    return (
        <div className='border border-red-400 p-3 rounded-lg '>
            <h1>Name: {name}</h1>
            <h2>Id: {id}</h2>
            <h2>Email: {email}</h2>
            {/* <Link to={`/user/${id}`}>Details</Link> */}
            <button onClick={handleDetails} className='btn'>Details</button>
        </div>
    );
};

export default User;