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
        errorMessage: ''
    };

    addNewUserHandler = () => {
        const user = {
            tckn:this.state.tcId,
            email: this.state.email,
            gsm:this.state.phone,
            password: this.state.password,
            address:this.state.address
        };
          if((user.tckn && user.email && user.gsm && user.password && user.address) !== '') {
               axios.post('/users',user)
            .then(response => {
            })
            .catch(error => {
                console.log(error)
            });
        } else {
            this.setState({errorMessage: "All the Fields are required!"});
        }
        }
        
        handleSubmit(event) {
            event.preventDefault();
        }

    render() {
        return ( 
            <>
        <div className="NewUser">
        <h5>{this.props.text}</h5>
        <form className="Form" onSubmit={this.handleSubmit} action="">
            <label>Identifiant
                <input type="number" 
                name="tcId" 
                pattern="[0-9]{11}" 
                required placeholder="1234567890" 
                value={this.state.tcId} //He
                onChange={(event) => this.setState({tcId: event.target.value})}/></label><br></br>
            <label>Email
                <input type="email"
                 name="email" required 
                 placeholder="email" 
                 value={this.state.email}
                 onChange={(event) => this.setState({email: event.target.value})}/></label><br></br>
            <label>Telephone
                <input type="tel" 
                name="phone" required 
                placeholder="123456789" 
                pattern="[0-9]{10}"
                value={this.state.phone}
                onChange={(event) => this.setState({phone: event.target.value})}/></label><br></br>
            <label>Mot de passe
                <input type="password" 
                name="passwordHashed" 
                minLength="8" required
                value={this.state.passwordHashed}
                onChange={(event) => this.setState({password: event.target.value})}
                placeholder="Mot de passe" 
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                title="Must contain one number and one uppercase and lowercase letter, and at least 8characters"/></label><br></br>
            <label>Adresse
                <input type="text" 
                name="address" required
                value={this.state.address}
                onChange={(event) => this.setState({address: event.target.value})}/></label><br></br>
            <input className="SaveButton" type="submit" value={this.props.buttonText} onClick={this.addNewUserHandler} />
        </form>
    </div>
     <p>{this.state.errorMessage} </p>
    </>
        );
    }
}
export default NewUser;