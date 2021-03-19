import React from 'react';
import './UserInformation.css';

const UserInformation = (props) => {
    return (
        <tbody>
        <tr className="UserInformation">
                <td>{props.tcId}</td>
                <td>{props.email}</td>
                <td>{props.password}</td>
                <td>{props.phoneNumber}</td>
                <td>{props.address}</td>
                <button onClick={props.editClicked} className="buttonStyle">Edit</button>
                <button onClick={props.deleteClicked} className="buttonStyle">Delete</button>
        </tr>
        </tbody>
    );
};

export default UserInformation;