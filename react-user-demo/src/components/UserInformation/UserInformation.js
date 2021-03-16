import React from 'react';
import './UserInformation.css';

const UserInformation = () => {
    return (
        <tr className="UserInformation">
                <td>111111111</td>
                <td>test@test.com</td>
                <td>5055050550</td>
                <td>Güzel sokak Hatay/Turkey</td>
                <button className="buttonStyle">Edit</button>
                <button className="buttonStyle">Delete</button>
        </tr>
    );
};

export default UserInformation;