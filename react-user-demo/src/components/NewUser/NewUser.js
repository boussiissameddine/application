import React, {Component} from 'react';
import './NewUser.css';
import axios from 'axios';

class NewUser extends Component {
    state = {
        tcId :'' ,
        email:'',
        phone: '',
        password: '',
        address: '',
    };

    componentDidMount() {

    }

    render() {
        return ( <div className="NewUser">
        <h5>{this.props.text}</h5>
        <form className="Form">
            <label>TC ID
                <input type="number" 
                minlength="11" 
                name="tcId" 
                pattern="[0-9]{11}" 
                required placeholder="11111111111" 
                value={this.state.tcId}/></label>
            <label>Email
                <input type="email"
                 name="email" required 
                 placeholder="email" 
                 value={this.state.email}/></label>
            <label>Phone Number
                <input type="tel" 
                name="phone" required 
                placeholder="555-555-5555" 
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                value={this.state.phone}/></label>
            <label>Password
                <input type="password" 
                name="password" 
                minlength="8" required
                value={this.state.password}
                placeholder="create password" 
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                title="Must contain one number and one uppercase and lowercase letter, and at least 8characters"/></label>
            <label>Adress
                <input type="text" 
                name="address" required
                value={this.state.address}/></label>
            <input className="SaveButton" type="submit" value={this.props.buttonText} onClick={this.props.clicked} />
        </form>
    </div>
        );
    }
}
export default NewUser;