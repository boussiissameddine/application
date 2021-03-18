import React, {Component} from 'react';
import './NewUser.css';
import axios from 'axios';

class NewUser extends Component {
    state = {
        tcId : '',
        email:'',
        phone:'',
        password: '',
        address: '',
    };

    addNewUserHandler = () => {
        const user = {
            tckn:this.state.tcId,
            email: this.state.email,
            gsm:this.state.phone,
            password: this.state.password,
            address:this.state.address
        };
        axios.post('http://localhost:8080/api/v1/users',user)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error)
        });
    }

    render() {
        return ( <div className="NewUser">
        <h5>{this.props.text}</h5>
        <form className="Form">
            <label>TC ID
                <input type="number" 
                name="tcId" 
                pattern="[0-9]{11}" 
                required placeholder="11111111111" 
                value={this.state.tcId}
                onChange={(event) => this.setState({tcId: event.target.value})}/></label>
            <label>Email
                <input type="email"
                 name="email" required 
                 placeholder="email" 
                 value={this.state.email}
                 onChange={(event) => this.setState({email: event.target.value})}/></label>
            <label>Phone Number
                <input type="tel" 
                name="phone" required 
                placeholder="5555555555" 
                pattern="[0-9]{10}"
                value={this.state.phone}
                onChange={(event) => this.setState({phone: event.target.value})}/></label>
            <label>Password
                <input type="password" 
                name="password" 
                minLength="8" required
                value={this.state.password}
                onChange={(event) => this.setState({password: event.target.value})}
                placeholder="create password" 
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                title="Must contain one number and one uppercase and lowercase letter, and at least 8characters"/></label>
            <label>Adress
                <input type="text" 
                name="address" required
                value={this.state.address}
                onChange={(event) => this.setState({address: event.target.value})}/></label>
            <input className="SaveButton" type="submit" value={this.props.buttonText} onClick={this.addNewUserHandler} />
        </form>
    </div>
        );
    }
}
export default NewUser;