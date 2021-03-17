import React from 'react';
import './NewUser.css';

const NewUser = (props) => {
    return (
        <div className="NewUser">
            <h5>{props.text}</h5>
            <form className="Form">
                <label>TC ID
                    <input type="number" minlength="11" name="tcId" pattern="[0-9]{11}" required placeholder="11111111111"/></label>
                <label>Email
                    <input type="email" name="email" required placeholder="email"/></label>
                <label>Phone Number
                    <input type="tel" name="phone" required placeholder="555-555-5555" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/></label>
                <label>Password
                    <input type="password" name="password" minlength="8" required placeholder="create password" 
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain one number and one uppercase and lowercase letter, and at least 8characters"/></label>
                    <input className="SaveButton" type="submit" value="Add" />
            </form>
        </div>
    );
};

export default NewUser;