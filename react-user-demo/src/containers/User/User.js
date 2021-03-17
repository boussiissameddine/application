import axios from 'axios';
import React, {Component} from 'react';
import NewUser from '../../components/NewUser/NewUser';
import UserInformation from '../../components/UserInformation/UserInformation';
import './User.css';

class User extends Component {
    state = {
        userInformations: [],
        editable: false
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/v1/users')
        .then(response => {
            this.setState({userInformations: response.data});
        });
    }

    editClickedHandler = (id) => {
        console.log(id, 'want to edit!');
        this.setState({editable: true});
    }

    deleteClickedHandler = (id) => {
        console.log(id, 'want to be deleted!');
    }

    addNewUserClickHandler = () => {
        console.log("add new User Clicked!");
    }

    saveEditedUserClickHandler = () => {
        console.log("save edited User Clicked!");
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
                    buttonText="Add"
                    clicked={this.addNewUserClickHandler}/>
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
           {this.state.editable ? <NewUser 
                    text="Edit Selected User"
                    tcId="11111"
                    buttonText="Save"
                    clicked={this.saveEditedUserClickHandler} /> : null}
            </div>
        );
    }
}

export default User;