import React from 'react';
import User from '../../containers/User/User';
import './Users.css';

const Users = () => {
    return (
        <div>
            <h1>User CRUD Operations</h1>
            <hr />
            <section className="Users">
                <User />
            </section>
            
        </div>
    );
};

export default Users;