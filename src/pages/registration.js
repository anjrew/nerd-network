import React from 'react';
import axios from '../react_utils/axios';
import id from '../react_utils/ids';
import { Link } from 'react-router-dom';

// Components
import { TextField } from '../components/inputs/textfield';
import { CenteredColumn } from '../components/layout/centered_column';
import { ErrorMessage } from '../components/text/error_message';
import routes from '../react_utils/react_routes';

export class Registration extends React.Component{

    constructor (props) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
    }

    render(){
        console.log(this.state);
        return (
            <React.Fragment>
                {this.state.error && <ErrorMessage>{this.state.error}</ErrorMessage>}
                <CenteredColumn>
                    <TextField inputType="text" label="First name" id={id.firstName} handleChange={this.handleChange} required/>
                    <TextField inputType="text" label="Last name" id={id.lastName} handleChange={this.handleChange} required/>
                    <TextField inputType="text" label="Email" id={id.email} handleChange={this.handleChange} required/>
                    <TextField inputType="password" label="Password" id={id.password} handleChange={this.handleChange} required/>
                    <button onClick={() => this.submit()}>Sign-up</button>
                </CenteredColumn>
                <Link className='link-button' to={routes.login}>Click here to Log in!</Link>
            </React.Fragment>
        );
    }

    handleChange({ target }) {
        this.setState({
            [target.name]: target.value
        });
        
    }

    submit(){
        console.log('Sign up button pressed');
        console.log(this.state);
        axios.post(routes.registration, {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
        }).then((response) => {
            if (response.success){
                location.replace('/');
            } else {
                this.setState({
                    error: response.error,
                });
            }
        }).catch((e) =>{
            console.log(e);
            this.setState({
                error: e
            });
        });
    }

    switchToLogin(){
        console.log('Switching to login');
    }
}