import React from 'react';
import axios from '../react_utils/axios';
import id from '../react_utils/ids';
import { Link } from 'react-router-dom';
import Routes from '../react_utils/routes';

// Components
import { TextField } from '../components/inputs/textfield';
import { CenteredColumn } from '../components/layout/centered_column';
import { ErrorMessage } from '../components/text/error_message';

export class Registration extends React.Component{

    constructor (props) {
        super(props);
        this.state = {};
    }

    render(){
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
                <Link className='link-button' to={Routes.login}>Click here to Log in!</Link>
            </React.Fragment>
        );
    }

    handleChange({ target }) {
        console.log('Handling text change with name: ', target.name, ' with Value: ', target.value );
        this.setState({
            [target.name]: target.value
        });
    }

    submit(){
        console.log('Sign up button pressed');
        axios.post('/register', {
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
            this.setState({
                error: e
            });
        });
    }

    switchToLogin(){
        console.log('Switching to login');
    }
}