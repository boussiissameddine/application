import React from 'react';
import UserInformation from '../UserInformation/UserInformation';
import './User.css';

const user = (props) => (
    <div className="User">
        <table>
            <tr>
                <th>Tc Kimlik</th>
                <th>E-mail</th>
                <th>Phone Number</th>
                <th>Adress</th>
                <th>Actions</th>
            </tr>
                <UserInformation /> 
                <UserInformation />
                <UserInformation />
                <UserInformation />
                <UserInformation />
        </table>
    </div>
);

export default user;