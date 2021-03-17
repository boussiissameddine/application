import React, {Component} from 'react';
import NewUser from '../../components/NewUser/NewUser';
import User from '../User/User';
import './Users.css';

class Users extends Component {
    render() {
        return (
            <div>
                <section>
                    <NewUser />
                </section>
                <section className="Users">
                    <User />
                </section>
            </div>
        );
    }
}

export default Users;