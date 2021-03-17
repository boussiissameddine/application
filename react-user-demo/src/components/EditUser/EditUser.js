import React, {Component} from 'react';
import './EditUser.css';
import axios from 'axios';

class EditUser extends Component {
    state = {
        tcId :'' ,
        email:'',
        phone: '',
        password: '',
        address: '',
    };

    componentDidMount() {
        if(this.props.userId) {
             if(!this.state.editableUser || (this.state.editableUser && this.state.editableUser.id !== this.props.userId)) { 
                 axios.get('http://localhost:8080/api/v1/users/' + this.props.userId)
                 .then(response => {
                     this.setState({
                        tcId: response.data.tckn,
                        email: response.data.email,
                        phone: response.data.gsm,
                        password: response.data.password,
                        address:response.data.address}); 
                 });
             }
         }
    }

    saveEditedUserHandler=() => {
        const user = {
            tcId:this.state.tcId,
            email: this.state.email,
            phone:this.state.phone,
            password: this.state.password,
            address:this.state.address,
        };
        axios.put('http://localhost:8080/api/v1/users' + this.props.userId + user)
        .then(response => {
            console.log(response);
        });
    };

    render() {
        let post = <p className="NewUser">Loading</p>; 
        if(this.props.userId) {
            post = <div className="NewUser">
        <h5>{this.props.text}</h5>
        <form className="Form">
            <label>TC ID
                <input type="number" 
                name="tcId" 
                pattern="[0-9]{11}" 
                required
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
                placeholder="555-555-5555" 
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                value={this.state.phone}
                onChange={(event) => this.setState({phone: event.target.value})}/></label>
            <label>Password
                <input type="password" 
                name="password" 
                minlength="8" required
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
            <input className="SaveButton" type="submit" value={this.props.buttonText} onClick={this.props.clicked} />
        </form>
    </div>; 
        }

        return post;
    
    }
}
export default EditUser;