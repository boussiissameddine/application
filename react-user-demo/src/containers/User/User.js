import axios from 'axios';
import React, {Component} from 'react';
import EditUser from '../../components/EditUser/EditUser';
import NewUser from '../../components/NewUser/NewUser';
import UserInformation from '../../components/UserInformation/UserInformation';
import './User.css';

class User extends Component {
    state = {
        userInformations: [],
        editable: false,
        userId: null,
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/v1/users/')
        .then(response => {
            this.setState({userInformations: response.data});
        })
        .catch(error => {
            console.log(error)
        });
    }

    editClickedHandler = (id) => {
        this.setState({editable: true, userId:id});
    }

    deleteClickedHandler = (id) => {
            axios.delete('http://localhost:8080/api/v1/users/' + id)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error)
            });
    }

    render() {
        const users = this.state.userInformations.map(user => {
            return <UserInformation
                key={user.id}
                tcId = {user.tckn}
                password={user.password}
                phoneNumber={user.gsm}
                email={user.email}
                address={user.address}
                editClicked={() => this.editClickedHandler(user.id)}
                deleteClicked={() => this.deleteClickedHandler(user.id)} />
        });

        return (
            <div>
                <NewUser 
                text="Add New User"
                buttonText="Add" />
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
           {this.state.editable ? <EditUser 
                    text="Edit Selected User"
                    buttonText="Save"
                    userId = {this.state.userId} /> : null}
            </div>
        );
    }
}

export default User;