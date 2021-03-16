import React from 'react';
import User from '../../components/User/User';
import './Users.css';

const Users = () => {
    return (
        <div>
            <h1>User CRUD Operations</h1>
            <section className="Users">
                <User />
            </section>
            
        </div>
    );
};

export default Users;