import React from 'react';
import './UserInformation.css';

const UserInformation = (props) => {
    const password = props.password;
    let pass = props.password.split('').map(k => {
       return k='*';
    });

    return (
        <tbody>
        <tr className="UserInformation">
                <td>{props.tcId}</td>
                <td>{props.email}</td>
                <td>{pass}</td>
                <td>{props.phoneNumber}</td>
                <td>{props.address}</td>
                <button className="buttonStyle">Edit</button>
                <button className="buttonStyle">Delete</button>
        </tr>
        </tbody>
    );
};

export default UserInformation;