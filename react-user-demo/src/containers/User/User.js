import axios from 'axios';
import React, {Component} from 'react';
import UserInformation from '../../components/UserInformation/UserInformation';
import './User.css';

class User extends Component {
    state = {
        userInformations: []
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/v1/users')
        .then(response => {
            this.setState({userInformations: response.data});
        });
    }

    render() {
        const users = this.state.userInformations.map(user => {
            return  <UserInformation
                key={user.id}
                tcId = {user.tckn}
                password={user.password}
                phoneNumber={user.gsm}
                email={user.email}
                address={user.address}  />
        });

        return (
            <div className="User">
                <table>
                    <tr className="header">
                        <th>Tc Kimlik</th>
                        <th>E-mail</th>
                        <th>Password</th>
                        <th>Phone Number</th>
                        <th>Adress</th>
                        <th>Actions</th>
                    </tr>
                        {users}
                </table>
            </div>
        );
    }
}

export default User;